# Encryption Application
This website is created solely for the purpose of coding assessment at INVOKE.


## Design Approach
Try to organizing code to as modular as it could. I created new folders named `views`, `css`, `components`, and `utilities`. This should allow me to organise my code logically. All these folders are self-explained.

- `views`: seperate each of the routes
- `css`: contains all the css for each components and routes
- `components`: logical piece of code to render
- `utilities`: logical piece of code that perform a task

Separating these files and code make it easier for me to debug and also maintain if the codebase shall expands.

I also created this website by using a function-based components for the React. I am more comfortable using this method because in my opinion, it is much more natural approach and there is less abstraction in JavaScript code compared to the class-based components.


### Technology Stack
1. NodeJS
2. DigitalOcean App


### Dependencies
1. Core React Library
2. react-router-dom


## Random Key
The random key generator function is very straightforward and there is no need to use external library for this simple use case. I just used the built in `random` function in the NodeJS `Math` module.

```javascript
export function generateRandom(MIN, MAX) {
  return (Math.floor(Math.random() * MAX) + MIN).toString().split('')
}
```

`Math.random()` will return a random number ranging from 0 to 1. That is why I need to multiply it by the `MAX` value to get a number that does not exceed the maximum value given. I also needed to add `MIN` value so that the number will not be below the minimum value given. Since the function will return a float value, I need to convert it to a integer value to get a proper random number that will used for the next step. Last but not least this function will return an array of single digit number (in String).


## Encryption Algorithm
The algorithm described in the task is most probably Caesar Cipher technique.

```javascript
const ALBHABET_NUM = 26   // alphabet letters amount
const VOWELS = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

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
```

This function need to receive two arguments, which are the a `String` of original text to be encrypted and an `Array` of number that need for the shifting of the characters.

`split()` function will split the original text given into an array of characters. Then the array is passed to the `map()` method that will loop this array and perform a function on each character. `map()` function receive only one arguments which is the a function that have a parameter of member of the array that was on iteration.

The first thing that will be execute inside the function is to compared whether it is an alphabet. I used a regex to compared the alphabet and its case. If it is matched, then it will be further compared whether the character is a vowel or consonant. Then it will do a proper shifting defined in the requirements.

In order to shift a character, we need to know its character code as defined in the ASCII table. But the most important information needed for this encryption are as follows:
- Letter 'A' starts at 65 
- Letter 'Z' ends at 90
- Letter 'z' starts at 97
- Letter 'z' ends at 122

```javascript
let shift = characterCode >= 65 && characterCode <= 90 ? 65 : characterCode >= 97 && characterCode <= 122 ? 97 : 0
```

This line of code is used to determined the boundary in the ASCII table in order to shift the character. We don't want to get any other character (i.e. symbols) besides alphabets in the ASCII table.

The following piece of code perform the shifting based on the character code and the boundary that had been determined. I just add the character code by the random number generated to shift the character.

Lastly, I joined the array back to string and return it.

## References
- [React Documentation](https://reactjs.org)
- [react-router-dom documentation](https://reactrouter.com)
- [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher)
- [ASCII table](https://www.asciitable.com)
- [StackOverflow Question](https://stackoverflow.com/a/33085029)
