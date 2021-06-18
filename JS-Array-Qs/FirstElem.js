// Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
// Test Data :
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));
// Expected Output :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []

const num1 = [7, 9, 0, -2];
const num2 = [];


function first(arr, n) {
    const ans = new Array();
    if(n > arr.length)
        return arr;
    else if(n < 0)
        return ans;
    else {
        for(var i=0; i<n; i++) {
            ans.push(arr[i]);
        }
        return ans;
    }
}

console.log(first(num1, 1));
console.log(first(num2, 3));
console.log(first(num1, 3));
console.log(first(num1, 6));
console.log(first(num1, -3));