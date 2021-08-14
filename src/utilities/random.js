// MAX is exclusive so need to be increased by one
// return an array of two number for the encryption algorithm
export function generateRandom(MIN, MAX) {
  return (Math.floor(Math.random() * MAX) + MIN).toString().split('')
}
