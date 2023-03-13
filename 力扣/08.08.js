let arr = ['a', 'b', 'c', 'd']
let path = []
let res = []


function back () {
  if (path.length == arr.length) {
    res.push(path.join(''))
    return
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == null) continue
    let temp = arr[i]
    path.push(temp)
    arr[i] = null
    console.log(path, temp, '前面')
    back()
    console.log(path, 'zhong面')
    path.pop()
    console.log(path, temp, 'hou面')
    arr[i] = temp
  }
}

back()
return res