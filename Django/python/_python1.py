#lists in python
#lists in python are mutable type which holds various data type within a same memory location
# it's value can be changed.
a = [1,2,3,4,5,6]
a[0]
a[2]

# string slicing is the method to print the particular elements from the python list
a[:1] 

# make elemnts double with listName * 2
a * 2;
print(a*2);

# python iteration with for loop
for i in a:
    print(i);

# list concatenation
list1 = [1,2,3,4,3,3,3]
list2 = [23,34,12,989,4545]
list1 + list2

# append items in list
list1.append(123123)

#extending one list with another list
list1.extend(list2);
print(list1.extend(list2));

# methods in list
a.pop() # remove last of element in list
a.insert(2, 15) # put 15 element in second index

a.clear() # clear all the element in a list 
print(a)

a = [1,2,3,4,5,6,7];
a.remove(1);
print(a);