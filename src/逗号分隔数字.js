const num = 341355555

function parse(num) {

  const arr = []

  while (num) {
    const rem = num % 1000
    num = num / 1000 | 0
    arr.unshift(rem)
  }

  return arr.join(',')

}

console.log(parse(num))
