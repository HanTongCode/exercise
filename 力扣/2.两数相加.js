/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // 进位
  let carry = 0
  // 头节点
  let preNode = new ListNode(0)
  // 当前节点
  let currentNode = preNode
  // 存在时运算
  while (l1 || l2 || carry) {

    let sum = ((l1 && l1.val) || 0) + ((l2 && l2.val) || 0) + carry
    carry = Math.floor(sum / 10)
    currentNode.next = new ListNode(sum % 10)
    currentNode = currentNode.next
    l1 ? l1 = l1.next : l1
    l2 ? l2 = l2.next : l2

  }
  return preNode.next
}