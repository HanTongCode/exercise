function myInstanceof (left, right) {
  let proto = Object.getPrototypeOf(left)
  let property = right.property
  while (true) {
    if (!proto) return false
    if (proto === property) return true
    proto = Object.getPrototypeOf(proto)
  }
}