const playButton = document.getElementById("playButton");
const audio = document.getElementById("bgm");
const message = document.getElementById("message");

function typeWriterEffect(text, element, speed = 70) {
  element.innerHTML = "";
  let i = 0;
  function typing() {
    if (i < text.length) {
      const char = text.charAt(i);
      element.innerHTML += char === "\n" ? "<br>" : char;
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = ["💖", "💕", "🐱", "🐾", "😽", "🐈‍⬛", "💘", "💞"][Math.floor(Math.random() * 4)];
  heart.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 2000);
}


playButton.addEventListener("click", () => {
  audio.play();
  playButton.disabled = true;
  playButton.style.opacity = 0.6;

  for (let i = 0; i < 6; i++) {
    setTimeout(createHeart, i * 300);
  }

  const text = `💝 Chúc em 20/10 🎀\nNgập tràn những điều hạnh phúc 💕,\nluôn vui vẻ 🐱, xinh xắn 🌷,\ntươi tắn và luôn nở nụ cười xinh tươi trên môi đó nha 🌸😽💕`;
  typeWriterEffect(text, message, 70);

  setTimeout(() => {
  const finalMsg = document.createElement("p");
  finalMsg.textContent = "💗 Anh chúc cô chủ quán của anh có một ngày 20/10 thật đặc biệt 💗";
  finalMsg.classList.add("final-message");
  message.appendChild(finalMsg);
}, 13000);
});

