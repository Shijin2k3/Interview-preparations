function isPalindrome(str){
    return str === str.split('').reverse().join('')
}
const input="mada"
console.log(isPalindrome(input))
