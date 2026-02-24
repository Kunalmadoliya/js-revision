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

Array.prototype.myMap = function () {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(this[i] * 2);
  }

  return result;
};

console.log([1, 2, 3].myMap());
