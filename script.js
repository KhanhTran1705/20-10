const playButton = document.getElementById("playButton");
const audio = document.getElementById("bgm");
const message = document.getElementById("message");

function typeWriterEffect(text, element, speed = 70) {
  element.textContent = "";
  let i = 0;

  function typing() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }

  typing();
}

playButton.addEventListener("click", () => {
  audio.play();
  playButton.disabled = true;
  playButton.style.opacity = 0.6;

  const text = "💖 Chúc em 20/10 🎀
    ngập tràn những điều hạnh phúc 💕, luôn vui vẻ 🐱, xinh xắn 🌷, tươi tắn và luôn nở nụ cười xinh tươi trên môi đó nha 🌸😽💕";
  typeWriterEffect(text, message, 70); // 70ms = tốc độ mỗi ký tự
});
