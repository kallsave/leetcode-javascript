function isReverse(str) {
  const reverseStr = str.split('').reverse().join('')
  return reverseStr === str
}

console.log(isReverse('gsd8228dsg'))
