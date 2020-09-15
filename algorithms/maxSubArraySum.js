/* Max SubArray Sum  */
// Sliding window pattern

function maxSubArraySum(arr, num) {
  // if num is greater than length of array return null
  if (num > arr.length) {
    return null;
  }
  // assume and assign
  let maxSum = 0;
  let tempSum = 0;

  // get the sum arr element for the given num [2,6,9] 17
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum; // make the tempSum to maxSum before looping
  // loop in rest of the element i.e [2, 1, 8, 5, 6, 3]
  for (let i = num; i < arr.length; i++) {
    // console.log(tempSum, '***-', arr[i - num], '***+', arr[i]);
    // remote the firstElement and add next element;
    tempSum = tempSum - arr[i - num] + arr[i];
    // assign maxSum to bigger number
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
