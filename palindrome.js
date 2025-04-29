function isPalindrome(str){
    return str === str.split('').reverse().join('')
}
const input="madan"
console.log(isPalindrome(input))
