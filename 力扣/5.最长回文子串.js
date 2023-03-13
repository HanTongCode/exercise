/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let sLength = s.length
  let str = ''
  let find = function (left, right) {
    while (s[left] == s[right] && left >= 0 && right <= s.length - 1) {
      left = left - 1
      right = right + 1
    }
    let curStr = s.substring(left + 1, right + 1 - 1)
    if (curStr.length > str.length) str = curStr
  }
  for (let i = 0; i < sLength; i++) {
    find(i, i + 1)
    find(i, i)
  }

  return str
}