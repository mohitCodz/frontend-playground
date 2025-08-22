let imgBox = document.getElementById("imgBox");
let qrImg = document.getElementById("qrImg");
let qrText = document.getElementById("qrText");

function generateQR() {
    if (qrText.value.trim() === "") {
        alert("Please enter some text or a URL!");
        return;
    }

    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" 
                + encodeURIComponent(qrText.value);
    imgBox.style.display = "block"; 
}
