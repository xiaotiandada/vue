let Target = {
  val: 'hello world'
}

let target = new Proxy(Target, {
  get: function(target, property, receiver) {
    console.log('get target', target, property, receiver)
    return target[property]
  },
  set: function(target, property, value, receiver) {
    console.log('start', target, property, value, receiver)

    target[property] = value

    console.log('done', target)

    return true
  }
})


console.log('target', target)

target.val = 'hi'

console.log('target', target)

console.log('target.val', target.val)
