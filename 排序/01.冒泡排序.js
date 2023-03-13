function bubbleSort (arr) {
  let len = arr.length
  if (!Array.isArray(arr) || len <= 1) return

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}

let arr = [2, 5, 6, 4, 3, 8]
console.log(bubbleSort(arr))