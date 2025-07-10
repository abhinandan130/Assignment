// 1. Find the Max and Min number in an Array
let a1 = [1, 2, 0, 4, 5, 9, 6]

function minAndMax(a1) {
    let min = a1[0]
    let max = a1[0]

    for (let i = 0; i < a1.length; i++){
        if(a1[i] < min) {
            min = a1[i]
        }else if(a1[i] > max){
            max = a1[i]
        }
    }

    return `The minimum is ${min} and maximum is ${max}`
}

console.log("\n", minAndMax(a1))

// ============================================================

// 2. Find a 2nd maximum and Minimum number in an array
let a2 = [1, 2, 0, 4, 5, 9, 6]

function secondMinAndMax(a2) {
    let min = a2[0]
    let max = a2[0]

    for (let i = 0; i < a2.length; i++){
        if(a2[i] < min) {
            min = a2[i]
        }else if(a2[i] > max){
            max = a2[i]
        }
    }

    let secondMin = Infinity
    let secondMax = -Infinity

    for(let i = 0; i < a2.length; i++){
        if (a2[i] > secondMax && a2[i] < max) {
            secondMax = a2[i];
        }
        if (a2[i] < secondMin && a2[i] > min) {
            secondMin = a2[i];
        }
    }

    return `The second minimum is ${secondMin} and second maximum is ${secondMax}`
}

console.log("\n",secondMinAndMax(a2))

// ============================================================

// 3. Sort an array without using built in methods
let a3 = [1, 2, 0, 4, 5, 9, 6, 98, 5, 98, 34]

function sorting(a3) {
    for (let i = 0; i < a3.length; i++) {
        for (let j = 0; j < a3.length-i-1; j++){
            if (a3[j] > a3[j+1]) {
                let temp = a3[j]
                a3[j] = a3[j+1]
                a3[j+1] = temp
            }
        }
    }
    return `The sorted array is ${a3}`
}

console.log("\n",sorting(a3))

// ============================================================

// 4. Write a function to remove the duplicate element from an array
let a4 = [1, 2, 0, 4, 5, 9, 6, 98, 5, 98, 34]

function removeDuplicates(a4) {
    let out = []

    for (let i = 0; i < a4.length; i++) {
        let found = false

        for (let j = 0; j < out.length; j++) {
            if (a4[i] == out[j]) {
                found = true
                break
            }
        }

        if (!found){
            out.push(a4[i])
        }
    }
    return `Array after removing duplicates => ${out}`
}

console.log("\n",removeDuplicates(a4))

// ============================================================

// 5. Write a function to remove duplicate elements in a string "HelloWorld"
let a5 = 'programming'

function removeDuplicates(a5) {
    let out = ''

    for (let i = 0; i < a5.length; i++) {
        let found = false

        for (let j = 0; j < out.length; j++) {
            if (a5[i] == out[j]) {
                found = true
                break
            }
        }

        if (!found){
            out += a5[i]
        }
    }
    return `String after removing duplicates => ${out}`
}

console.log("\n",removeDuplicates(a5))

// ============================================================

// 6. Write function to convert camelCase to snake_case
let a6 = 'javaScript'

function camelToSnake (a6) {
    let out = ''

    for (let i = 0; i < a6.length; i++) {
        let lower = String.fromCharCode(a6[i].charCodeAt(0) + 32)

        if(a6[i] >= 'A' && a6[i] <= 'Z') {
            out += '_' + lower
        }else {
            out += a6[i]
        }
    }

    return `Camel case converted to snake case => ${out}`
}

console.log("\n",camelToSnake(a6))

// ============================================================

// 7. Write a function to convert snake_case to camelCase
let a7 = 'java_script'

function snakeToCamel (a7) {
    let out = ''
    for (let i = 0; i < a7.length; i++) {
        if (a7[i] === '_'){
            i++
            if (i < a7.length) {
                let capital = String.fromCharCode(a7[i].charCodeAt(0) - 32)
                out += capital
            } else {
                console.log(`Can't convert "${a7}" to camel case`)
            }
        }else {
            out += a7[i]
        }
    }
    return `Snake case converted to camel case => ${out}`
}

