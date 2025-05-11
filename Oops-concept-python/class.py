class person:
    def __init__(self,name,age):
        self.name=name
        self.age=age

p1=person("john",12)
print("name : {} , age : {}".format(p1.name,p1.age))
