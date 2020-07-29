// true转1
console.log(true < 3)
// false转0
console.log(false > -1)

// [true, true]
console.log([
  1 < 2 < 3,
  3 < 2 < 1
])

// 字符串转数字
console.log(3 - '2')

// 数字转字符串
console.log(3 + '2')

// undefined转字符串
const obj = {}
const str = '+' + obj.name;
console.log(str)

if (/^undefined$/.test(obj.valid)) {
  console.log(`undefined被隐形转换成字符串'undefined'`)
}


