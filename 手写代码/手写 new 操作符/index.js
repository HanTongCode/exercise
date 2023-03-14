function objectFactory () {
  let newObject = null
  let result = null
  let constructor = Array.prototype.shift.call(arguments)
  if (typeof constructor !== 'function') {
    console.error('type error')
    return
  }
  newObject = Object.create(constructor.prototype)
  result = constructor.apply(newObject, arguments)
  // 判断返回对象
  let flag = result && (typeof result === "object" || typeof result === "function")
  // 判断返回结果
  return flag ? result : newObject

}