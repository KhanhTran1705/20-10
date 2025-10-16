const playButton = document.getElementById("playButton");
const audio = document.getElementById("bgm");
const message = document.getElementById("message");

function typeWriterEffect(text, element, speed = 70, color = "#ff6fb1", delay = 0) {
  setTimeout(() => {
    const span = document.createElement("span");
    span.style.color = color;
    span.style.display = "block";
    span.style.marginTop = "8px";
    element.appendChild(span);

    let i = 0;
    function typing() {
      if (i < text.length) {
        span.textContent += text.charAt(i);
        i++;
        setTimeout(typing, speed);
      }
    }

    typing();
  }, delay);
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
  playButton.textContent = "🎵🎶🎵🎶🎵";
  playButton.disabled = true;
  playButton.style.backgroundColor = "#f9bcd0";
  playButton.style.opacity = 0.8;
  playButton.style.cursor = "default";

  for (let i = 0; i < 6; i++) {
    setTimeout(createHeart, i * 300);
  }
  const line1 = "💖 Chúc em 20/10 🎀";
  const line2 = "Ngập tràn những điều hạnh phúc 💕, luôn vui vẻ 🐱, xinh xắn 🌷, tươi tắn và luôn nở nụ cười xinh tươi trên môi đó nha 🌸😽💕";

  typeWriterEffect(line1, message, 70, "#ff6fb1");

  typeWriterEffect(line2, message, 60, "#b488f1", line1.length * 70 + 500);

  setTimeout(() => {
  const finalMsg = document.createElement("p");
  finalMsg.textContent = "💗 Anh chúc cô chủ quán của anh có một ngày 20/10 thật đặc biệt 💗";
  finalMsg.classList.add("final-message");
  message.appendChild(finalMsg);
}, 13000);

});
