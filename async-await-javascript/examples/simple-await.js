#!/usr/bin/env node

const sleep = (sec) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, sec * 1000);
  });
};

const slowRandom = (min, max) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Math.floor(Math.random() * (max - min) + min));
    }, 1000);
  });
};

// Our top-most function isn't async, so we gotta wrap our awaits in an async function
(async () => {
  console.log('before second');
  await sleep(1);
  console.log('after second');
  console.log();

  console.log('anticipating a pickle');
  let x = await returnScalar();
  console.log('heres a pickle', x);
  console.log();

  let start = Date.now();
  console.log('about to do 2s and 3s things in parallel');
  let y = await Promise.all([
    sleep(2),
    sleep(3),
  ]);

  console.log('done with parallel, took in seconds:', (Date.now() - start) / 1000);
  console.log();

  start = Date.now();
  console.log('random integer', await randomScalar());
  console.log('took', (Date.now() - start) / 1000);
  console.log('random promise integer', await randomPromise());
  console.log('took total', (Date.now() - start) / 1000);
  console.log()
})();

async function returnScalar() {
  console.log('gonna return a pickle');
  await sleep(1);
  return 'pickle';
}

/**
 * Here we await the result of a promise, returning a number
 */
async function randomScalar() {
  let value = await slowRandom(100, 999);

  return value; // value is a number
}

/**
 * Here we do not await but instead return a promise
 */
async function randomPromise() {
  let futureValue = slowRandom(100, 999);

  return futureValue; // futureValue is a promise
}
