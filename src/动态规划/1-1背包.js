// 有无数个物品，价值分别为v1,v2...,重量为w1,w2...,
// 现有一个购物车,容量为W
// 求装入物品的总价值的最大值

const W = 10
const weightList = [2, 1, 3]
const valueList = [1, 2, 3]

// 用dp[w]表示容量为w的背包装进物品的总价值的最大值
function getMax(weightList, valueList, W) {

  const dp = []
  dp[0] = 0

  for (let w = 1; w <= W; w++) {
    let max = 0
    for (let i = 0; i < weightList.length; i++) {
      const weight = weightList[i]
      const value = valueList[i]

      if (w >= weight) {
        max = Math.max(
          max,
          dp[w - weight] + value,
          dp[w - 1]
        )
      } else {
        max = Math.max(
          max,
          dp[w - 1]
        )
      }
    }
    dp[w] = max
  }
  return dp[W]
}

console.log(getMax(weightList, valueList, W))
