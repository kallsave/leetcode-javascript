
// 用dp[k, n]表示在n层楼中有K个鸡蛋,最少花费的步骤
function getMin(K, N) {

  const dp = []

  for (let k = 1; k <= K; k++) {
    if (!dp[k]) {
      dp[k] = [0]
    }
    for (let n = 1; n <=N; n++) {
      if (k === 1) {
        dp[k][n] = n
        continue
      }
      if (n === 1) {
        dp[k][n] = 1
        continue
      }
      // 在第i层楼扔
      let min = n
      for (let i = 1; i <n; i++) {
        min = Math.min(
          min,
          Math.max(
            // 碎了
            dp[k - 1][i - 1] + 1,
            // 没碎
            dp[k][n - i] + 1
          )
        )
      }
      dp[k][n] = min
    }
  }

  return dp[K][N]
}

console.log(getMin(2, 100))
