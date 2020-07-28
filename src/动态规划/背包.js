// https://zhuanlan.zhihu.com/p/112075593
// https://segmentfault.com/a/1190000012829866

// 0-1背包问题
// 其实是算状态全排列的过程,用递归的思想去求最大值

// 有n个物品，价值分别为v1,v2...,重量为w1,w2...,现有一个购物车,容量为W,
// 求装入物品的总价值的最大值

const N = 3
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
// dp[i][w]的定义如下：对于前i个物品,当前背包的容量为w,
// 这种情况下可以装的最大价值是dp[i][w]

function knapsack(weightList, valueList, W) {
  const dp = [[]]
  const n = weightList.length - 1

  for (let w = 0; w <= W; w++) {
    if (w < weightList[0]) {
      dp[0][w] = 0
    } else {
      dp[0][w] = valueList[0]
    }
  }

  for (let w = 0; w <= W; w++) {
    for (let i = 1; i <= n; i++) {
      if (!dp[i]) {
        dp[i] = []
      }
      if (w < weightList[i]) {
        dp[i][w] = dp[i - 1][w]
      } else {
        dp[i][w] = Math.max(
          dp[i - 1][w],
          dp[i - 1][w - weightList[i]] + valueList[i]
        )
      }
    }
  }

  console.log(dp)

  return dp[n][W]
}

console.log(knapsack(weightList, valueList, W))

