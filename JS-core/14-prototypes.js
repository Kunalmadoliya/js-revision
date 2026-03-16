const pithviraj = {
  name: "Prithvoraj",
  generation: "grandfather",
  cookTraditionalDish() {
    return `${this.name} cooks an ancient family recipe`;
  },
};

const raj = Object.create(pithviraj);

raj.name = "raj";
raj.generation = "father";
raj.ranBisuness = function () {
  return `${this.name} runs the business`;
};

const ranbir = Object.create(raj);

ranbir.name = "ranbir";
ranbir.generation = "son";
ranbir.makeFilm = function () {
  return `${this.name} directs movies`;
};

console.log(ranbir.makeFilm());
console.log(ranbir.ranBisuness());
console.log(ranbir.cookTraditionalDish());

// let newArry = []

// function map(items){
//    newArry.push(items[0])
// }

// const item = [1,2,3,4,56,6,7,8,9]

// item.prototype.last = function () {
//   return this[this.length - 1];
// };

Array.prototype.hitesh = "hitesh";

console.log([1, 2, 3].hitesh);

Array.prototype.last = function () {
  return this[this.length - 1];
};

console.log([1, 2, 3].last());
console.log(["Ani", "hitesh", "Akash"].last());

const users = [
  {name: "Kunal", age: 20},
  {name: "Rahul", age: 22},
];

console.log(
  users.forEach((user, index) => {
    console.log(index, user.name);
  }),
);

Array.prototype.myMap = function (cb) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(this[i] * 2);
  }

  return result;
};

console.log([1, 2, 3].myMap());

Array.prototype.myforEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    console.log(this[i]);
  }
};

console.log(
  [
    {name: "Kunal", age: 20},
    {name: "Rahul", age: 22},
  ].myforEach(),
);


let org = { 
  k1 : "a" , 
  k2 : "b" , 
  k2 : "v"
}

let clone = {}

for (const key in org) {
  console.log(org[key]);
  
  // console.log(key);
  
    clone[key] = org[key]
}

console.log(clone);


Object.assign()