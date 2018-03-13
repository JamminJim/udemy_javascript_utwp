/*global document, window, alert, console, require*/

function b() {
    'use strict';
    console.log('Called b!');
}

b();
// call b


var a = 'Hello World!';
var b = "Later World!";

console.log(a);
console.log(b);
console.log(Comma(100000, 3));

function Comma(val, pwr) {
    'use strict';

    var s = (val < 0) ? "-" : "";

    var q = Math.floor(Math.abs(val) / Math.pow(10, pwr));
    var r = Math.abs(val) % Math.pow(10, pwr);

    if (q > 0) {
        s += Comma(q, pwr);
    }

    if (q === 0) {
        s += String(r);
    } else {
        s += ",";

        for (var i = pwr; i > 0; i--) {
            if (r < Math.pow(10, i)) {
                s += "0";
            } else {
                s += r;
                break;
            }
        }
    }
    return s;
}
