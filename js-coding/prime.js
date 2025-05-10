const n=1
let isprime=true
function isPrime (n){
  if (n == 1 || n<1){
    isprime=false
  }
  for(i=2; i< ((n+1)/2);i++){
    if(n%i==0){
       isprime=false
    }
  }
  if(isprime){
    console.log("prime")
  }
  else{
    console.log("not prime")
  }
}
isPrime(n)
