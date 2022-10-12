// traps : get, set (+has)
export const addAliasForProperties = (object, alias) => {
  // TODO: re turn a Proxy for `object`
  // allowing to declare aliases for some properties
  // the alias can be used for both reading or writing a value on the aliased property
  const proxy = new Proxy(object, {
    get(object, propX) {
      return Reflect.get(object, propX in alias ? alias[propX] : propX);
    },
    set(object, propX, value) {
      return Reflect.set(object, propX in alias ? alias[propX] : propX, value);
    },
    has(object, propX) {
      return Reflect.has(object, propX in alias ? alias[propX] : propX);
    }
  });
  return proxy;
};

// example:
const originalUser = { name: "Sanchez", first: "Rick" };
const user = addAliasForProperties(originalUser, {
  lastName: "name",
  firstName: "first"
});

// `${user.firstName} ${user.lastName}` === "Rick Sanchez"

export const countFunctionCalls = (fn) => {
  // TODO: return a Proxy for function `fn`
  // allowing to count the number of times this function has been called
  // the count can be retrieved with `fn.count`
  let count = 0;
  return new Proxy(fn, {
    get(obj, key) {
      return key === "count" ? count : Reflect.get(obj, key);
    },
    apply(...args) {
      count++;
      return Reflect.apply(...args);
    }
  });
};

// example:
const fn = countFunctionCalls((n) => n * 2);
fn(1);
fn(2);
fn(999);

// fn.count === 3
