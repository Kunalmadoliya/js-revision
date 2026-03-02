function testPromise() {
  return new Promise((res, rej) => {
    console.log("first");
    setTimeout(() => {
      rej(new Error("rejected vall"));
    }, 2000);
    console.log("second");
  });
}

async function executePromise(params) {
  const val = await testPromise();
  console.log(val);
  console.log("hello");
}

executePromise();

function createOptimisedVersion(fn) {
  let cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache[key]) {
      return cache[key]; 
    }

    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}
