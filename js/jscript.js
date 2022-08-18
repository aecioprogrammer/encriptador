let chave = ["ai", "enter", "imes", "ober", "ufat"];

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
    console.log("não exibe imagem");
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
  let buttonEncrypt = document.querySelector("#encryptButton");
  buttonEncrypt.addEventListener("click", handleEncryptButton);
}

function clickDecryptButton() {
  let buttonDecrypt = document.querySelector("#decryptButton");
  buttonDecrypt.addEventListener("click", handleDecryptButton);
}

function clickCopyButton() {
  let buttonCopy = document.querySelector("#copyButton");
  buttonCopy.addEventListener("click", handleCopyButton);
}

function clearTextArea() {
  let textArea = document.querySelector("#textToEncryptArea");
  textArea.addEventListener("click", handleTextAreas);
}

function handleTextAreas() {
  reset();
  //disableElements();
}

function handleEncryptButton() {
  let encryptTextAreaValue = document.querySelector("#textToEncryptArea");
  let decryptTextAreaValue = document.querySelector("#textToDecryptArea");
  let textToEncrypt = encryptTextAreaValue.value;

  let encryptedText = "";
  for (let char of textToEncrypt) {
    encryptedText += encryptText(char);
  }

  decryptTextAreaValue.value = encryptedText;
  disableElements();
}

function handleDecryptButton() {
  let encryptTextArea = document.querySelector("#textToEncryptArea");
  let decryptTextArea = document.querySelector("#textToDecryptArea");
  let textToDecrypt = decryptText(encryptTextArea.value);
  decryptTextArea.value = textToDecrypt;
  disableElements();
}

function handleCopyButton() {
  let decryptTextArea = document.querySelector("#textToDecryptArea");
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

function reset() {
  let encryptTextArea = document.querySelector("#textToEncryptArea");
  let decryptTextArea = document.querySelector("#textToDecryptArea");
  encryptTextArea.value = "";
  decryptTextArea.value = "";
  disableElements();
}

start();
