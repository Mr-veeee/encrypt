function encrypt() {
    const message = document.getElementById('message').value;
    const key = document.getElementById('key').value;

    const encryptedMessage = CryptoJS.AES.encrypt(message, key).toString();
    document.getElementById('encrypted').value = encryptedMessage;
}

function decrypt() {
    const encryptedMessage = document.getElementById('encrypted').value;
    const key = document.getElementById('key').value;

    const decryptedMessage = CryptoJS.AES.decrypt(encryptedMessage, key).toString(CryptoJS.enc.Utf8);
    document.getElementById('decrypted').value = decryptedMessage;
}

function shareWhatsApp() {
    const encryptedMessage = document.getElementById('encrypted').value;
    const whatsappLink = `whatsapp://send?text=${encryptedMessage}`;

    window.open(whatsappLink, '_blank');
}
function copyEncrypted() {
  const encryptedMessage = document.getElementById('encrypted').value;
  navigator.clipboard.writeText(encryptedMessage);
  alert('Encrypted message copied to clipboard!');
}
