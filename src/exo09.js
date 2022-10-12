export function parseUserData3(data) {
  const { name = "Anonymous", isAdmin = false, ...properties } = data;
  // TODO: return a new object with the properties of data
  // and these values applied as default for missing properties :

  // 3 - using destructuring and default parameters for parseUserData
  return { name, isAdmin, ...data };
}

export function parseUserData2(data) {
  // TODO: return a new object with the properties of data
  // and these values applied as default for missing properties :
  const defaults = { name: "Anonymous", isAdmin: false };

  // 2 - using spread operator on properties
  return { ...defaults, ...data };
}

export function parseUserData(data) {
  // TODO: return a new object with the properties of data
  // and these values applied as default for missing properties :
  const defaults = { name: "Anonymous", isAdmin: false };

  // 1 - using Object.assign
  return Object.assign({}, defaults, data);
}
