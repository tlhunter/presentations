const obj1 = { a: 1 };
console.log(Object.getOwnPropertyDescriptor(obj1, 'a'));
// { value: 1, writable: true,
// enumerable: true, configurable: true }
const obj2 = { get b() { } };
console.log(Object.getOwnPropertyDescriptor(obj2, 'b'));
// { get: [Function: get b], set: undefined,
// enumerable: true, configurable: true }
const obj3 = Object.defineProperty({}, 'c', {
  value: 'xyz'
});
console.log(Object.getOwnPropertyDescriptor(obj3, 'c'));
// { value: 'xyz', writable: false,
// enumerable: false, configurable: false }
