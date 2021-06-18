//Write a JavaScript function to clone an array
//Test Data :
//console.log(array_Clone([1, 2, 4, 0]));
//console.log(array_Clone([1, 2, [4, 0]]));
//[1, 2, 4, 0]
//[1, 2, [4, 0]]

const num1 = [1, 2, 3, 4];
const num2 = [1, 2, [4, 0]];

function array_clone(val) {
    const arr = val;
    return arr;
}

console.log(array_clone(num1));
console.log(array_clone(num2));