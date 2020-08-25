// 阶梯有N个台阶,假设每次只能上一个台阶或者两个台阶,问走完这个阶梯有多少种走法

// 用dp[i]表示,i个台阶的走法
function getCount(n) {
  const dp = [0, 1, 2]

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }

  return dp[n]
}

console.log(getCount(100))

function getCount(n) {
  if (n === 1) {
    return 1
  }
  if (n === 2) {
    return 2
  }
  return getCount(n - 1) + getCount(n - 2)

}
