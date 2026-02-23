// // arrow function dont have it own this its taking from the outside function
// // normal function has it own this

// console.log(this);

// // function ranveerOnGlobalStage(){
// //     return typeof this
// // }

// // console.log(ranveerOnGlobalStage());

// // function ranveerWithNoScript() {
// //   return this;
// // }
// // console.log(ranveerWithNoScript());

// const bollywoodFilm = {
//   name: "kunal",
//   lead: "hi",

//   introduce() {
//     return `${this.name} and ${this.lead}`;
//   },
// };

// const bollywoodFilm2 = {
//   name: "kunal",
//   lead: "hi",

//   introduce() {
//     return `${this.name} and ${this.lead}`;
//   },
// };

// console.log(bollywoodFilm.introduce());

// const filmDirector = {
//   name: "Sanjay Leela Bhansali",
//   cast: ["Ranveer", "Deepika", "Priyanka"],

//   announceCast() {
//    this.cast.forEach((actor) => {
//     console.log(`${this.name} introduces ${actor}`);

//    })
//   },
// };

// filmDirector.announceCast();

const filmSet = {
  crew: "Spot boys",
  prepareProps() {
    console.log("Outer this.crew: ", this);

    console.log(`Outer this.crew: ${this.crew}`);

    function arrangeChairs() {
      // console.log(this);
      console.log(`Inner this.crew: ${this.crew}`);
    }
    arrangeChairs();
    // Arrow function → does NOT create its own `this`
    const arrangeLights = () => {
      console.log("Arrow this.crew: ", this);
      console.log(`Arrow this.crew: ${this.crew}`);
    };
    arrangeLights();
  },
};

filmSet.prepareProps();

// const name = () => {
//     console.log(this.name);
// }

// const person = {name : "kunal"}

// name.call(person)


const actor = {
  name: "Ranveer",
  bow() {
    return `${this.name} takes a bow`;
  },
};
console.log(actor.bow());
const detachedBow = actor.bow;
console.log(detachedBow());


const myfunctionOne = function () {
  console.log(this);
};

const myfunctionTwo = () => {
  console.log(this);
};

myfunctionOne();
myfunctionTwo();
