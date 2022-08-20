const form = document.querySelector("#generate-form");
const qr = document.querySelector("#qrcode");

// Submit Button
const onGenerateQR = (event) => {
  event.preventDefault();

  clearUI();

  const url = document.querySelector("#url").value;
  const size = document.querySelector("#size").value;

  // validate url
  if (url === "") {
    alert("Please enter a valid URL");
  } else {
    showSpinner();

    setTimeout(() => {
      hideSpinner();

      generateQRCode(url, size);

      setTimeout(() => {
        const saveUrl = qr.querySelector("img").src;
        createSaveBtn(saveUrl);
      }, 50);
    }, 1000);
  }
};

const generateQRCode = (url, size) => {
  const qrcode = new QRCode("qrcode", {
    text: url,
    width: size,
    height: size,
  });
};

const showSpinner = () => {
  document.querySelector("#spinner").style.display = "block";
};
const hideSpinner = () => {
  document.querySelector("#spinner").style.display = "none";
};

// Clear the code
const clearUI = () => {
  qr.innerHTML = "";

  const saveBtn = document.querySelector("#save");
  if (saveBtn) {
    saveBtn.remove();
  }
};

// create save button
const createSaveBtn = (saveUrl) => {
  const link = document.createElement("a");
  link.id = "save";
  link.classList = "saveButton";
  link.href = saveUrl;
  link.download = "qrcode";
  link.innerHTML = "Save Image";
  document.querySelector("#generated").appendChild(link);
};

hideSpinner();

form.addEventListener("submit", onGenerateQR);
