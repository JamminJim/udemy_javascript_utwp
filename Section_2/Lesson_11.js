/*global document, window, alert, console, require*/

console.log("Section: 2 - Execution Contexts and Lexical Environments");

console.log("Lesson 11 - Conceptual Aside: Javascript and 'undefined' ");


/* Notes
        'undefined' and 'not defined' are not the same thing.


        'undefined' is a special value in the JavaScript engine.



 bad programming practice : never set a variable to undefined
 a = undefined <--- bad, hard to tell if you or the JavaScript engine set it. Let JavaScript engine set it so you know the variabl if its undefined had never been set before

*/


var a;
console.log(a);

if (a === undefined) {
    console.log('a is undefined!');
} else {
    console.log('a is defined!');
}
