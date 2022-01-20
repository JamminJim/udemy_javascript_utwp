console.log("This is a test");
console.log(this);

for (let x = 0; x < 10; x++) {
  console.log(x);
}

var double = (x, y) => {
  return x * y;
};

console.log(double(10, 10));
