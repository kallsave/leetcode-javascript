function getUUid() {
  const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'A', 'B', 'C', 'D', 'E', 'F']
  let str = ''
  let i = 16

  while (i > 0) {
    const num = getRandomInt(0, list.length - 1)
    const item = list.splice(num, 1)[0]
    if (i % 4) {
      str += String(item)
    } else {
      str += '-' + String(item)
    }
    i--
  }
  return str.slice(1)
}

function getRandomInt(min, max) {
  return Math.random() * (max - min + 1) + min | 0
}

console.log(getUUid())
