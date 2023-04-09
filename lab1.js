function encrypt(text) {
    var encryptedWord = "";
    var char = '';

    for (let ch of text) {
        char = (ch.charCodeAt(0) + 6);
        encryptedWord += String.fromCharCode(char);
    }
    return  `Encrypted text: ${encryptedWord}`;
}

function decrypt(text) {
    var decrypted = "";
    var char = '';

    for (let ch of text) {
        char = (ch.charCodeAt(0) - 6);
        decrypted += String.fromCharCode(char);
    }
    return (decrypted)
}

console.log(encrypt("AAMU Bulldogs"));