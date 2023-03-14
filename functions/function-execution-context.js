/* when you run any JS, a special environment is created to handle the transformation
& execution of code. This is called the execution context. It contains the currently
running code and everything that aids in it's execution */
/* there is a global execution context as well as a function execution context for
every function invoked */
/* Javascript is single threaded and synchronous */
/* in the browser, the global object is called window */

/* memory creation phase
1) create the global object (browser = window, Node.js = global)
2) create the 'this' object and bind it to the global object
3) setup memory heap for storing variables and function references
4) store functions and variables in global execution context

execution phase
1) execute line by line
2) create a new execution context for each function call*/

//example
let x = 100 //x variable is allocated memory and stores 'undefined'
let y = 50 //y variable is allocated memory and stores 'undefined'
function getSum(n1, n2) { //function allocated to memory and stores all the code
    let sum = n1 + n2
    return sum
}
let sum1 = getSum(x,y) //variable is allocated memory and stores undefined
let sum2 = getSum(10,5)

//execution phase
/* 1) line 20: places value of 100 into the x variable */
/* 2) line 21: places value of 50 into the y variable */
/* 3) line 22: skips because there is nothing to execute */
/* 4) line 26: invokes the getSum() function and creates a new function execution context */
    //now we are in the creation phase of the function, so the variables
    //are stored as undefined