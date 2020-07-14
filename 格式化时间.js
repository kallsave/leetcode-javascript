function repeatString(str, n) {
  if (n < 0) {
    return ''
  }
  // 数组元素如果是空的,那么join生成的字符串也是空的而不是undefined
  return new Array(n + 1).join(str)
}


function paddingLeftZero(str, length) {
  return repeatString('0', length) + str
}

function formatDate(date, fmt) {

  const o = {
    'Y+': date.getFullYear(),
    'M+': date.getMonth() + 1,
    'D+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
  }

  for (const key in o) {
    if (new RegExp(`(${key})`).test(fmt)) {
      const str = String(o[key])
      // replace不会改变原来的字符串
      fmt = fmt.replace(RegExp.$1, paddingLeftZero(str, RegExp.$1.length - str.length))
    }
  }

  return fmt
}

console.log(formatDate(new Date(), 'YYY-MM-DD hh:mm:ss'))
