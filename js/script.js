const form = document.querySelector("#generate-form");
const qr = document.querySelector("#qrcode");

const onGenerateQR = (event) => {
  event.preventDefault();
};

form.addEventListener("submit", onGenerateQR);
