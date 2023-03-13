/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows == 1 || s.length < numRows) return s

  let len = Math.min(s.length, numRows)
  let row = []
  for (let i = 0; i < len; i++) {
    row[i] = ''
  }
  let current = 0
  let down = false
  for (let j = 0; j < s.length; j++) {
    row[current] += s[j]
    if (current == 0) {
      down = !down
    }
    if (current == numRows - 1) {
      down = false
    }
    current += down ? 1 : -1
  }
  let res = ''
  for (let k = 0; k < row.length; k++) {
    res = res + row[k]
  }
  return res
}