const str = 'agerpepttabcddcbaereg'

function getMax(str) {

  // 初始化
  const arr = str.split('')
  const n = arr.length - 1
  let max = 1

  for (let i = 0; i < n; i++) {
    let start = i
    let end = i
    while (arr[start] === arr[end + 1]) {
      end++
    }
    // 从end到start的都是相等回文字符串,到end + 1不是,那么下次循环可以从end + 1开始
    i = end + 1
    while (arr[start - 1] === arr[end + 1]) {
      start--
      end++
    }

    // let result = arr.slice(start, end + 1)
    // console.log(result)

    max = Math.max(max, end + 1 - start)
  }

  return max

}

console.log(getMax(str))
