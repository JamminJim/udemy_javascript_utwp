let result = document.getElementById("result");
function counter(count) {
  result.innerHTML += `${count}  `;
}

/*
    Var keyword
    var is NOT blocked scoped.
    settimeout is asynchronus, js is single threaded
    calls to settime out are added along with their variables
    when the Call Stack is empty, each setTimeout is processed
    they are then put onto the call stack
*/

let t;
console.log(t);

function f1() {
  result.innerHTML = "";
  for (var i = 0; i < 5; i++) {
    setTimeout(() => {
      counter(i); // <-- doesnt work.
    }, i * 500); // <-- works
  }
}

/*
Use .bind and this
Use an anonymous function
bind the value of i to the callback function
this provides block score value for i that will
travel with settimeout when its stored in the browser environement

*/
function f2() {
  result.innerHTML = "";
  for (var i = 0; i < 5; i++) {
    setTimeout(
      function (x) {
        counter(x);
      }.bind(this, i), // <-- lets i be stored with SetTimeout method
      i * 500
    );
  }
}

/*
    Closure approach
    Place setTimeout within an anony function
    i becomes scoped with setTimeout
    note, we have to invoke the inner function
*/
function f3() {
  result.innerHTML = "";
  for (var i = 0; i < 5; i++) {
    const closure = (i) => {
      setTimeout(() => {
        counter(i);
      }, i * 500);
    };
    closure(i);
  }
}
/*
    Let in place of var
    it automatically gets blocked scoped

*/
function f4() {
  result.innerHTML = "";
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      counter(i);
    }, i * 500);
  }
}
