function RSA() {

  function generatePrime() {
    var num = parseInt(Math.random() * 99);
    if (num % 2 !== 0) {
      return num;
    }
    return generatePrime();
  }
  const p = generatePrime();
  const q = generatePrime();

  const publicKey = p * q;
  const delta = (p - 1) * (q - 1);

  const e = 3;
  const k = Math.random() * 10;

  const privateKey = parseInt((k * delta + 1) / e);

  console.log("private key =", privateKey, "public key =", publicKey);
}

RSA()


