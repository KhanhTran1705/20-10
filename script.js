const playButton = document.getElementById("playButton");
const audio = document.getElementById("bgm");
const message = document.getElementById("message");

function typeWriterEffect(text, element, speed = 70, color = "#ff6fb1", delay = 0) {
  setTimeout(() => {
    const span = document.createElement("span");
    span.style.color = color;
    span.style.display = "block"; // mỗi dòng 1 block => xuống hàng
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

playButton.addEventListener("click", () => {
  audio.play();
  playButton.disabled = true;
  playButton.style.opacity = 0.6;

  // Hai dòng chúc 💌
  const line1 = "💖 Chúc em 20/10 🎀";
  const line2 = "Ngập tràn những điều hạnh phúc 💕, luôn vui vẻ 🐱, xinh xắn 🌷, tươi tắn và luôn nở nụ cười xinh tươi trên môi đó nha 🌸😽💕";

  // Gõ dòng 1 (màu hồng đậm)
  typeWriterEffect(line1, message, 70, "#ff6fb1");

  // Gõ dòng 2 (màu tím pastel), bắt đầu sau khi dòng 1 gõ xong
  typeWriterEffect(line2, message, 60, "#b488f1", line1.length * 70 + 500);
});
