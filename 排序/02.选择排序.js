function selectSort (arr) {
  if (!Array.isArray(arr) || arr.length <= 1) return
  let len = arr.length
  for (let i = 0; i < len; i++) {
    let flag = i
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[flag]) {
        flag = j
      }

    }
    [arr[i], arr[flag]] = [arr[flag], arr[i]]
  }
  return arr
}

let arr = [2, 5, 6, 4, 3, 8]
console.log(selectSort(arr))