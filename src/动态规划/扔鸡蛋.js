// 在一栋楼的某层楼扔下鸡蛋,鸡蛋会碎,而这层楼的下一层楼扔下鸡蛋不会碎
// 现知道可用鸡蛋为k,这栋楼的层数为n
// 问最少需要扔多少次鸡蛋可以知道临界楼层的层数

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
      let min = n
      // 在第i层楼扔
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
