const imgBox  = document.getElementById("imgBox");
const qrImg   = document.getElementById("qrImg");
const qrText  = document.getElementById("qrText");
const genBtn  = document.getElementById("generateBtn");

function generateQR() {
  const text = qrText.value.trim();

  if (text === "") {
    alert("⚠️ Please enter some text or a URL!");
    imgBox.classList.remove("show");
    imgBox.classList.add("hidden");
    return;
  }

  // Show box + loader text
  imgBox.classList.remove("hidden");
  imgBox.classList.remove("show");
  imgBox.querySelector(".loading").style.display = "block";

  // Generate QR
  qrImg.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" +
    encodeURIComponent(text);

  // When image loads, hide loader + animate QR
  qrImg.onload = () => {
    imgBox.querySelector(".loading").style.display = "none";
    imgBox.classList.add("show");
  };
}

// Button click
genBtn.addEventListener("click", generateQR);

// Enter key support
qrText.addEventListener("keydown", (e) => {
  if (e.key === "Enter") generateQR();
});
