const _toString = Object.prototype.toString

function toRawType(value) {
  return _toString.call(value).slice(8, -1)
}

function deepClone(value) {

  const map = new WeakMap()

  function dp(value) {
    let ret
    const type = toRawType(value)

    if (type === 'Object') {
      ret = {}
    } else if (type === 'Array') {
      ret = []
    } else {
      return value
    }

    const exist = map.get(value)

    if (exist) {
      return exist
    }

    map.set(value, ret)

    Object.keys(value).forEach((key) => {
      const copy = value[key]
      ret[key] = dp(copy)
    })

    return ret
  }

  return dp(value)
}
