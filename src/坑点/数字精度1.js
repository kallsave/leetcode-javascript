// https://juejin.im/post/5bb474166fb9a05cfc54e94d

// 2 的53次方时,是最大精度,超过这个数的运算会计算失效
let max = Math.pow(2, 53)
console.log(max)
// 16位,值为9007199254740992
console.log(String(max).length)
console.log(max + 1)

let a = 111111111111111110000
let b = 1111
console.log(a + b)
