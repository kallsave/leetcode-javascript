// 给定一个整数数组nums,找到一个具有最大和的连续子数组,子数组最少包含一个元素,返回其最大和。

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// const arr = [-2, -3, -1]

// 用dp[i]表示从第i个索引结束的数组里面元素和的最大值
function getMax(arr) {
  const n = arr.length - 1
  // 初始化状态
  const dp = []
  dp[0] = arr[0]
  let max = arr[0]
  let isBreak = false

  for (let i = 0; i < n; i++) {
    const nextItem = arr[i + 1]
    const concat = dp[i] + nextItem
    if (concat < 0) {
      dp[i + 1] = isBreak ? nextItem : dp[i]
      isBreak = true
    } else {
      dp[i + 1] = isBreak ? nextItem : concat
      isBreak = false
    }
    max = Math.max(max, dp[i + 1])
  }
  return max
}

console.log(getMax(arr))
