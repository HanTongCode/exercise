/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let num = parseInt(s, 10)
  if (isNaN(num)) return 0
  let INT_MAX = Math.pow(2, 31) - 1
  let INT_MIN = Math.pow(-2, 31)
  if (num > INT_MAX) return INT_MAX
  if (num < INT_MIN) return INT_MIN
  return num
}

// console.log(parseInt('A--25'), typeof '123'[0], '123'[0])
/**
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  class Automaton {
    constructor() {
      this.state = 'start'
      this.sign = 1
      this.num = 0
      this.map = new Map([
        ['start', ['start', 'signed', 'in_number', 'end']],
        ['signed', ['end', 'end', 'in_number', 'end']],
        ['in_number', ['end', 'end', 'in_number', 'end']],
        ['end', ['end', 'end', 'end', 'end']]

      ])
    }
    getIndex (char) {
      if (char == ' ') return 0
      if (char == '-' || char == '+') return 1
      if (typeof (Number(char)) == 'number' && !isNaN(char)) return 2
      return 3
    }
    get (char) {
      this.state = this.map.get(this.state)[this.getIndex(char)]
      if (this.state == 'in_number') {
        this.num = this.num * 10 + (char - 0)

      } else if (this.state == 'signed') {
        this.sign = char === '+' ? 1 : -1
      }
    }
  }
  let automation = new Automaton()

  for (let char of s) {
    automation.get(char)
  }

  let res = automation.sign * automation.num
  let INT_MAX = Math.pow(2, 31) - 1
  let INT_MIN = Math.pow(-2, 31)
  if (res > INT_MAX) return INT_MAX
  if (res < INT_MIN) return INT_MIN
  return res
}