//Concate Method in Array
let a = [4, 45, 5, 4, 5, 5]
let num = [4, 45, 5, 4, 45, 98, 77, 5, 5]
let num_two = [454, 545, 485, 544, 845, 598, 767, 155, 115]
delete a[0]
console.log(a)
console.log(a.length)

let NewArray = a.concat(num, num_two)
console.log(typeof NewArray)
console.log(NewArray.length)
console.log(NewArray)

//Sort Method in Array 
let compare = (a, b) => {
return b - a //If you do b - a it will sort array in decending order, vice versa with a - b
}
let j = [1, 22, 33, 55, 44, 98, 77]
j.sort(compare)
console.log(j)

//Reverse Method in Array
//It will also work as decending order 
let i = [1, 22, 33, 55, 44, 98, 77]
i.reverse()
console.log(j)

//Splice Method in Array
//Used to add new element in array
let G = [445, 555, 222, 333, 444, 888, 999]
let deletedValues = G.splice(0, 4, 2023, 3353, 488, 923)
console.log(G)
console.log(typeof deletedValues)//It will print deleted values from array

//Slice Method in array 
//Also it create a new array from existing one it donot modify array.
let z = [44, 55, 99, 66, 33, 44, 77, 88]
let Newz = z.slice(2, 6)
console.log(Newz)

//Join Methods in Array
let q = [45, 55, 55, 44, 448, 77]
let c = q.join(" & ")
console.log(c)

//Push and pop Method in array
//It remove last element of array
let t = [11, 122, 114, 115, 666]
t.pop()
console.log("This is an example of pop array", t)
//Push
//It Push(add) element at last of array
t.push(999)
console.log("This is an example of push array", t)

//Shift Method in Array
//Remove first element of Array
let l = [777, 888, 999, 44, 55, 66, 5]
//we use "let r =" to return value and it is optional FYI
let r = l.shift()
console.log("This is an example of Shift array", l, r)

//Unshift Method in array
//It add element at start of array
l.unshift(55)
console.log("This is an example of Unshift array array", l)


//Method to convert array to string
let x = [1, 2, 3, 4, 10]
let b = x.toString()
console.log(b)

//Method to print a particular element from array with help of index.
console.log(x[1])
console.log(x[2])

//Method to change element of array with help of index 
console.log(x[5] = 85)

//Method to know the type of array
console.log(typeof x) 

//Method to know the length of array
console.log("The lenght of array is", x.length)
