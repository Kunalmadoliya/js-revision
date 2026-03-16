function add(a, b) {
  return a + b;
}

console.log(`1 + 2 is`, add(1, 2));

// const func = () => "Like  this blog"

// console.log(func())

// const func = () => {
//   return "Like  this blog";
// };
// console.log(func());

let sum = 0;

const calculateMarks = (maths, english, science) => {
  return (sum += maths + english + science);
};

console.log("total marks out of 300 is :- ", calculateMarks( 80, 90, 95));
