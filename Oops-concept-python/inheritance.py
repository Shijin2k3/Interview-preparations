#Base class
class Person:
    def __init__(self,name,age):
        self.name=name
        self.age=age
    def show_info(self):
        print("Name : {}\nAge : {}".format(self.name,self.age))
#Derived class
class Student(Person):
    def __init__(self,name,age,year):
        #call parent constructor
        super().__init__(name,age)
        #add new attribute
        self.year=year
    def show_info(self):
        #extend parent method
        super().show_info()
        print("Year : {}".format(self.year))
s=Student("john",23,2025)
s.show_info()
