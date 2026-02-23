// console.log(brewPotion("Herbing herbs", 3));

// function brewPotion(ingredients, dose) {
//   return `Brewing potion with ${ingredients} x ${dose}`;
// }

// const miElixir = function(ingredients){
//    return `${ingredients}`
// }


// const digitalEssence = (ingredients) => {
//  return `${ingredients}`
// }



// function oldBrewingLogs(){
//     console.log(arguments);
    
//     console.log("Typeof: " , typeof arguments);
//     console.log("Is Array: " , Array.isArray(arguments));
//     const argsArray = Array.from(arguments)
//     console.log(argsArray);
// }


// console.log(oldBrewingLogs("hi" , "hello"));


// // console.log(miElixir("hi"));


// // arrow dont have args 

// // const arrowBrew = () =>{
// //     try {
// //         console.log(arguments);
// //     } catch (error) {
// //         console.log(error);
        
// //     }
// // }

// // console.log(arrowBrew('HELLO'));

// // console.log("Program continue");


// const potionShop = (function (){
//     let inventory = 0


//     return {
//         brew(){
//             inventory++;
//             return `brew invention ${inventory}`
//         },
//         getStock(){
//              return inventory;
//         }
//     }
// })()

// console.log(potionShop);
// console.log(potionShop.brew());
// console.log(potionShop.getStock());

// console.log(potionShop.inventory);

// function something(){
//     let i = 7
//     const name = "hitesh"
//     return 5
// }


function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();