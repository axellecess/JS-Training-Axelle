// try to solve the exercise using spread and rest operators

// TODO: return an object with properties being the list of received arguments,
// and the number of times each argument has been received as values
export function count(...products) {
  /*let res = {};
  products.forEach((p) => {
    let nb = res[p] ? res[p] : 0;
    res[p] = nb + 1;
  });
  return res;*/

  // reduce 😎 but don't forget to return
  return products.reduce((countProducts, p) => {
    //let count = p in countProducts ? countProducts[p]+1 : 1
    let count = (countProducts[p] || 0) + 1;
    return { ...countProducts, [p]: count };
  }, {});
}

export function count2(...products) {
  return {
    ...products.map((product) => {
      return { [product]: products.filter((p) => p === product).length };
    })
  };
}
/*[
{ Carrot: 2}
{ Cabbage: 3 }
]*/
// example:
count("Carrot", "Cabbage", "Potato", "Cabbage", "Cabbage", "Carrot");
// { Carrot: 2, Cabbage: 3, Potato: 1 }

// TODO: return the argument that occurs the most times in the argument list
export function mostFrequentIn(...products) {
  let countProducts = count(...products);
  let valueMax = Math.max(...Object.values(countProducts));
  return products.find((p) => countProducts[p] === valueMax);
  /*for (let p in countProducts) {
    if (countProducts[p] === valueMax) {
      return p;
    }
  }*/
}

// example:
mostFrequentIn(
  "Carrot",
  "Cabbage",
  "Potato",
  "Cabbage",
  "Cabbage",
  "Carrot"
) === "Cabbage";
