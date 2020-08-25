function scaleLinear(originArr, targetArr) {

  const a = (targetArr[1] - targetArr[0]) / (originArr[1] - originArr[0])
  const b = targetArr[0] - a * originArr[0]
  return function (x) {
    return a * x + b
  }
}

const scale = scaleLinear([0, 100], [0, 200])

console.log(scale(1))
