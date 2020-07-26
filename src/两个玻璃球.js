// n是总楼层数,x是分段数
const n = 100

function getAverageMax(n, x) {
  const rem = n % x
  if (rem) {
    return (n / x | 0) + x - 1
  } else {
    return n / x + x - 2
  }
}

function getAverageBestX(n) {
  let x = 1
  let resultMax = getAverageMax(n, x)
  let resultX = x
  x++

  while (x < 100) {
    const max = getAverageMax(n, x)
    if (resultMax > max) {
      resultMax = max
      resultX = x
    }
    x++
  }
  return resultX
}

// const resultX = getAverageBestX(100)
// console.log(resultX)

// 然而按照均分来试不一定是最优的
// 每次少一层
function getMax(n, x) {
  let i = 0
  while (n - x >= 0 && x > 0) {
    n = n - x
    x = x - 1
    i++
  }

  i += Math.max(n, x)

  return i
}

function getBestX(n) {
  let x = 1
  let resultMax = getMax(n, x)
  let resultX = x
  x++

  while (x < 100) {
    const max = getMax(n, x)
    if (resultMax > max) {
      resultMax = max
      resultX = x
    }
    x++
  }
  console.log(resultMax)
  return resultX
}

console.log(getBestX(100))
