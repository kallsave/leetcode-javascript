// 给定一个整数数组nums
// 找到一个具有最大和的连续子数组,子数组最少包含一个元素,返回其最大和。

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

// 思路: 假设[a, ..., b]最大,
// 为什么a前面的数没有包含进去,那么只能是a前面的数包含进去反而比a小
// 有max = Math.max(prevCount + arr[i], arr[i])

function getMaxArr(arr) {
  let firstIndex = 0
  let finalIndex = 0
  let prevCount = arr[0]
  let max = prevCount
  for (let i = 1; i < arr.length; i++) {
    prevCount += arr[i]
    // 新的断点产生
    if (arr[i] > prevCount) {
      firstIndex = i
      finalIndex = i
      prevCount = arr[i]
      max = arr[i]
    } else {
      // 如果prevCount大于之前的max,说明max,finalIndex需要更新了
      if (prevCount > max) {
        finalIndex = i
        max = prevCount
      }
    }
  }

  return {
    max,
    arr: arr.slice(firstIndex, finalIndex + 1)
  }
}

console.log(getMaxArr(arr))

