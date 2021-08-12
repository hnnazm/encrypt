// MAX is exclusive so need to be increased by one
export function generateRandom(MIN, MAX) {
  return (Math.floor(Math.random() * (MAX - MIN)) + MIN).toString().split('')
}
