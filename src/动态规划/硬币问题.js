// 有1元,3元,5元的硬币若干,
// 如果想凑成11元,如何组合才能使得银币的数量最少

// 用dp[i]表示组成i元的银币的最少数量
function getMin(n) {
  const dp = []

  dp[0] = 0
  dp[1] = 1
  dp[2] = 2
  dp[3] = 2
  dp[4] = 2
  dp[5] = 1

  for (let i = 6; i <=n; i++) {
    dp[i] = Math.min(
      dp[i - 1],
      dp[i - 3],
      dp[i - 5],
    ) + 1
  }

  return dp[n]
}

console.log(getMin(11))
