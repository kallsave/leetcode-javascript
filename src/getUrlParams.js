function getUrlParams(url, key) {
  let result = {}
  const paramsStr = url.split('?')[1]

  if (!paramsStr) {
    if (key) {
      return
    }
    return result
  }

  const group = paramsStr.split('&')

  group.forEach((item) => {
    const arr = item.split('=')
    const key = arr[0]
    const value = arr[1]
    const originValue = result[key]
    if (originValue) {
      if (typeof originValue === 'string') {
        result[key] = [originValue]
      }
      result[key].push(value)
    } else {
      result[key] = value
    }
  })

  if (key) {
    return result[key]
  }

  return result

}

console.log(getUrlParams('www.baidu.com/', ''))
