/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let start = 0
  let end = 0
  let x = 0
  let y = 0
  let sum = 0
  for (let i = 0; i < height.length - 1; i++) {

    start = i
    for (let j = 1; j < height.length; j++) {
      end = j
      x = j - i
      height[j] > height[i] ? y = height[i] : y = height[j]
      let z = x * y
      if (z > sum) {
        sum = z

      }
    }
  }
  return sum
}

/** */
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0
  for (let i = 0, j = height.length - 1; i < j;) {
    let mixLength = height[i] < height[j] ? height[i++] : height[j--]
    let x = j - i + 1
    max = mixLength * x > max ? mixLength * x : max

  }
  return max
}