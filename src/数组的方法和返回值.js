// 改变数组的7种方法
// push, pop, shift, unshift, reverse, sort, splice

const pushArr1 = [1, 5, 6, 9]
console.log(pushArr1.push(0))
console.log(pushArr1)


// concat,合并数组返回新的数组,不改变原来的数组
const concatArr1 = [1, 5, 6, 9]
const concatArr2 = [0, 2, 3, 0]

console.log(concatArr1.concat(concatArr2))
console.log(concatArr1)