console.log("\n",snakeToCamel(a7))

// ============================================================

// 8. Write a function to flatten the nested array
let a8 = [1, [2, [3, 4], 5], 6]

function flatten (a8) {
    let out = []

    for (let i = 0; i < a8.length; i++) {
        let value = a8[i]

        if(typeof value === 'object' && value.length !== undefined) {
            let flat = flatten(value)

            for (let j = 0; j < flat.length; j++) {
                out.push(flat[j])
            }
        }else {
            out.push(value)
        }
    }
    return out
}

console.log("\n",flatten(a8))

// ============================================================

// 9. Write a function to find the 2nd largest number in a nested array
let a9 = [1, [5, 2, [9, 3]], 7]

// Step 1: Flatten the array
function flattenSecondLargest (a9) {
    let out = []

    for (let i = 0; i < a9.length; i++) {
        let value = a9[i]
        if (typeof value == 'object' && value.length !== undefined) {
            let flat = flattenSecondLargest(value)

            for (let j = 0; j < flat.length; j++){
                out.push(flat[j])
            }
        }else {
            out.push(value)
        }
    }
    return out
}

// Step 2: Find the largest and second largest
function secondLargest (a9) {
    let flattenArr = flattenSecondLargest(a9)
    let max = flattenArr[0]
    let secondMax = -Infinity

    for (let i = 1; i < flattenArr.length; i++) {
        if(flattenArr[i] > max) {
            secondMax = max
            max = flattenArr[i]
        }else if (flattenArr[i] > secondMax && flattenArr[i] < max){
            secondMax = flattenArr[i]
        }
    }

    return `Second largest number in a nested array => ${secondMax}`
}

console.log("\n",secondLargest(a9), "\n")

// ============================================================

/* 10. Write a function to generate below pattern
1
2 9
3 8 10
4 7 11 14
5 6 12 13 15 */

function patternPrinting(n) {
    // Step 1: Create a triangle (2D array) with n rows, where row i has (i) elements.
    let tri = [];
    for (let i = 0; i < n; i++) {
        tri[i] = [];

        for (let j = 0; j <= i; j++) {
            tri[i][j] = 0;
        }
    }

    // Step 2: Use a counter and fill column-by-column.
    let counter = 1;
    for (let col = 1; col <= n; col++) {
        if (col % 2 !== 0) { 
            for (let row = col; row <= n; row++) {
                tri[row - 1][col - 1] = counter;
                counter++;
            }
        } else {
            for (let row = n; row >= col; row--) {
                tri[row - 1][col - 1] = counter;
                counter++;
            }
        }
    }

    // Step 3: Print the triangle line by line.
    for (let i = 0; i < n; i++) {
        let line = "";
        for (let j = 0; j <= i; j++) {
            line += tri[i][j] + " ";
        }
        console.log(line.trim());
    }
}
patternPrinting(5)


// ============================================================

// 11. Program for adding zeros after 3 values in array
let a11 = [1, 2, 3, 4, 5, 6, 7]

function addZero(a11) {
    let out = []

    for (let i = 0; i < a11.length; i++){
        out.push(a11[i])
        if((i + 1) % 3 === 0){
            out.push(0)
        }
    }
    return `Array after adding zero after every 3 elements => ${out}`
}
console.log("\n",addZero(a11))

// ============================================================

// 12. Reverse a string without using built in method
let a12 = 'string'

function reversed(a12) {
    let out = ''

    for(let i = a12.length-1; i >= 0; i--) {
        out += a12[i]
    }

    return `Reversed string => ${out}`
}

console.log("\n",reversed(a12))

// ============================================================

// 13. Write a function to return a fibonacci series.
let a13 = 10
function fibonacci(a13) {
    let fib1 = 0
    let fib2 = 1
    console.log(fib1)
    console.log(fib2)

    for(let i = 3; i <= a13; i++){
        let fib3 = fib1 + fib2
        fib1 = fib2
        fib2 = fib3
        console.log(fib3)
    }
}

fibonacci("\n",a13)
// --------------------

