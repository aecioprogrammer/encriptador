function start() {
  let buttonEncrypt = document.querySelector("#encryptButton");
  let buttonDecrypt = document.querySelector("#decryptButton");
  let buttonCopy = document.querySelector("#copyButton");
  buttonEncrypt.addEventListener("click", handleEncryptButton);
  buttonDecrypt.addEventListener("click", handleDecryptButton);
  buttonCopy.addEventListener("click", handleCopyButton);
}

function handleEncryptButton() {
  console.log("Funcionou!");
}

function handleDecryptButton() {
  console.log("Funcionou Também");
}

function handleCopyButton() {
  console.log("Copiando");
}
start();
