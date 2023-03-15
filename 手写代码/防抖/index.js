function debounce (fn, delay) {
  let timer = null
  console.log(timer, 'timer1')
  return function () {
    console.log(timer, 'timer2')
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn()
    }, delay)
  }
}
function fn () {
  console.log('你好')
}
let b = debounce(fn, 500)
// debounce()
b()
b()