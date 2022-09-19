const chave = ["ai", "enter", "imes", "ober", "ufat"];

function start() {
  reset();
  clearTextArea();
  clickEncryptButton();
  clickDecryptButton();
  clickCopyButton();
}

function disableElements() {
  const encryptTextAreaValue = document.querySelector("#textToEncryptArea");
  const imageDecrypt = document.querySelector("#decryptImage");
  const divDecryptMessages = document.querySelector("#decryptMessagesDiv");
  const decryptTextAreaValue = document.querySelector("#textToDecryptArea");
  const buttonCopy = document.querySelector("#copyButton");
  const pageWidth = document.documentElement.scrollWidth;
  const text = encryptTextAreaValue.value;

  if (text.length) {
    if (pageWidth >= 1000) {
      imageDecrypt.classList.add("disabledElement");
    }
    divDecryptMessages.classList.add("disabledElement");
    decryptTextAreaValue.classList.remove("disabledElement");
    buttonCopy.classList.remove("disabledElement");
  } else if (!text.length) {
    if (pageWidth >= 1000) {
      imageDecrypt.classList.remove("disabledElement");
    }
    divDecryptMessages.classList.remove("disabledElement");
    decryptTextAreaValue.classList.add("disabledElement");
    buttonCopy.classList.add("disabledElement");
  }
}

function clickEncryptButton() {
  const buttonEncrypt = document.querySelector("#encryptButton");
  buttonEncrypt.addEventListener("click", handleEncryptButton);
}

function clickDecryptButton() {
  const buttonDecrypt = document.querySelector("#decryptButton");
  buttonDecrypt.addEventListener("click", handleDecryptButton);
}

function clickCopyButton() {
  const buttonCopy = document.querySelector("#copyButton");
  buttonCopy.addEventListener("click", handleCopyButton);
}

function clearTextArea() {
  const textArea = document.querySelector("#textToEncryptArea");
  textArea.addEventListener("click", handleTextAreas);
}

function handleTextAreas() {
  reset();
}

function handleEncryptButton() {
  const encryptTextAreaValue = document.querySelector("#textToEncryptArea");
  const decryptTextAreaValue = document.querySelector("#textToDecryptArea");

  let textToEncrypt = encryptTextAreaValue.value;
  if (!validateString(textToEncrypt)) {
    //
    showModal();
    window.addEventListener("click", handleWindowListener);
    reset();
  }

  let encryptedText = "";
  for (let char of textToEncrypt) {
    encryptedText += encryptText(char);
  }

  decryptTextAreaValue.value = encryptedText;
  disableElements();
}

function handleDecryptButton() {
  const encryptTextArea = document.querySelector("#textToEncryptArea");
  const decryptTextArea = document.querySelector("#textToDecryptArea");
  const textToDecrypt = decryptText(encryptTextArea.value);
  decryptTextArea.value = textToDecrypt;
  disableElements();
}

function handleCopyButton() {
  const decryptTextArea = document.querySelector("#textToDecryptArea");
  decryptTextArea.select();
  decryptTextArea.setSelectionRange(0, 99999);
  document.execCommand("copy");
}

function encryptText(char) {
  if (char == "a") {
    return chave[0];
  } else if (char == "e") {
    return chave[1];
  } else if (char == "i") {
    return chave[2];
  } else if (char == "o") {
    return chave[3];
  } else if (char == "u") {
    return chave[4];
  } else {
    return char;
  }
}

function decryptText(text) {
  return text
    .replaceAll(chave[0], "a")
    .replaceAll(chave[1], "e")
    .replaceAll(chave[2], "i")
    .replaceAll(chave[3], "o")
    .replaceAll(chave[4], "u");
}

function validateString(textToValidate) {
  const textRGEX = /^[a-z]+$/g; //áàâãéèêíïóôõöúç ]+$/;
  return textRGEX.test(textToValidate);
}

function showModal() {
  const modal = document.querySelector(".modal");
  modal.classList.remove("disabledElement");
}

function disableModal() {
  const modal = document.querySelector(".modal");
  modal.classList.add("disabledElement");
  window.removeEventListener("click", handleWindowListener);
}

function handleWindowListener(Event) {
  const modal = document.querySelector(".modal");
  console.log(Event.target);
  if (Event.target == modal) {
    disableModal();
  }
}

function reset() {
  const encryptTextArea = document.querySelector("#textToEncryptArea");
  const decryptTextArea = document.querySelector("#textToDecryptArea");
  encryptTextArea.value = "";
  decryptTextArea.value = "";
  disableElements();
}

start();
