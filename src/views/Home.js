import { useState } from 'react'
import { encrypt } from '../utilities/encrypt.js';
import { generateRandom } from '../utilities/random.js';
import '../css/Home.css'

const MIN = 11
const MAX = 100

function Home() {
  const [randomKey, setRandomKey] = useState(null)
  const [originalText, setOriginalText] = useState('')
  const [encryptedText, setEncryptedText] = useState('')
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true);

    let string = e.target[0].value
    const key = generateRandom(MIN, MAX)

    string ? setRandomKey(key) : setRandomKey(null)
    setOriginalText(string)
    setEncryptedText(encrypt(string, key))

    e.target[0].value = ''
    setIsLoading(false);
  }


  return (
    <>
      <h1>Try Encrypt!</h1>
      <p>
        The key for encryption will be a two digit number randomly generated
        within the range 11 to 99.  The 1st digit of the key indicates the
        number of characters to move forward for vowel characters, while the 2nd
        digit for consonant. Each submission has a unique random key generated.
      </p>
      <div className="container-input">
        <div className="container-result">
          <h2>Result</h2>
          {isLoading &&
              <small>Loading..</small>
          }
          <p>
            <strong>Random key :</strong> {randomKey}
          </p>
          <p>
            <strong>Original text :</strong> {originalText}
          </p>
          <p>
            <strong>Encrypted text :</strong> {encryptedText}
          </p>
        </div>
        <form
          onSubmit={(e) => handleSubmit(e, originalText)}
        >
          <input
            type="text"
            name="input-plaintext"
            id="input-plaintext"
            placeholder="Text to be encrypted"
            required
          />

          <button
            type="submit">
            <strong>ENCRYPT!</strong>
          </button>
        </form>
      </div>
    </>
  )
}


export default Home
