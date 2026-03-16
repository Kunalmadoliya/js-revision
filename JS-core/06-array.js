const carriage1 = ["Veer", "Ayush", "Ravi"];
const emptyCarriage = [];

const threeEmptySeats = Array(3);
console.log(threeEmptySeats.length);

const singlePassenger = Array.of(99);
singlePassenger.push(5 , 10 , 30 , 40)
console.log(singlePassenger);

const trainCode = Array.from(["A", "B", "C", "D", "E"]);
console.log(trainCode);

const tempTrain = ["A", "B", "C", "D", "E"];
tempTrain.length = 3;
console.log(tempTrain);
tempTrain.length = 5;
console.log(tempTrain);


console.log(typeof []);
console.log(Array.isArray([]));
console.log(Array.isArray("Ravi"));