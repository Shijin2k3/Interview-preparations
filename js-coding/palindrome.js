function isPalindrome(str){
    return str === str.split('').reverse().join('')
}
const input="ada"
console.log(isPalindrome(input))
