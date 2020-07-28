// 给定一个数组,它的第i个元素是股票第i天的价格
// 如果你最多只允许完成一笔交易,即买入和卖出一支股票,
// 设计一个算法来计算你所能获取的最大利润

const arr = [7, 1, 5, 3, 6, 4]

// 思路: 假设[a, b]是最大的利润,b是今天,a比b左边的数都要小
// 记录今天之前的最小数,记录今天之前产生的利润最大数

// function getMaxDetail(arr) {
//   let firstIndex = 0
//   let finalIndex = 0
//   let minIndex = 0

//   let firstItem = arr[0]
//   let finalItem = arr[0]
//   let minItem = arr[0]

//   let max = 0

//   for (let i = 1; i < arr.length; i++) {
//     const item = arr[i]

//     if (item - minItem >= max) {
//       firstIndex = minIndex
//       finalIndex = i
//       finalItem = minIndex
//       max = item - minItem
//     }

//     if (item <= minItem) {
//       minIndex = i
//       minItem = item
//     }
//   }

//   return {
//     arr: arr.slice(firstIndex, finalIndex + 1),
//     max,
//   }
// }

function getMax(arr) {
  let minItem = arr[0]
  let max = 0

  for (let i = 1; i < arr.length; i++) {
    const currentItem = arr[i]
    minItem = Math.min(currentItem, minItem)
    max = Math.max(currentItem - minItem, max)
  }

  return max
}

console.log(getMax(arr))

