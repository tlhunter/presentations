#!/usr/bin/env node

const sleep = (sec) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, sec * 1000);
  });
};

const broke = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('it broke'));
    }, 100);
  });
};

const asyncSleepWrapper = async (sec) => {
  console.log('async fn before sleep');
  await sleep(sec);
  console.log('async fn after sleep');
  return 42;
};

(async () => {
  console.log('before sleep');
  await sleep(1);
  console.log('after sleep');
})();

console.log('before sleep');
sleep(1)
  .then(() => { // ugly promise zigzag's
    console.log('after sleep');
  });

// Async functions can be used where promises can be used
asyncSleepWrapper(3)
  .then(res => { // ugly promise zigzag's
    console.log(res);
  })
  .then(() => { // ugly promise zigzag's
    console.log('async can be used where promises are used');
  });

broke()
  .then(() => {
    console.log('never fires');
  })
  .catch((err) => {
    console.error('promise rejected', err);
  });

try {
  broke();
} catch(err) {
  // Note: this doesn't work
  console.error('promise rejected inside try catch', err);
}

(async () => {
  try {
    await broke();
  } catch(err) {
    // This will work
    console.error('caught an async error', err);
  }
})();
