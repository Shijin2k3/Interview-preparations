n=int(input("Enter a number "))
def composite(n):
    isPrime=True
    if(n==1 | n<1):
        isPrime=False
    for i in range(2,n-1):
        if(n%i ==0):
            isPrime=False
    if(isPrime):
        print(" {} is Prime no".format(n))
    else:
        print(" {}  is Composite no".format(n))

composite(n)
        


    
            
