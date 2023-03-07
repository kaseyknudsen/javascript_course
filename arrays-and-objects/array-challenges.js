//challenge #1
/* mutate the array so from const arr = [1, 2, 3, 4, 5] to [6, 5, 4, 3, 2, 1, 0] */

const arr = [1, 2, 3, 4, 5]
arr.push(6)
arr.unshift(0)
arr.reverse()
//console.log(arr)

//challenge #2
/* combine arr1 and arr2 into a new array called arr3 */
//expected result: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const arr1 = [1, 2, 3, 4, 5]
const arr2 = [5, 6, 7, 8, 9, 10]
let arr3 = [...arr1, ...arr2]
arr3 = [...new Set(arr3)]
//console.log(arr3)

//solution 2
const arr4 = [1, 2, 3, 4, 5]
const arr5 = [5, 6, 7, 8, 9, 10]
arr4.pop()
const arr6 = [...arr4, ...arr5]
console.log(arr6)