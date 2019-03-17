const orig = {};
const handler = {
  getPrototypeOf: (target) => null,
  setPrototypeOf: (target, proto) => {
    throw new Error('no way');
  }
};
const proxy = new Proxy(orig, handler);

console.log(orig.__proto__); // {}
console.log(proxy.__proto__); // null
console.log(Object.getPrototypeOf(proxy)); // null
console.log(Reflect.getPrototypeOf(proxy)); // null
proxy.__proto__ = {}; // Error: no way
