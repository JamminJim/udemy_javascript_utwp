/*global document, window, alert, console, require*/

console.log("Section: 2  - Execution Contexts and Lexical Environments");

console.log("Lesson 16 - The Scope Chain");

function b() {
    console.log(myVar);
}

function a() {
    var myVar = 2;
    b();
}

var myVar = 1;
a();


/*

  Result is 1 : Not undefined and not 2, the value at the global level

    That is because the global execution context is created and sets a myVar to 1.

    a() creates its own Exection Context and sets its myVar to 2

    b() creates its own Execution Context without a myVar

    The execution context have a reference to the 'outer environment'.

    function B's outer environment is the Global Execution Context, even though A is below B in the excution context stack.

    The Lexical Environment!

    function b() sits leically ontop of the Global Environment

    *Special* Javascript creates an outer reference when the code is executed. The reference depends on where the function sits lexically. B sits inside of the global level.

    The outer references link together in a chain which is the 'Scope Chain'.
*/



function d() {
    var myVar2 = 2;
    function e() {
        console.log(myVar2);
    }

    e();
}

var myVar2 = 1;
d();

/*
    In the code above, now since the function e() is created inside of d(). the outer reference of e points to d, so it uses myVar of 2.
*/



function f() {
    function g() {
        console.log(myVar3);
    }

    g();
}

var myVar3 = 1;
f();

/*
   In this example, we removed the mVar from the function f. Now when g() is called, it goes up the scope chain through f up to the global context where it finds myVar3 = 1
*/

