let chave = ["ai", "enter", "imes", "ober", "ufat"];

function start() {
  reset();
  clearTextArea();
  clickEncryptButton();
  clickDecryptButton();
  clickCopyButton();
}

function disableElements() {
  let encryptTextAreaValue = document.querySelector("#textToEncrypt");
  let imageDecrypt = document.querySelector("#decryptImage");
  let divDecryptMessages = document.querySelector("#decryptMessages");
  let textDecryptArea = document.querySelector("#textToDecrypt");
  let buttonCopy = document.querySelector("#copyButton");

  const text = encryptTextAreaValue.value;

  console.log(text.length>0);

  if (text.length) {
    console.log("não exibe imagem");
    imageDecrypt.classList.add("disabledElement");
    divDecryptMessages.classList.add("disabledElement");
    textDecryptArea.classList.remove("disabledElement");
    buttonCopy.classList.remove("disabledElement");
    
    
  } else {
    console.log("exibe imagem");   

    imageDecrypt.classList.remove("disabledElement");
    divDecryptMessages.classList.remove("disabledElement");
    textDecryptArea.classList.add("disabledElement");
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
  let textArea = document.querySelector("#textToEncrypt");
  textArea.addEventListener("click", handleTextAreas);
}

function handleTextAreas() {
  reset();
}

function handleEncryptButton() {
  let encryptTextAreaValue = document.querySelector("#textToEncrypt");
  let decryptTextAreaValue = document.querySelector("#textToDecrypt");
  let textToEncrypt = encryptTextAreaValue.value;

  let encryptedText = "";
  for (let char of textToEncrypt) {
    encryptedText += encryptText(char);
  }

  decryptTextAreaValue.value = encryptedText;
  disableElements();
}

function handleDecryptButton() {
  let encryptTextArea = document.querySelector("#textToEncrypt");
  let decryptTextArea = document.querySelector("#textToDecrypt");
  let textToDecrypt = decryptText(encryptTextArea.value);
  decryptTextArea.value = textToDecrypt;
  disableElements();
}

function handleCopyButton() {
  let decryptTextArea = document.querySelector("#textToDecrypt");
  decryptTextArea.select();
  decryptTextArea.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("O texto é: " + textoCopiado.value);
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
  let encryptTextArea = document.querySelector("#textToEncrypt");
  let decryptTextArea = document.querySelector("#textToDecrypt");
  encryptTextArea.value = "";
  decryptTextArea.value = "";
  // disableElements();
}

start();
