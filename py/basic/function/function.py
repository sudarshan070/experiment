def sayHi():
    print('Hi')

sayHi()


def sayHello(name):
    print('Hello', name)

sayHello('Pawan')

def multiple_para(name, nick_name):
    print('Name', name, 'Nick name', nick_name)

multiple_para('Pawan', 'Paani')

def add(a, b):
    return a + b

result = add(3, 5)
print(result)


if add(1, 1) == 2:
    print("That's what you'd expect!")

def say_hi():
    print('Hi', name) # Hi Paani
    answer = 'Hi'

name = 'Paani'
say_hi()
print(answer) # error