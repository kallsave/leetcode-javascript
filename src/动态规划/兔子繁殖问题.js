// 假设第一月有1对兔子,第二个月进入成熟期,
// 第三个月生育兔子,而一对成熟的兔子每个月都会生一对兔子
// 兔子不会死亡
// 求第n个月有多少个兔子

function getCount(n) {
  const dp = []

  for (let i = 1; i <= n; i++) {
    if (i === 1 || i === 2) {
      dp[i] = 1
      continue
    }

    dp[i] = dp[i - 1] + dp[i - 2]
  }

  return dp[i]
}

console.log(getCount(n))
