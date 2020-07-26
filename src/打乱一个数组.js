function getRandomInt(min, max) {
  return Math.random() * (max - min + 1) + min | 0
}

function shuffle(arr) {
  let clone = arr.slice()
  const length = clone.length
  for (let i = 0; i < length; i++) {
    let j = getRandomInt(0, length - 1)
    let temp = clone[i]
    clone[i] = clone[j]
    clone[j] = temp
  }
  return clone
}

const arr = [1, 3, 5]
console.log(shuffle(arr))