function fibonacci(a13) {
    let result = [];

    let fib1 = 0;
    let fib2 = 1;
    
    result.push(fib1);
    result.push(fib2);

    for (let i = 3; i <= a13; i++) {
        let fib3 = fib1 + fib2;
        result.push(fib3);
        fib1 = fib2;
        fib2 = fib3;
    }

    return `Fibonacci series => ${result}`;
}
console.log("\n",fibonacci(a13), "\n")

// ============================================================

// 14. Implement a deep clone(copy) function in JavaScript that creates a copy of a nested object or array without any reference to the original.
function deepClone(value) {
    // Base case: null or primitive values
    if (typeof value !== 'object' || value === null) {
        return value;
    }

    // If it's an array
    if (Array.isArray(value)) {
        let cloneArr = [];
        for (let i = 0; i < value.length; i++) {
            cloneArr[i] = deepClone(value[i]); // recursive call
        }
        return cloneArr;
    }

    // If it's a plain object
    let cloneObj = {};
    for (let key in value) {
        if (value.hasOwnProperty(key)) {
            cloneObj[key] = deepClone(value[key]); // recursive call
        }
    }
    return cloneObj;
}

// Test Case for array
let originalArray = [1, [2, 3], [4, [5, 6]]];

let clonedArray = deepClone(originalArray);

// Modify cloned array to prove no reference is shared
clonedArray[1][0] = 999;
clonedArray[2][1][1] = 888;

console.log("Original:", originalArray);
console.log("Cloned:  ", clonedArray);


// Test Case for object
let original = {
    name: "Alice",
    scores: [95, 88],
    address: {
        city: "Wonderland",
        zip: 12345
    }
};

let copied = deepClone(original);

// Modify the clone to prove no reference is shared
copied.name = "Bob";
copied.scores[0] = 100;
copied.address.city = "Nowhere";

console.log("Original:", original);
console.log("Copied:", copied);

// ============================================================

// 15. Write a function to find how many times an elements are repeated in an array [1,2,3,3,5,2,1,7,6,8,7,8] and in string "abcdaabdlfj1'
let a15 = [1, 1, 2, 2, 3]

function repeated(a15) {
    let out = {}

    for (let key of a15) {
        out[key] ? out[key] += 1 : out[key] = 1
    }
    return out
}
console.log("\n",repeated(a15))

// ============================================================

// 16. Write a function to capitalize the each words last letter to capital
let a16 = ['abc', 'def', 'ghi']

function capitalize (a16) {
    let out = []

    for(let i = 0; i < a16.length; i++){
        let str = a16[i]
        let first = str[0]
        let capital = String.fromCharCode(first.charCodeAt(0) - 32)
        let rest = ''

        for (let j = 1; j < str.length; j++){
            rest += str[j]
        }
        out.push(capital + rest)
    }
    return `Array of strings after converting the first letter of string to capital => ${out}`
}

console.log("\n",capitalize(a16))

// ============================================================

// 17. Write a function to calculate the sum of total marks in an array of objects
let students = [
    { name: "Alice", marks: 90 },
    { name: "Bob", marks: 85 },
    { name: "Charlie", marks: 78 }
];

function totalMarks(students) {
    let sum = 0;

    for (let i = 0; i < students.length; i++) {
        sum += students[i].marks;  // accesses the marks from each object
    }

    return `Sum of total marks in an array of object => ${sum}`;
}

console.log("\n",totalMarks(students))

// ============================================================

// 21. Write a function to remove the duplicate from 2 arrays, let a = [1,2,3,4,5] let b = [5,3,7,8,9]
let a = [1, 2, 3, 4, 5];
let b = [5, 3, 7, 8, 9];

function removeDuplicatesFromBoth(a, b) {
    let merged = []
    let unique = []
    for(let key of a){
        merged.push(key)
    }
    for(let key of b){
        merged.push(key)
    }
    for(let i = 0; i < merged.length; i++){
        let found = false
        for(let j = 0; j < unique.length; j++){
            if(merged[i] === unique[j]){
                found = true
                break
            }
        }   
        if(!found){
            unique.push(merged[i])
        }
    }
    return `Final array after removing duplicates from both array => ${unique}`
}
console.log("\n", removeDuplicatesFromBoth(a, b), "\n")