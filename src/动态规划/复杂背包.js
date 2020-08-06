// 有几个物品，价值分别为v1,v2...,重量为w1,w2...,数量分别为n1,n2...,
// 现有一个购物车,容量为W,
// 求装入物品的总价值的最大值

const W = 10
const weightList = [2, 1, 3]
const valueList = [1, 2, 3]
const numberList = [10, 3, 5]

// 用dp[w][i]表示容量为w的背包,0~i索引的物品中挑选,能装下的最大价值
function getMax(weightList, valueList, numberList, W) {

  const dp = []

  return dp[W]
}

console.log(getMax(weightList, valueList, numberList, W))
console.log(numberList)
