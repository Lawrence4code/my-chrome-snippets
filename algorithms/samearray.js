/* Array is same/squared */

/*
Inputs
same([1,2,3], [4,1,9]) // true
same([1,2,3,9], [4,1,9,9]) // true
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,1]) // false
*/

/* ------------- naive solution ------------- */
function samev1(a, b) {
  // debugger;
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    const squared = a[i] ** 2;
    if (b.includes(squared)) {
      let index = b.indexOf(squared);
      b.splice(index, 1);
    } else {
      return false;
    }
  }
  return true;
}

// problem with my solution
// indexOf results in quadratic complexity

/* ------------- refactor solution: one ------------- */

function samev2(arrOne, arrTwo) {
  // debugger;
  if (arrOne.length !== arrTwo.length) return false;
  for (let i = 0; i < arrOne.length; i++) {
    let correctIndex = arrTwo.indexOf(arrOne[i] ** 2);
    if (correctIndex === -1) return false;
    arrTwo.splice(correctIndex, 1);
  }
  return true;
}

/* ------------- optimized solution: two ------------- */

function samev3(arrOne, arrTwo) {
  // debugger;
  if (arrOne.length !== arrTwo.length) return false;
  let collectionOne = {};
  let collectionTwo = {};
  // create profile for arrOne and arrTwo of values
  for (let val of arrOne) {
    collectionOne[val] = (collectionOne[val]++ || 0) + 1;
  }
  for (let val of arrTwo) {
    collectionTwo[val] = (collectionTwo[val]++ || 0) + 1;
  }
  for (let key in collectionOne) {
    // if square of key on in collectionOne does not exist in collection two return false
    if (!(key ** 2 in collectionTwo)) return false;
    // check of number of key count are equal in both the collection eg. col1[2] = 5, col2[4] = 5
    if (collectionTwo[key ** 2] !== collectionOne[key]) return false;
  }
  // return true if above case are met
  return true;
}

console.log(samev3([1, 2, 3, 3], [4, 1, 9, 9]));
console.log(samev3([1, 2, 3], [4, 1, 4]));
