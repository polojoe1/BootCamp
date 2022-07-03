num1 = 42 #var decloration int
num2 = 2.3 #var decloration float
boolean = True #bool decloration
string = 'Hello World' #string decloration
pizza_toppings = ['Pepperoni', 'Sausage', 'Jalepenos', 'Cheese', 'Olives']#list
person = {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False}#dictionary
fruit = ('blueberry', 'strawberry', 'banana')#tuple
print(type(fruit)) #type tuple
print(pizza_toppings[1]) #access value
pizza_toppings.append('Mushrooms')#add value
print(person['name'])#access value
person['name'] = 'George'#change value
person['eye_color'] = 'blue'#add value
print(fruit[2])#tuple access value
print(pizza_toppings)
if num1 > 45: #if statment false
    print("It's greater")
else: #else statement will run
    print("It's lower")

if len(string) < 5: #find length of string insideof bool
    print("It's a short word!")
elif len(string) > 15:
    print("It's a long word!")
else:
    print("Just right!")

for x in range(5): #for loop
    print(x)
for x in range(2,5): #start at 2 stop at 4
    print(x)
for x in range(2,10,3): #increment of 3
    print(x)
x = 0
while(x < 5): #while loop
    print(x)
    x += 1

pizza_toppings.pop()#deletes
pizza_toppings.pop(1)#deletes value index 1

print(person) #print list
person.pop('eye_color')#deletes eye color
print(person)#print list

for topping in pizza_toppings: #for loop
    if topping == 'Pepperoni':
        continue
    print('After 1st if statement')
    if topping == 'Olives':
        break #stops for loop

def print_hello_ten_times(): #0-9 prints it 10 times
    for num in range(10):
        print('Hello')

print_hello_ten_times()#calls function

def print_hello_x_times(x):#function needs parameter
    for num in range(x):
        print('Hello')

print_hello_x_times(4)#function called with parameter

def print_hello_x_or_ten_times(x = 10):
    for num in range(x):
        print('Hello')

print_hello_x_or_ten_times()#10times
print_hello_x_or_ten_times(4)#4times


"""
Bonus section
"""

# print(num3) error no num3
# num3 = 72 declares num 3
# fruit[0] = 'cranberry' changing index to cran
# print(person['favorite_team']) error
# print(pizza_toppings[7]) error out of range 
#   print(boolean) error becuase its indented
# fruit.append('raspberry') error tuple cant append
# fruit.pop(1) error tuple cant pop