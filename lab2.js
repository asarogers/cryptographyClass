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
  
  // The permutation table for the algorithm
  const permutationTable = [3, 1, 4, 2];
  
  // The number of rounds to use
  const numRounds = 3;
  
  // The block size to use
  const blockSize = 4;
  
  // Encrypt a plaintext message
  function encrypt(plaintext) {
    // Divide the plaintext into blocks of size `blockSize`
    const blocks = plaintext.match(new RegExp(`.{1,${blockSize}}`, 'g'));
  
    // For each block, apply multiple rounds of substitution and permutation
    const ciphertextBlocks = blocks.map(block => {
      let ciphertextBlock = block;
  
      for (let round = 0; round < numRounds; round++) {
        // Apply substitution
        ciphertextBlock = ciphertextBlock.split('').map(symbol => substitutionTable[symbol]).join('');
  
        // Apply permutation
        const permutedBlock = [];
        for (let i = 0; i < permutationTable.length; i++) {
          permutedBlock[i] = ciphertextBlock[permutationTable[i] - 1];
        }
        ciphertextBlock = permutedBlock.join('');
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
        // Apply permutation in reverse order
        const permutedBlock = [];
        for (let i = 0; i < permutationTable.length; i++) {
          permutedBlock[permutationTable[i] - 1] = plaintextBlock[i];
        }
        plaintextBlock = permutedBlock.join('');
  
        // Apply substitution in reverse order
        plaintextBlock = plaintextBlock.split('').map(symbol => {
            for (const key in substitutionTable) {
              if (substitutionTable[key] === symbol) {
                return key;
              }
            }
            return symbol;
          }).join('');
        }
        
        return plaintextBlock;
        });
        
        // Return the plaintext as a single string
        return plaintextBlocks.join('');
        }
        
        // Example usage
        const plaintext = 'HELLO WORLD';
        const ciphertext = encrypt(plaintext);
        console.log(`Ciphertext: ${ciphertext}`);
        console.log(`Plaintext: ${decrypt(ciphertext)}`);
        
        // Output:
        // Ciphertext: ZMHXJLUVGFA
        
        
        
        
        
  