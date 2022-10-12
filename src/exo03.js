// return an object with values and keys inverted
// we assume all values to be strings
// { a: "b" } => { b: "a" }

export function invertKeysAndValues(obj) {
  var inverted = {};
  for (let k in obj) {
    var v = obj[k];
    inverted[v] = k;
  }
  return inverted;
}
