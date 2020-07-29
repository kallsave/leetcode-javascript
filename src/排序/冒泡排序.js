// 冒泡排序:
// 1.比较数组相邻的元素,如果前一个比后一个大,调换位置,需要比较length - 1次
// 2.经过一轮后,最大的数就在最后面了(所以每经过一轮,都可以把这一轮中最大的数放最后面)
// 3.第二轮开始,因为最后的数是最大的了,就不需要比较了,所以第二轮遍历次数减少一次
// 4.第三轮开始,依次类推,遍历次数每经过一轮减少一次
// 5.总共需要length - 1轮,也就是外层循环的次数是length - 1
// 6.第i轮遍历次数为length - 1 - i,也就是内层循环的次数是length - 1 - i

const list = [8, 0, 4, 6, 1, 2, 7, 3, 5, 9]

function bubbingSort1(list) {
  const arr = list.slice()
  const len = arr.length

  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}

// const arr1 = bubbingSort1(list)
// console.log(arr11)

// 优化方案: 减少外循环次数,减少内循环次数

// 优化1: 当某一轮比较没有发生任何交换,那么下一轮也是不会做任何交换,这时候就可以停止外循环了

function bubbingSort2(list) {
  const arr = list.slice()
  const len = arr.length

  let compareNumber = 0
  let isNotChange = true
  let temp

  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      compareNumber++
      if (arr[j] > arr[j + 1]) {
        temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        isNotChange = false
      }
    }
    if (isNotChange) {
      console.log(compareNumber)
      return arr
    }
  }
  console.log(compareNumber)
  return arr
}

// const arr2 = bubbingSort2(list)
// bubbingSort2(arr2)

// 优化3: 减少内循环
// 每一轮中都是前面的数和后一个数比较
// 某轮中在某两个数交换之后,后面的不再交换
// 说明被交换的比较大的数已经是前面最大的,后面不再交换是因为已经排好了
// 那么下次内循环就不需要比较后面的数了

function bubbingSort3(list) {
  const arr = list.slice()
  const len = arr.length

  let compareNumber = 0
  let isNotChange = true
  let temp
  let l = len - 1
  let position = 0

  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < l; j++) {
      compareNumber++
      if (arr[j] > arr[j + 1]) {
        temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        isNotChange = false
        position = j
      }
    }
    if (isNotChange) {
      console.log(compareNumber)
      return arr
    }
    l = position
  }
  console.log(compareNumber)
  return arr
}

// const arr3 = bubbingSort3(list)
// console.log(arr3)
// bubbingSort3(arr3)


function bubbingSort() {

}
