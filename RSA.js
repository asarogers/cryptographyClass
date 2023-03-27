function RSA() {
  //this will return a prime number when called
  function generatePrime() {
    var num = parseInt(Math.random() * 99);
    if (num % 2 !== 0) {
      return num;
    }
    return generatePrime();
  }

  //get the p & q
  const p = generatePrime();
  const q = generatePrime();

  //this is the n,which I assume is the public key
  const publicKey = p * q;
  //called it delta because I have no idea how to prounce this thing Φ(n)
  const delta = (p - 1) * (q - 1);

  const e = 3;
  //not sure if k needs to be an input from the user or randomly generated
  //currently k is randomly generated between  1 < k < 10
  const k = Math.random() * 10;

  //this is the equation for d, which I assume is the d
  //d = (k*Φ(n) + 1) / e for some integer k
  const privateKey = parseInt((k * delta + 1) / e);

  console.log("private key =", privateKey, "public key =", publicKey);
}

RSA()


