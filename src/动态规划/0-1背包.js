// https://zhuanlan.zhihu.com/p/112075593
// https://segmentfault.com/a/1190000012829866

// 0-1背包问题
// 其实是算状态全排列的过程,用递推的思想去求最大值

// 有n个物品，价值分别为v1,v2...,重量为w1,w2...,现有一个购物车,容量为W,
// 求装入物品的总价值的最大值

const W = 4
const weightList = [2, 1, 3]
const valueList = [4, 2, 3]

// const N = 3
// const W = 5
// const weightList = [3, 1, 2]
// const valueList = [3, 1, 2]

// 步骤一: 明确状态和选择
// 状态:「背包的容量」和「可选择的物品」
// 选择就是「装进背包」或者「不装进背包」

// 步骤二: 明确dp数组的定义
// 用dp[w][i]表示容量为w的背包,0~i索引的物品中挑选,能装下的最大价值

// 步骤三: 找出数据关系,dp[i]转换成子问题

// 步骤四: 处理dp初始的数据

// 用dp[w][i]表示容量为w的背包,0~i索引的物品中挑选,能装下的最大价值
function knapsack(weightList, valueList, W) {
  const n = weightList.length - 1
  const dp = []

  for (let w = 0; w <= W; w++) {
    if (!dp[w]) {
      dp[w] = []
    }
    for (let i = 0; i <= n; i++) {
      const value = valueList[i]
      const weight = weightList[i]

      if (w === 0) {
        dp[w][i] = 0
      }

      if (i === 0) {
        if (w - weight >= 0) {
          dp[w][i] = value
        } else {
          dp[w][i] = 0
        }
        continue
      }

      if (w - weight >= 0) {
        dp[w][i] = Math.max(
          dp[w][i - 1],
          dp[w - weight][i - 1] + value
        )
      } else {
        dp[w][i] = dp[w][i - 1]
      }
    }
  }
  return dp[W][n]
}

console.log(knapsack(weightList, valueList, W))
