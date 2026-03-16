const orders = [
  {dish: "Pasta Carbonara", price: 14, spicy: false, qty: 2},
  {dish: "Dragon Ramen", price: 12, spicy: true, qty: 1},
  {dish: "Caesar Salad", price: 9, spicy: false, qty: 3},
  {dish: "Inferno Wings", price: 11, spicy: true, qty: 2},
  {dish: "Truffle Risotto", price: 18, spicy: false, qty: 1},
];

// const myData = orders.forEach((order , index) => {
//      console.log(`  #${index + 1} : ${order.qty}x ${order.dish}`);
// });

const receiptLines = orders.map(
  (o, index) => `#${index + 1} : ${o.qty} x ${o.dish}`,
);
console.log(receiptLines);

const spicyOrders = orders.filter((o) => o.spicy);
console.log(spicyOrders);

const totalRevenue = orders.reduce((acc, o) => {
  return acc + o.qty * o.price;
}, 0);

console.log(totalRevenue);

const grouped = orders.reduce(
  (acc, o) => {
    const cateogry = o.spicy ? "spicy" : "mild";
    acc[cateogry].push(o.dish);
    return acc;
  },
  {spicy: [], mild: []},
);

console.log(grouped);

const ticketNumbers = [100, 25, 3, 42, 8];
console.log(...ticketNumbers.sort((a, b) => a - b));

const kitchenOrders = [
  {dish: "Pasta Carbonara", price: 14, spicy: false, qty: 2},
  {dish: "Dragon Ramen", price: 12, spicy: true, qty: 1},
  {dish: "Caesar Salad", price: 9, spicy: false, qty: 3},
  {dish: "Inferno Wings", price: 11, spicy: true, qty: 2},
  {dish: "Truffle Risotto", price: 18, spicy: false, qty: 1},
  {dish: "Ghost Pepper Soup", price: 15, spicy: true, qty: 1},
];

const filteredKitchen = kitchenOrders
  .filter((o) => !o.spicy)
  .map((o) => ({
    dish: o.dish,
    totalPrice: o.qty * o.price,
  }))
  .sort((a, b) => b - a);

console.log(filteredKitchen);
