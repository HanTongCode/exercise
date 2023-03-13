/**
 * @param {number} x
 * @return {number}
 */
// var reverse = function (x) {
//   let arr = x.toString().split('')
//   if (arr.length == 1) {
//     return (Number(arr.join('')) < Math.pow(2, 31) - 1 && Number(arr.join('')) > Math.pow(-2, 31)) ? Number(arr.join('')) : 0
//   }
//   if (arr[0] != '-') {
//     arr = arr.reverse()
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > 0) return (Number(arr.join('')) < Math.pow(2, 31) - 1 && Number(arr.join('')) > Math.pow(-2, 31)) ? Number(arr.join('')) : 0
//       arr.shift()
//       i--
//     }
//   } else {
//     arr.shift()
//     arr = arr.reverse()
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > 0) {
//         arr.unshift('-')
//         return (Number(arr.join('')) < Math.pow(2, 31) - 1 && Number(arr.join('')) > Math.pow(-2, 31)) ? Number(arr.join('')) : 0
//       }
//       arr.shift()
//       i--
//     }
//   }
// }

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let res = 0
  while (x) {
    res = res * 10 + x % 10
    if (res < Math.pow(-2, 31) || res > Math.pow(2, 31) - 1) return 0
    x = Math.trunc(x / 10)
  }
  return res
}