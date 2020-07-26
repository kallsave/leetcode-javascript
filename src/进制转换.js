// 算法分析:
// 计算流程,进入下次循环的变量,循环条件,


// 十进制转其他进制
function parse0b(num, raidx) {
  let result = ''

  while (num > 0) {
    const rem = num % raidx
    num = num / raidx | 0
    result = rem + result
  }

  return result
}

// 二进制转十进制
function parse2b(num) {
  let str = String(num)
  const arr = str.split('')
  const len = arr.length

  let result = 0

  for (let i = 0; i < len; i++) {
    const raidx = len - 1 - i
    const item = Number(arr[i])
    result += item * Math.pow(2, raidx)
  }

  return String(result)
}

console.log(parse0b(4, 2))

// console.log(parse2b(100))
