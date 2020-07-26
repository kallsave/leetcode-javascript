const arr = [
  [1, 3],
  [
    [3, 5],
    [5, 0],
    7,
  ],
  [
    [
      [
        3, 1, 9
      ],
      8,
    ]
  ]
]

const _toString = Object.prototype.toString

function toRawType(value) {
  return _toString.call(value).slice(8, -1)
}

function isArray(value) {
  return toRawType(value) === 'Array'
}

function normalizeArray(arr) {
  let result = []
  arr.forEach((item) => {
    if (isArray(item)) {
      result = result.concat(normalizeArray(item))
    } else {
      result.push(item)
    }
  })

  return result
}

// console.log(normalizeArray(arr))
