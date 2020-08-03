// 第0天有一只牛,
// 第3天后这只牛生了一只小牛,
// 第5天后又生了一只小牛,
// 第6天后这只牛死亡
// 小牛和老牛一样
// 求第n年有多少只牛

// 用dp[i]表示第i天存活的牛数
// 用cr[i]表示第i天新生的牛数
function getCount(n) {
  const cr = []
  const dp = []
  const de = []

  cr[0] = 0
  de[0] = 0
  dp[0] = 1

  cr[1] = 0
  de[1] = 0
  dp[1] = 1

  cr[2] = 0
  de[2] = 0
  dp[2] = 1

  cr[3] = 1
  de[3] = 0
  dp[3] = 2

  cr[4] = 0
  de[4] = 0
  dp[4] = 2

  cr[5] = 1
  de[5] = 0
  dp[5] = 3

  cr[6] = 1
  de[6] = 1
  dp[6] = 3

  // 用dp[i]表示第i天存活的牛数
  // 用cr[i]表示第i天新生的牛数
  for (let i = 7; i <= n; i++) {
    cr[i] = cr[i - 3] + cr[i - 5]
    dp[i] = dp[i - 1] + cr[i] - cr[i - 6]
  }
  return dp[n]
}

for (let i = 7; i <= 12; i++) {
  console.log(`第${i}天`, getCount(i))
}


// 0: a
// 1: a
// 2: a
// 3: a aa
// 4: a aa
// 5: a aa ab
// 6:   aa ab aaa
// 7:   aa ab aaa
// 8:   aa ab aaa aab aba
// 9:      ab aaa aab aba aaaa
// 10:     ab aaa aab aba aaaa abb
// 11:        aaa aab aba aaaa abb aaba aaab abaa
// 12:            aab aba aaaa abb aaba aaab abaa aaaaa
// 13:            aab aba aaaa abb aaba aaab abaa aaaaa aabab abab
