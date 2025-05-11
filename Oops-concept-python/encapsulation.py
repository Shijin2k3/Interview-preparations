class Person:
    def __init__(self,name,age):
        self.name=name
        self.__age=age #private attribute
    def get_age(self):
        return self.__age
p=Person("john",23)
print(p.name)
print(p.get_age())
