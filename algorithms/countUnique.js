/* Count Unique */
// two pointer method

// my way
function countUnique(arr) {
  if (arr.length === 0) return 0;
  // assume count is 0 and mark first and second index
  let count = 0;
  let first = 0;
  let second = 1;
  // loop in arr as far as last item, no need to check the last item
  while (first < arr.length) {
    // if first element is equal to second element move on both element
    if (arr[first] === arr[second]) {
      first++;
      second++;
    } else {
      // if element are different move on and increase the count
      count++;
      first++;
      second++;
    }
  }
  return count;
}

console.log(countUnique([1, 1, 1, 1, 3, 6, 7, 7, 7, 7, 7, 10]));
console.log(countUnique([7, 7, 7, 7, 7]));

// better way

function countUnique1(arr) {
  if (arr.length === 0) return 0;
  // mark the first index
  let i = 0;
  // start loop from second element
  for (let j = 1; j < arr.length; j++) {
    // if sliding element are not equal, loop next and assign first element to former item in loop
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  // index + 1 as it count how many time loop found different element
  return i + 1;
}

console.log(countUnique1([1, 1, 1, 1, 3, 6, 7, 7, 7, 7, 7, 10]));
console.log(countUnique1([7, 7, 7, 7, 7]));
