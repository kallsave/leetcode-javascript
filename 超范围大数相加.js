// js的最大精确整数:
// console.log(Math.pow(2, 53) - 1)

function add(prev, next) {

  const prevArr = prev.split('')
  const nextArr = next.split('')

  let padding = 0
  let result = ''

  while (prevArr.length || nextArr.length || padding) {
    const prevPop = Number(prevArr.pop())
    const nextPop = Number(nextArr.pop())

    const prevNum = prevPop ? prevPop : 0
    const nextNum = nextPop ? nextPop : 0

    const count = prevNum + nextNum + padding

    const rem = count % 10

    padding = count / 10 | 0

    result = rem + result

  }

  return result

}

console.log(add('334355', '565666'))
console.log(334355 + 565666)
