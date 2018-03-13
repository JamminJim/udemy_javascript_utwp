/*global document, window, alert, console, require*/

console.log("Section: 2 - Execution Contexts and Lexical Environments");

console.log("Lesson 10 - The Execution Context - Creation and Hoisting");

/* Notes



*/


var a = 'Hello World!';

function b() {
    'use strict';
    console.log('Called b!');
}

b();
console.log(a);

/* Code Notes - We expect to say Called B followed by Hello World and that is what happens */

/* Code Notes - if we move the calls above the definition, we would expect an error becuase other languages execute one line at a time */

d();
console.log(c);
var c = 'Hello World';
function d() {
    'use strict';
    console.log('Called d!');
}

/* Code Notes - when the above is run, we get 'Called d!' followed by 'undefined'. */

/* Code Notes - it gave us a value but it was 'undefined', but it still ran regardless of order */

/* This is [ HOISTING ]
        The functions are NOT moved when the code is run, although many websites may say something like that.

        Instead, the code is translated by the JavaScript Engine first when the Execution Context is created.

        The [ Exectuion Contet ] is created in two phases.
            Phase 1: The Creation Phase.
                It creates the [ Global Object ] and 'this' and as the parser runs through the code, it recognizes where variables and functions are located and sets up Memory Space for these variables and functions. This is really whats going on when people refer to  [ 'Hoisting' ]

        Functions and its contents are placed into memory in its entirely. However variables assignments are not set during this phase, instead it sets variables to a placeholder: [ 'undefined' ]


*/








