/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let max = 0
  let index = 0
  for (let i = 0, j = 0; j < s.length; j++) {
    index = s.substring(i, j).indexOf(s.charAt(j))
    if (index > -1) {
      i = i + index + 1
    }
    max = Math.max(max, j - i + 1)
  }
  return max
}