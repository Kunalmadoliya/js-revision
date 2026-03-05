const cta = document.getElementById("addProductBtn");
const innerDiv = document.getElementById("card");

let products = [];
let currentIndex = 0;

cta.addEventListener("click", async () => {
  if (products.length === 0) {
    products = await getProduct();
    if (!products) return;
  }

  if (currentIndex >= products.length) {
    alert("No more products!");
    return;
  }

  let item = products[currentIndex];

  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <img src="${item.images[0]}" alt="${item.title}" />
    <div class="product-info">
      <h3>${item.title}</h3>
      <p>${item.description.slice(0, 60)}...</p>
      <p><strong>Brand:</strong> ${item.brand}</p>
      <p class="price">$${item.price}</p>
      <p>⭐ ${item.rating} | ${item.discountPercentage}% off</p>
    </div>
  `;

  innerDiv.append(card);
  currentIndex++;
});

async function getProduct() {
  try {
    const res = await fetch(
      "https://api.freeapi.app/api/v1/public/randomproducts",
    );

    if (!res.ok) throw new Error("Failed to fetch products");

    const data = await res.json();
    return data.data.data;
  } catch (error) {
    console.log(error);
  }
}

// let fruits = ["apple", "banana"];
// console.log("Before unshift", fruits);
// fruits.unshift("orange");
// console.log("After unshift", fruits);

// let numbers = [1, 2, 3, 4, 5, 6];

// const multpleOfTwo = numbers.filter((num) => num%2 === 0)

// console.log(multpleOfTwo);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// numbers.forEach((num) => console.log(`Multiple ${num} * 2 = `, num * 2))
