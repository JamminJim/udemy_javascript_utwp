/*global document, window, alert, console, require*/

console.log("Section: 2  - Execution Contexts and Lexical Environments");

console.log("Lesson 15 - Functiosn, Context, and Variable Environments");

/* Lesson Notes

Variable Environments - Where the variable lives and how they relate to each other in memory.

*/


function b() {
    var myVar;
}

function a() {
    var myVar = 2;
    console.log(myVar);
    b();
}

var myVar = 3;
a();


/*
    In the above, the Global Execution Context is created during the creation phase and the myVar is put into memory. Next the code is executed and the variable is set to 1.

    Once it hits a(), it creates a new Execution Context for function a(). and then the execution phase myVar is set to 2

    Then b's execution context is created and sets myVar to undefined.


*/
