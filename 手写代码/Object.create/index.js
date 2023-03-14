/**
 * 
 * @param 新创建对象的原型对象 proto 
 * @param 传入对象的自有可枚举属性 propertiesObject 
 * @returns obj
 */
Object.create2 = function (proto, propertiesObject = undefined) {
  if (typeof proto != 'object' && typeof proto != 'function') {
    throw new TypeError('Object prototype may only be an Object or null')
  }
  //propertyObject为null应该报错
  if (propertiesObject == null) {
    throw new TypeError('Cannot convert undefined or null to object')
  }
  function F () { }
  F.prototype = proto
  const obj = new F()

  if (propertiesObject) {
    Object.defineProperties(obj, propertiesObject)
  }

  if (proto == null) {
    obj.__proto__ = null
  }

  return obj
}
Object.create2()