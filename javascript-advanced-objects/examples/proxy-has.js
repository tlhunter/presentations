const orig = { myProp: 7 };
const handler = {
  has: (target, prop) => {
    return false;
  }
};
const proxy = new Proxy(orig, handler);

console.log('myProp' in orig); // true
console.log('xyz' in orig); // false
console.log('myProp' in proxy); // false
console.log(proxy.myProp); // 7
