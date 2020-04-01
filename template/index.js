function _new(func) {
  var obj = new Object()
  var result = func.call(obj)
  if (typeof result === 'object' ) {
    return result
  }
  return obj
}
function Person (params) {
  this.name = 'hi'
}
var a = _new(Person)
a.name