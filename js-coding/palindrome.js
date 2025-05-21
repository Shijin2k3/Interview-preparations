function isPalindrome(str){
    return str === str.split('').reverse().join('')
}
const input="mam"
console.log(isPalindrome(input))
