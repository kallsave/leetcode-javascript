
// 用dp[k, n]表示在n层楼中有K个鸡蛋,最少花费的步骤
function getMin(K, N) {
  const dp = []
  dp[0] = []
  for (let k = 1; k <= K; k++) {
    if (!dp[k]) {
      dp[k] = []
      dp[k][0] = 0
    }
    for (let n = 1; n <= N; n++) {
      dp[0][n] = 0
      for (let e = 1; e <= n; e++) {
        if (!dp[k][n]) {
          dp[k][n] = n
        }
        dp[k][n] = Math.min(
          dp[k][n],
          Math.max(
            dp[k - 1][e - 1],
            dp[k][e - 1]
          ) + 1
        )
      }
    }
  }
  return dp[K][N]
}

console.log(getMin(2, 100))
