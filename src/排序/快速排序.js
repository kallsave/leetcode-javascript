// 快速排序:
// 快速排序其实是个基准值找下标的过程
// 第一轮找到基准下标后,左边的都比基准值小,右边的都比基准值大
// 左边和右边作为新的数组递归这个过程

// 给基准值找下标也就是给基准值校对下标
// 从右往左校对的是比基准值小的,基准值的小标会右移到校对的位置
// 右边校对完了,那么这时候基准值右边的都比基准值大,
// 记录这个位置为r(右标),下次右边校对时,从这个位置-1开始校对比基准值小的
// 从左往右校对的是比基准值大的,基准值的小标会左移到校对的位置
// 左边校对完了,那么这时候基准值右边的都比基准值小
// 记录这个位置为l(左标),下次左边校对时,从这个位置+1开始校对比基准值大的
// 这时候由于基准值迁移了,所以基准值右边的数不再是全比基准值大的
// 又开始右边校对,重复以上过程
// 当右标-1等于左标或者左标+1等于右标时,所以左标和右标相邻了,此时的左标/右标就是校对的下标

// 给基准值找下标时,假设基准值是第0个元素的值,
// 先从右往左找比基准值小的
// 如果找不到,说明基准值就是最小值,所在坐标正确
// 如果找到了比基准值小的,填充进基准值的位置,空出找到的下标
// 然后从左往右找比基准值大的
// 如果找不到,说明左边的都比基准值要小,而基准值右边的在右找的过程已经对比过了都比基准值大
// 所以这时候的下标就是基准值的
// 如果找到了比基准值大的,填充进基准值的位置,空出找到的下标

const arr = [8, 0, 4, 6, 1, 2, 7, 3, 5, 9]

let compareCount = 0
let changeCount = 0

function quickSortDetail(arr, left, right) {
  left = left !== undefined ? left : 0
  right = right !== undefined ? right : arr.length - 1

  if (left >= right) {
    return
  }

  const p = arr[left]
  let l = left
  let r = right

  while (l < r) {
    while (arr[r] > p && l < r) {
      r--
      compareCount++
    }
    // 找到了就换下标,没找到这时候l === r
    if (l < r) {
      arr[l] = arr[r]
      l++
      changeCount++
    }
    while (arr[l] < p && l < r) {
      l++
      compareCount++
    }
    // 找到了就换下标,没找到这时候l === r
    if (l < r) {
      arr[r] = arr[l]
      r--
      changeCount++
    }
  }
  arr[l] = p
  quickSortDetail(arr, left, l - 1)
  quickSortDetail(arr, l + 1, right)

}

// quickSortDetail(arr, 0, arr.length - 1)
// console.log(arr)

// console.log(compareCount)
// console.log(changeCount)

function quickSort() {

}
