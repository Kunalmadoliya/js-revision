function prepareOrder(dish) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!dish) {
        reject(new Error("not dish"));
        return;
      }

      console.log(`${dish} is ready`);
      resolve({dish, status: "prepared"});
    }, 100);
  });
}

function pickupOrder(order) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!order) {
        reject(new Error(`${order} Order not picked up yet`));
        return;
      }

      console.log(`${order.dish} is picked up`);
      resolve({order, status: "pickedup"});
    }, 100);
  });
}

function deliverOrder(order) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`${order} is ready`);
      resolve({...order, status: "delivered"});
    }, 100);
  });
}


prepareOrder("paneer").then(order => pickupOrder(order)).then(order => deliverOrder(order))