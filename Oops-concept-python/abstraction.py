from abc import ABC,abstractmethod
#import Abstract Base Class and abstractmethod from abc
# abc built in class
class Animal(ABC):      #Abstract class
    @abstractmethod
    def make_sound(self):
        pass
class Dog(Animal):
    def make_sound(self):
        print("Dog Barks")
class Cat(Animal):
    def make_sound(self):
        print("Cat Meows")
c=Cat()
d=Dog()

d.make_sound()
c.make_sound()
        
