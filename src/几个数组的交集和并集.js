

function unionArrayEs5() {
  const args = arguments
  return Array.prototype.reduce.call(args, function(prev, next) {
    next.forEach(function (item) {
      if (prev.indexOf(item) === -1) {
        prev.push(item)
      }
    })
    return prev
  }, [])
}

function unionArrayEs6() {
  const args = [...arguments]
  const set = new Set()
  args.forEach((arr) => {
    arr.forEach((item) => {
      set.add(item)
    })
  })
  return [...set]
}

function mixedArrayEs5() {
  const args = arguments
  return Array.prototype.reduce.call(args, function (prex, next) {
    return prex.filter(function (item) {
      return next.indexOf(item) > -1
    })
  })
}

function mixedArrayEs6() {

}

const a = [8, 4, 5]
const b = [2, 6, 0, 8]
const c = [2, 9, 6, 8, 3]

console.log(unionArrayEs5(a, b, c))
console.log(unionArrayEs6(a, b, c))

console.log(mixedArrayEs5(a, b, c))
