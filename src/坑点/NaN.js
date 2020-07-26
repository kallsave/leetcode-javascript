// false
console.log(NaN === NaN)

// 用isNaN来判断NaN
console.log(isNaN(NaN))

// es6 Object.is
// true
console.log(Object.is(NaN, NaN))

// false
// +0的原码是00000000,反码是00000000
// -0的原码是10000000,反码是11111111
console.log(Object.is(+0, -0))
 