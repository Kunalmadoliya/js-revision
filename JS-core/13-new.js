function TataCar(cNumber, mName) {
  this.cNumber = cNumber;
  this.mName = mName;
  this.fuel = 1000;
}

TataCar.prototype.status = function () {
  return `${this.cNumber} and ${this.mName} fuelLevel; ${this.fuel}`;
};

const car1 = new TataCar("12345698", "45465233");

console.log(car1);
console.log(car1.mName);

console.log(car1.status());

function createAutoRickshaw(id, route) {
  return {
    id,
    route,
    run() {
      console.log(`Auto ${this.id} running on ${this.route}`);

      const hi = () => {
        return `${this.id}`;
      };

      console.log(hi());
    },
  };
}

const auto1 = createAutoRickshaw("UP-1", "Lucknow-kanpu");
const auto2 = createAutoRickshaw("UP-2", "Agra-Mathura");

console.log(auto1.run());
console.log(auto2.run());
