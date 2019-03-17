{
  console.log({w:false,c:false});
  const obj = Object.defineProperty({}, 'foo', {
    value: 'hello',
    writable: false,
    configurable: false
  });
  obj.foo = 'bye';
  console.log('after set', obj.foo); // hello
  delete obj.foo;
  console.log('after delete', obj.foo); // hello
}

{
  console.log({w:false,c:true});
  const obj = Object.defineProperty({}, 'foo', {
    value: 'hello',
    writable: false,
    configurable: true
  });
  obj.foo = 'bye';
  console.log('after set', obj.foo); // hello
  delete obj.foo;
  console.log('after delete', obj.foo); // undefined
}

{
  console.log({w:true,c:false});
  const obj = Object.defineProperty({}, 'foo', {
    value: 'hello',
    writable: true,
    configurable: false
  });
  obj.foo = 'bye';
  console.log('after set', obj.foo); // bye
  delete obj.foo;
  console.log('after delete', obj.foo); // bye
}

{
  console.log({w:true,c:true});
  const obj = Object.defineProperty({}, 'foo', {
    value: 'hello',
    writable: true,
    configurable: true
  });
  obj.foo = 'bye';
  console.log('after set', obj.foo); // bye
  delete obj.foo;
  console.log('after delete', obj.foo); // undefined
}

{
  console.log({c:true});
  const obj = Object.defineProperty({}, 'foo', {
    value: 'unchanged',
    configurable: true
  });
  Object.defineProperty(obj, 'foo', {
    value: 'changed'
  });
  console.log('after set', obj.foo);
}

{
  console.log({c:false});
  const obj = Object.defineProperty({}, 'foo', {
    value: 'unchanged',
    configurable: false
  });
  try {
    Object.defineProperty(obj, 'foo', {
      value: 'changed'
    });
  } catch(e) {
    console.error(e.message); // Cannot redefine property: foo
  }
  console.log('after set', obj.foo);
}
