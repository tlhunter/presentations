const orig = {};
const handler = {
  set: (target, prop, value, receiver) => {
    target[prop.toUpperCase()] = String(value);
  }
};
const proxy = new Proxy(orig, handler);

orig.xyz = 1;
console.log(orig); // { xyz: 1 }
proxy.hello = 1;
console.log(orig); // { xyz: 1, HELLO: '1' }
