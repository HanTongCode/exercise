function getNextElementSibling (element) {
  let el = element
  while (el = el.nextSibling) {
    if (el.nodeType === 1) {
      return el
    }
  }
  return null
}