function encrypt(text, n) {
  if (!text) {
    return text;
  }
  var chars = text.split('');
  while (n-- > 0) {
    var oddChars = chars.filter((c, i) => i & 1);
    var evenChars = chars.filter((c, i) => !(i & 1));
    chars = oddChars.concat(evenChars);
  }
  return chars.join('');
}

function decrypt(encryptedText, n) {
  if (!encryptedText) {
    return encryptedText;
  }
  var chars = encryptedText.split('');
  var mid = parseInt(chars.length / 2);
  while (n-- > 0) {
    var oddChars = chars.slice(0, mid);
    var evenChars = chars.slice(mid);
    chars = [];
    while (oddChars.length || evenChars.length) {
      if (evenChars.length) {
        chars.push(evenChars.shift());
      }
      if (oddChars.length) {
        chars.push(oddChars.shift());
      }
    }
  }
  return chars.join('');
}