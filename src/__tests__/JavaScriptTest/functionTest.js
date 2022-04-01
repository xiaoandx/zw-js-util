const utilz = require('../../../lib/index')

/**
 * call 测试
 */
const testCall = function () {
  var m = 11
  function f(a, b) {
    console.log(a, b, this.m, this)
    return a + b
  }

  const obj = { m: 22 }
  console.log(utilz.call(f, obj, 1, 2, 3))
  console.log(utilz.call(f, undefined, 1, 2, 3))
}
testCall()

/**
 * Apply 测试
 */
const testApply = function () {
  var m = 11
  function f(a, b) {
    console.log(a, b, this.m, this)
    return a + b
  }

  const obj = { m: 22 }
  console.log(utilz.apply(f, obj, [1, 2, 3]))
  console.log(utilz.apply(f, undefined, [1, 2, 3]))
}
testApply()

/**
 * bind 测试
 */
const testBind = function () {
  var m = 11
  function f(a, b) {
    console.log(a, b, this.m, this)
    return a + b
  }

  const obj = { m: 22 }
  console.log(utilz.bind(f, obj)(1, 2))
  console.log(utilz.bind(f, obj, 3)(1, 2))
  console.log(utilz.bind(f, obj, 4)(1, 2))
  console.log(utilz.bind(f, undefined, 4)(1, 2))
}
testBind()
