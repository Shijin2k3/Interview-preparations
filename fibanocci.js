let n1=0
let n2=1
let n3=0
console.log(n1,"\n",n2)
for(i=2;i<10;i++){
    n3=n1+n2
    console.log(n3)
    n1=n2
    n2=n3
}