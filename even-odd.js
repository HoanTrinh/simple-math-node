var num1 = parseInt(Math.random() * 100);
var num2 = parseInt(Math.random() * 100);

var answer = num1 * num2;
var remainder = answer % 2;

console.log('Num1: ', num1);
console.log('Num2: ', num2);
if(remainder === 0) {
  console.log('Happy because I am even');
} else {
  console.log('Sad because I am odd');
}
