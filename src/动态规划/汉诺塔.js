// 观察三个盘子的转移过程发现
// 要把底盘转移到B柱子,需要做一次二个盘子的汉诺塔过程
// 然后把这两个盘子转移到B柱子,正好是一次二个盘子的汉诺塔过程
// 得到f(n + 1) = 2f(n) + 1

// dp[i]表示i个盘子从A柱子zhuan
function getCount(n) {
  const dp = []

  for (let i = 1; i <= n; i++) {
    if (i === 1) {
      dp[i] = 1
      continue
    }
    dp[i] = 2 * dp[i - 1] + 1
  }

  return dp[n]
}

function getCount(n) {
  let lastCount = 1

  for (let i = 2; i <= n; i++) {
    lastCount = 2 * lastCount + 1
  }

  return lastCount
}

function getCount(n) {
  let lastCount = 1

  while (n > 1) {
    lastCount = 2 * lastCount + 1
    n--
  }

  return lastCount
}

console.log(getCount(3))
