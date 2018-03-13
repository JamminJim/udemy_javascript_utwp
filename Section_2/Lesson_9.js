/*global document, window, alert, console, require*/

console.log("Section: 2 - Execution Contexts and Lexical Environments");

console.log("Lesson 9 - The Global Environment and the Global Object");

/* Notes

    When your code is run, the JavaScript engine creates a global object and a special global variable called 'this'.

    typing 'this' in the dev tool console window results in "Window"

    The [ Window ] object - is the global object when running in a Browser

    [ Global ] in JavaScript means "Not Inside a Function".

*/


// first code

// create a variable a
var a = 'Hello World';

// create a empty function b
function b() {
    'use strict';

}

/* Code Note - Running the above code in the dev window, we can type "a" and it will show "Hello World". Since it is also a global variable, we can type "window.a" and have it out "Hello World" as well.
*/

/* ['use strict'] - makes it easier to write "secure" JavaScript. Strict mode changes bad syntax into real errors.
*/

