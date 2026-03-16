// function prepareOrder(dish) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (!dish) {
//         reject(new Error("not dish"));
//         return;
//       }

//       console.log(`${dish} is ready`);
//       resolve({dish, status: "prepared"});
//     }, 100);
//   });
// }

// function pickupOrder(order) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (!order) {
//         reject(new Error(`${order} Order not picked up yet`));
//         return;
//       }

//       console.log(`${order.dish} is picked up`);
//       resolve({order, status: "pickedup"});
//     }, 100);
//   });
// }

// function deliverOrder(order) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(`${order} is ready`);
//       resolve({...order, status: "delivered"});
//     }, 100);
//   });
// }

// prepareOrder("paneer")
//   .then((order) => pickupOrder(order))
//   .then((order) => deliverOrder(order));

// // const promise = new Promise((res , rej) => {
// //     setTimeout(() => {
// //       // res("chaicode")
// //       rej(new Error("this is the error"))
// //     } , 2000)
// // })

// const promise = new Promise((res, rej) => {
//   setTimeout(() => {
//     try {
//       res("Resolved");
//     } catch (error) {
//       rej("Not resolved");
//     }
//   }, 3000);
// });

// promise
//   .then((data) => {
//     const newData = data.toLowerCase();
//     return newData;
//   })
//   .then((data) => {
//     return data + ".com";
//   }).then(console.warn)
//   .catch((err) => console.log(err));

// const promise = new Promise((resolve , reject) => {})
// console.log(promise);

// const promise = new Promise((resolve, reject) => {
//   resolve("Promise Resolved");
//   reject("Promise Rejected");
// });

// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("code ends");
//   });

// const p = Promise.

// Promise.resolve("Project Approved")
//   .then(data => console.log(data));

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Promise 1 resolved"), 1000);
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Promise 2 resolved"), 2000);
// });

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Promise 3 resolved"), 3000);
// });

// Promise.any([promise1, promise2, promise3])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Promise 1 resolved"), 1000);
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Promise 2 resolved"), 2000);
// });

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Promise 3 resolved"), 3000);
// });

// Promise.all([promise1, promise2, promise3])
//   .then((result) => {
//     console.log(result); 
//   })
//   .catch((error) => {
//     console.error(error);
//   });


// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Promise 1 rejected'), 1000);
// });

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Promise 2 resolved'), 2000);
// });

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => reject('Promise 3 rejected'), 3000);
// });

// Promise.allSettled([promise1, promise2, promise3])
//     .then((data) => {
//         console.log(data)
//     })



const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => reject('Promise 1 rejected'), 1000);
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 2 resolved'), 2000);
  });
  
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 3 resolved'), 900);
  });

  Promise.race([promise1, promise2, promise3])
  .then((result) => {
    console.log(result);   // promise 1 rejected
  })
  .catch((error) => {
    console.error(error);
  });