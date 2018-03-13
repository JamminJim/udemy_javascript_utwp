/*global document, window, alert, console, require*/

console.log("Section: 2  - Execution Contexts and Lexical Environments");

console.log("Lesson 14 - Function Invocation and the Execution Stack");

/* Lesson Notes

Invocation - running a function or calling a function

In Javascript, by using parenthesis ()

*/


function b() {

}

function a() {
    b();
}

a();


/*

    When a() "invokes" the function, it creates a new execution context a() ontop of the Global Execution Context.


    The new execution context has its own space for variables

    In the example above, inside of the the function a, it would create another Execution Context "b" when b() is invoked


    lexically the physical order of the functions doesnt matter, the Javascript engine knows how to do this

*/


function c() {
    d();
    var e;
}

function d() {
    var f;
}

c();
var f;

/*

    In the example above, it doesnt matter if function C is calling function d which is defined after it because both are already in memory during the create phase.


*/




