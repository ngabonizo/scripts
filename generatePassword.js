function generatePassword(passLength){

  const passwordChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let password = ''

  function rand(){
    return Math.floor(Math.random()*passwordChars.length)
  }

  for(let i=0; i<passLength; i++){
    // randomValue.push(rand())
    let randomValue = rand();
    password += passwordChars[randomValue]
  }

  return password
}


console.log(generatePassword(5))


function generatePassword(length = 12) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
    let password = "";

    // Modern way 1: using crypto (most secure in browsers & Node.js)
    // const array = new Uint32Array(length);
    // crypto.getRandomValues(array);
    // for (let i = 0; i < length; i++) {
    //     password += chars[array[i] % chars.length];
    // }

    // Simple & good enough version (your original style, cleaned up):
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    return password;
}

// Examples:
console.log(generatePassword(8));   // e.g.  kJ9#mPx$
console.log(generatePassword(12));  // e.g.  7vN&xL2qP@9m
console.log(generatePassword(20));  // longer one


function generateSecurePassword(length = 16) {
    if (length < 8) {
        throw new Error("Password should be at least 8 characters");
    }

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{};:,.<>?/~`";
    
    // Use crypto when available (almost everywhere in 2025)
    if (crypto && crypto.getRandomValues) {
        const array = new Uint32Array(length);
        crypto.getRandomValues(array);
        
        let password = "";
        for (let i = 0; i < length; i++) {
            password += chars[array[i] % chars.length];
        }
        return password;
    }
    
    // Fallback (older environments)
    let password = "";
    for (let i = 0; i < length; i++) {
        password += chars[Math.floor(Math.random() * chars.length)];
    }
    return password;
}

