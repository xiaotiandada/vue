const obj = {
  val: 'hello word!'
}
let objVal = ''

console.log('obj first', obj.val)


Object.defineProperty(obj, 'val', {
  get() {
    return objVal
  },
  set(val) {
    objVal = val
  }
})

obj.val = 'hi'


console.log('obj', obj.val)
console.log('objVal', objVal)