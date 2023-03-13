
// 方法一，暴力解法
var twoSum = function (nums, target) {
  let arr = []
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        arr.push(i, j)
      }
    }
  }
  return arr
}
// 方法二，使用Map()
var twoSum2 = function (nums2, target2) {
  let m = new Map()
  for (i = 0; i < nums2.length; i++) {
    if (m.has(target2 - nums2[i])) {
      return [m.get(target2 - nums2[i]), i]
    }
    m.set(nums2[i], i)
  }
}