// 一个数字n,比如10 = 1 + 9 = 2 + 8 = 2 + 2 + 2 + 2 + 2 = ...
// 其中2 * 2 * 3 * 3的乘积是最大的
// 求一个算法,计算出最大积


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

console.log(getMax(10))
