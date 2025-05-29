n=int(input("Enter a number "))
def fact(n):
    if(n ==0):
        return 1
    else:
        result=1
        for i in range(1,n+1):
            result=result*1
        print("factorial of {} is {}".format(n,result))

fact(n)
        
