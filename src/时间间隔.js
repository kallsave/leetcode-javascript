// 设计一个算法,输入一个格式的时间字符串和时间间隔,输出以这个时间间隔的时间片段
// 比如10:00~11:32输出['10:0~10:45', '10:45~11:30', '11:30~11:32']

const timeString = '10:00~11:32'
const slice = 45

function generaterTime(timeString, slice) {
  const regExp = new RegExp('\\d+', 'g')
  const regArr = timeString.match(regExp)

  let hoursStart = Number(regArr[0])
  let minutesStart = Number(regArr[1])
  let hoursEnd = Number(regArr[2])
  let minutesEnd = Number(regArr[3])

  let diff = hoursEnd * 60 + minutesEnd - hoursStart * 60 - minutesStart

  if (diff < 0) {
    diff += 24 * 60
  }

  const result = []

  const part = [
    hoursStart,
    minutesStart,
    hoursStart,
    minutesStart,
  ]

  while (diff > 0) {
    const increase = diff > slice ? slice : diff

    part[3] = part[3] + increase
    if (part[3] >= 60) {
      part[3] -= 60
      part[2] += 1
    }

    if (part[2] >= 24) {
      part[2] -= 24
    }

    let index = -1
    const str = timeString.replace(regExp, () => {
      index++
      return part[index]
    })

    part[0] = part[2]
    part[1] = part[3]

    result.push(str)
    diff -= 45
  }
  return result
}

console.log(generaterTime(timeString, slice))
