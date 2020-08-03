
// 以dp[n]表示num拆分子项的乘积最大值
function getMax(num) {
  const dp = []
  dp[0] = 0

  for (let i = 1; i <= num; i++) {
    let max = i - 1
    for (let j = 2; j <= i; j++) {
      max = Math.max(max, j * (i - j), j * dp[i - j])
    }
    dp[i] = max
  }
  return dp[num]
}

console.log(getMax(6))
