/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false
  let cur = x
  let res = 0
  while (x) {

    res = res * 10 + x % 10
    x = Math.floor(x / 10)
  }
  if (cur == res) return true
  return false
}

/**
 * 
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let str = x.toString()
  let left = 0
  let right = 0
  if (str.length % 2 == 0) {
    left = str.length / 2 - 1
    right = str.length / 2
  } else {
    left = (str.length - 1) / 2 - 1
    right = (str.length - 1) / 2 + 1
  }
  let isP = function (left, right, str) {
    while (str.charAt(left) == str.charAt(right) && left >= 0) {
      left--
      right++
    }
    if (left == -1) return true
    return false
  }
  return isP(left, right, str)
}
