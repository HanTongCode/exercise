/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let sum
  let arr = nums1.concat(nums2).sort((a, b) => a - b)
  // return arr[( arr.length+1)/2 -1]
  if (arr.length % 2) {
    sum = arr[(arr.length + 1) / 2 - 1]

  } else {
    sum = (arr[(arr.length) / 2] + arr[(arr.length) / 2 - 1]) / 2
  }
  return sum
}

/****
 * 二分法
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let m = nums1.length
  let n = nums2.length
  let length = m + n
  // m+n 为偶数时
  if (length % 2 == 0) {
    let left = find(nums1, 0, m - 1, nums2, 0, n - 1, length / 2)
    let right = find(nums1, 0, m - 1, nums2, 0, n - 1, length / 2 + 1)
    return (left + right) / 2
  } else {
    return find(nums1, 0, m - 1, nums2, 0, n - 1, (length + 1) / 2)
  }
}
let find = function (arr1, start1, end1, arr2, start2, end2, k) {
  let n = end1 - start1 + 1
  let m = end2 - start2 + 1
  if (n > m) return find(arr2, start2, end2, arr1, start1, end1, k)
  if (n === 0) return arr2[start2 + k - 1]
  if (k === 1) return Math.min(arr1[start1], arr2[start2])
  let i = start1 + Math.min(n, Math.floor(k / 2)) - 1
  let j = start2 + Math.min(m, Math.floor(k / 2)) - 1
  if (arr1[i] > arr2[j]) {
    return find(arr1, start1, end1, arr2, j + 1, end2, k - (j - start2 + 1))
  } else {
    return find(arr1, i + 1, end1, arr2, start2, end2, k - (i - start1 + 1))
  }


}