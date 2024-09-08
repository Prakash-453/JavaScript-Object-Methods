Object-Methods
1) Use Object.keys() and Object.values() to create a new object with only the keys and values that meet a certain
    condition.

Example:
const obj = { a: 1, b: 2, c: 3, d: 4 };
Create a new object with only the keys and values where the value is greater than 2
Output: { c: 3, d: 4 }

PROGRAM:
obj = { a: 1, b: 2, c: 3, d: 4 };
res = Object.fromEntries(Object.entries(obj).filter(([key, value]) => value > 2));
console.log(res)

Output : 
{ c: 3, d: 4 }

2) Use Object.assign() to merge two objects and create a new object with the combined properties.

Example:
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

Create a new object with the combined properties of obj1 and obj2
Output: { a: 1, b: 2, c: 3, d: 4 }


PROGRAM:
obj1 = { a: 1, b: 2 }
obj2 = { c: 3, d: 4 }
Object.assign(obj1, obj2)
console.log(obj1)

Output : 
{ a: 1, b: 2, c: 3, d: 4 }

3:Use Array.reduce() to sum up the values of an object's
    properties.

Example:
const obj = { a: 1, b: 2, c: 3, d: 4 };
Sum up the values of obj's properties using reduce();
Output: 10

PROGRAM:
obj3 = { a: 1, b: 2, c: 3, d: 4 }
res = Object.values(obj3).reduce((a, b) => a + b)
console.log(res)

Output:
10


4) scenario explained for array of objects using hasownproperty. 

PROGRAM:
let arr = [
    obj1 = { Name: 'Prakash', Age: 21, Gender: 'Male', Country: 'SriLanka' },
    obj2 = { Name: 'Ram', Age: 27, Gender: 'Male', },
    obj3 = { Name: 'Kiran', Age: 24, Gender: 'Male', Country: 'Australia' },
    obj4 = { Name: 'Ravi', Age: 26, Gender: 'Male', },
    obj5 = { Name: 'Ram', Age: 27, Gender: 'Male', Country: 'Afghanistan' },
    obj6 = { Name: 'Prakash', Age: 27, Gender: 'Male', }
]

for (i = 0; i < arr.length; i++) {
    if (!arr[i].hasOwnProperty('Country')) {
        arr[i].Country = "India"
    }
}
console.log(arr)

Output : 
[
    { Name: 'Prakash', Age: 21, Gender: 'Male', Country: 'SriLanka' },
    { Name: 'Ram', Age: 27, Gender: 'Male', Country: 'India' },       
    { Name: 'Kiran', Age: 24, Gender: 'Male', Country: 'Australia' }, 
    { Name: 'Ravi', Age: 26, Gender: 'Male', Country: 'India' },      
    { Name: 'Ram', Age: 27, Gender: 'Male', Country: 'Afghanistan' }, 
    { Name: 'Prakash', Age: 27, Gender: 'Male', Country: 'India' }
]
