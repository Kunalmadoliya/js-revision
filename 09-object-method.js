// it will return array of array

const artifact = {
  name: "Obsidian Crown",
  era: "Ancient",
  value: 50000,
  material: "volcanic glass",
};

const keys = Object.keys(artifact);
const values = Object.values(artifact);
const entries = Object.entries(artifact);


// console.log(...keys);
// console.log(...values);
// console.log(...entries);

for (const [key , value] of Object.entries(artifact)) {
    console.log(key , value);
    
}