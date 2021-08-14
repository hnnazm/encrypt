const ALBHABET_NUM = 26   // alphabet letters amount
const VOWELS = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

// Character Code reference for shifting limitation
// letter 'A' start on 65
// letter 'Z' end on 90
// letter 'a' start on 97
// letter 'z' end on 122

export function encrypt(originalText, randomKey) {
  return originalText
    .split('')
    .map(letter => {
      if (letter.match(/[a-z]/i)) {   // match regex case insensitive
        let characterCode = letter.charCodeAt()
        let shift = characterCode >= 65 && characterCode <= 90 ? 65 :
          characterCode >= 97 && characterCode <= 122 ? 97 : 0

        if (VOWELS.includes(letter))
          return String.fromCharCode(((characterCode - shift + parseInt(randomKey[0]))
            % ALBHABET_NUM) + shift)
        else
          return String.fromCharCode(((characterCode - shift + parseInt(randomKey[1]))
            % ALBHABET_NUM) + shift)
      }

      return letter   // if the letter is non-character, just return as it is
    })
    .join('')
}
