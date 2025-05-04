function calculate(operator){
    const n1=parseFloat(document.getElementById("n1").value)
    const n2=parseFloat(document.getElementById("n2").value)
    let result;

    if(isNaN(n1) || isNaN(n2)){
        result="please Enter a number"

    }
    else {
        switch(operator){
            case '+':
                result=n1+n2;
                break;
            case "-":
                result=n1-n2;
                break;
            case '*':
                result=n1*n2;
                break;
            case '/':
                if(n2===0){
                    result ="cannot divide by zero"  
                }
                else{
                    result=n1/n2;
                }
                break;
            
            
        }
    }
    document.getElementById("result").innerText="Result: "+result;
}