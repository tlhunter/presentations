const orig = {};
Object.defineProperty(orig, 'name', {
  get: () => {
    console.log('2. prop desc get'); return 'Thomas';
  }
});
const proxy = new Proxy(orig, {
  get: (target, prop) => {
    console.log('1. proxy get'); return target[prop];
  }
});
console.log(`3. ${proxy.name}`); // 1. proxy get
                                 // 2. prop desc get
                                 // 3. Thomas
