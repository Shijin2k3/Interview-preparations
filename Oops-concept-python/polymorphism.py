class Dog:
    def sound(self):
        print("Dog Barks ")
class Cat:
    def sound(self):
        print("cat Meows ")
def make_sound(animal):
    animal.sound()
c=Cat()
d=Dog()
d.sound()

make_sound(c)
make_sound(d)
    
