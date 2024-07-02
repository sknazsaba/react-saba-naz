function sum(a, b) {
  var result = a + b;
}

sum(4, 5);
console.log(result);
{
  //block scope
}
if (true) {
  //block scope
}
for (var i = 1; i <= 10; i++) {
  //block scope
}
console.log("value of I", i);
function dosomething() {
  //function scope
}
