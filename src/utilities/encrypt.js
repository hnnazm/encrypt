const VOWELS = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

// export default function encrypt(originalText) {
//   const letters = originalText.split('')
//   // const randomKey = generateRandom(MIN, MAX)
//   const encryptedLetter = []
// 
//   letters.forEach((letter) => {
//     if (VOWELS.includes(letter))
//       encryptedLetter.push(String.fromCharCode(letter.charCodeAt() + 2))
//     else if (letter == ' ') encryptedLetter.push(' ')
//     else {
//       if (letter == 'z') encryptedLetter.push('a')
//       else if (letter == 'Z') encryptedLetter.push('A')
//       else encryptedLetter.push(String.fromCharCode(letter.charCodeAt() + 6))
//     }
//   })
// 
//   return encryptedLetter.join('')
// }

export function encrypt(originalText, randomKey) {
  var n = 26; // alphabet letters amount

  if (randomKey[1] < 0) {
    return encrypt(originalText, randomKey[1] + n);
  }

  return originalText.split('')
    .map(function (letter) {
      if (letter.match(/[a-z]/i)) {
        var code = letter.charCodeAt();
        var shift = code >= 65 && code <= 90 ? 65 : code >= 97 && code <= 122 ? 97 : 0;
        if (VOWELS.includes(letter))
          return String.fromCharCode(((code - shift + parseInt(randomKey[0])) % n) + shift);
        else
          return String.fromCharCode(((code - shift + parseInt(randomKey[1])) % n) + shift);
      }
      return letter;
    }).join('');
}
