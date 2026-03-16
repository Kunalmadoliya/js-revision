function cookdish(ingredients, time) {
  return `${this.name} and ${ingredients} : ${time}`;
}

const c1 = {name: "hi"};

console.log(cookdish.call(c1, "pulao", 15));

const guptaKitchen = {name: "Gupta jis Kitchen"};
const guptaOrder = ["Chole kulche", "Punjabi Dhaba"];

console.log(cookdish.apply(guptaKitchen, guptaOrder));

const bills = [100, 30, 45, 50];

console.log(Math.max.apply(null, bills));

console.log(...bills);

console.log(Math.max(...bills));

function reportDelivery(location, status) {
  return `${this.name} with ${location} and your status: ${status}`;
}

const deliveryName = {name: "kunal"};

console.log(reportDelivery.call(deliveryName, "delhi", "delivered"));
console.log(reportDelivery.apply(deliveryName, ["delhi", "pickedUp"]));
// console.log(reportDelivery.bind(deliveryName , "Haridwar" , "What"));

const bindReport = reportDelivery.bind(deliveryName);
console.log(bindReport("Haridwar", "What"));
