function quickSort (array, start, end) {
  let length = array.length
  if (!Array.isArray(array) || length <= 1 || start >= end) return

  function partition (array, start, end) {
    let pivot = array[end]
    let pivotIndex = start
    for (let i = start; i < end; i++) {
      if (array[i] < pivot) {
        [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]]
        pivotIndex++
      }

    }
    [array[end], array[pivotIndex]] = [array[pivotIndex], array[end]]
    return pivotIndex
  }
  let index = partition(array, start, end)
  quickSort(array, start, index - 1)
  quickSort(array, index + 1, end)
  return arr
}

let arr = [4, 5, 8, 2, 32, 50, 60, 3, 44, 11]

console.log(quickSort(arr, 0, arr.length - 1))