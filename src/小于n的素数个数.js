// 求小于n的素数的个数

// 默认都是素数,然后用这个素数的倍数标记为非素数
// 空间换时间

function getCount(n) {
  const noPrimeList = []
  let count = 0

  for (let i = 2; i < n; i++) {
    if (!noPrimeList[i]) {
      count++
      for (let j = 2, rate = i * j; rate < n; j++) {
        noPrimeList[rate] = true
      }
    }
  }

  return count
}

console.log(getCount(4))
