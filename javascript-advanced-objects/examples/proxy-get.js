const orig = { myProp: 7 };
const handler = {
  get: (target, prop, receiver) => {
    return target[prop] ? target[prop] + 1 : Infinity;
  }
};
const proxy = new Proxy(orig, handler);

console.log(orig.myProp); // 7
console.log(orig.xyz); // undefined
console.log(proxy.myProp); // 8
console.log(proxy.xyz); // Infinity
