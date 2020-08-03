const str = 'dfdgkkkkketyyfdppppptwtll'

function getMax(str) {
  const n = str.length
  let max = 1
  let list = []
  let lastStr = str[0]
  let lastMax = 1
  list.push(lastStr)

  for (let i = 1; i < n; i++) {
    const current = str[i]
    if (current === lastStr) {
      lastMax++
    } else {
      lastStr = current
      lastMax = 1
    }

    if (lastMax > max) {
      list = []
      list.push(current)
      max = lastMax
    } else if (lastMax === max) {
      list.push(current)
    }
  }

  return list.map((item) => {
    return item.repeat(max)
  })

}

console.log(getMax(str))
