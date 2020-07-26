const mathjs = require('mathjs')

function add(num1, num2) {
  const num1Digits = (toString(num1).split('.')[1] || '').length
  const num2Digits = (toString(num2).split('.')[1] || '').length
  const rate = Math.pow(10, Math.max(num1Digits, num2Digits))
  return (num1 * rate + num2 * rate) / rate
}

function repeatString(str, n) {
  if (n < 0) {
    return ''
  }
  return new Array(n + 1).join(str)
}

function paddingZeroRight(str, n) {
  return str + repeatString('0', n)
}

// 出现数字精度,是在
function strip(num) {
  return parseFloat(num.toPrecision(15))
}

function round(num, place) {
  const rate = Math.pow(10, place)
  return Math.round(strip(num * rate)) / rate
}

function toFixed(num, place) {
  const str = String(round(num, place))
  const intStr = str.split('.')[0] || str
  const deciamlStr = str.split('.')[1] || ''
  const deciamlLength = deciamlStr.length
  const diffLength = place - deciamlLength
  let result
  if (diffLength > 0) {
    result = intStr + '.' + paddingZeroRight(deciamlStr, diffLength)
  } else {
    result = intStr + '.' + deciamlStr.slice(0, 2)
  }
  return result
}

// toFixed的bug,5后面没有数就会舍弃,并不是四舍五入
// console.log(1.005.toFixed(2))

// console.log(mathjs.round(1.005, 2))
// console.log(round(1.005, 2))
console.log(toFixed(1.005, 2))
