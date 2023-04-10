// The substitution table for the algorithm
const substitutionTable = {
    'A': 'Z',
    'B': 'Y',
    'C': 'X',
    'D': 'W',
    'E': 'V',
    'F': 'U',
    'G': 'T',
    'H': 'S',
    'I': 'R',
    'J': 'Q',
    'K': 'P',
    'L': 'O',
    'M': 'N',
    'N': 'M',
    'O': 'L',
    'P': 'K',
    'Q': 'J',
    'R': 'I',
    'S': 'H',
    'T': 'G',
    'U': 'F',
    'V': 'E',
    'W': 'D',
    'X': 'C',
    'Y': 'B',
    'Z': 'A'
  };
  const plaintext = 'BULLDOGS';

  // The permutation table for the algorithm
  const permutationTable = [3, 1, 4, 2];
  
  // The number of rounds to use
  const numRounds = 5;
  
  // The block size to use
  const blockSize =1;
  console.log(blockSize)
  // Encrypt a plaintext message
  function encrypt(plaintext) {
    // Divide the plaintext into blocks of size `blockSize`
    const blocks = plaintext.match(new RegExp(`.{1,${blockSize}}`, 'g'));
  
    // For each block, apply multiple rounds of substitution and permutation
    const ciphertextBlocks = blocks.map(block => {
      let ciphertextBlock = block;
  
      for (let round = 0; round < numRounds; round++) {
        // Apply permutation
        const permutedBlock = [];
        for (let i = 0; i < permutationTable.length; i++) {
          permutedBlock[permutationTable[i] - 1] = ciphertextBlock[i];
        }
        ciphertextBlock = permutedBlock.join('');
  
        // Apply substitution
        ciphertextBlock = ciphertextBlock.split('').map(symbol => substitutionTable[symbol]).join('');
      }
  
      return ciphertextBlock;
    });
  
    // Return the ciphertext as a single string
    return ciphertextBlocks.join('');
  }
  
  // Decrypt a ciphertext message
  function decrypt(ciphertext) {
    // Divide the ciphertext into blocks of size `blockSize`
    const blocks = ciphertext.match(new RegExp(`.{1,${blockSize}}`, 'g'));
  
    // For each block, apply multiple rounds of permutation and substitution in reverse order
    const plaintextBlocks = blocks.map(block => {
      let plaintextBlock = block;
  
      for (let round = 0; round < numRounds; round++) {
        // Apply substitution in reverse order
        plaintextBlock = plaintextBlock.split('').map(symbol => {
          for (const key in substitutionTable) {
            if (substitutionTable[key] === symbol) {
              return key;
            }
          }
          return symbol;
        }).join('');
  
        // Apply permutation in reverse order
        const permutedBlock = [];
        for (let i = 0; i < permutationTable.length; i++) {
          permutedBlock[i] = plaintextBlock[permutationTable[i] - 1];
        }
        plaintextBlock = permutedBlock.join('');
      }
  
      return plaintextBlock;
    });
  
    // Return the plaintext as a single string
    return plaintextBlocks.join('');
  }
  
  // Example usage
  const ciphertext = encrypt(plaintext);
  console.log(`Ciphertext: ${ciphertext}`);
  console.log(`Plaintext: ${decrypt(ciphertext)}`);
  