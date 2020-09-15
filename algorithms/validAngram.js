/* Valid Anagram */

/*
Inputs
validAnagram('', ''); true
validAnagram('aaz', 'zza'); false
validAnagram('anagram', 'nagaram'); true
validAnagram('rat', car); false
validAnagram('texttwisttime', 'timetwistText);
*/

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  const collection1 = {};
  const collection2 = {};
  for (let ele of str1) {
    collection1[ele] = (collection1[ele]++ || 0) + 1;
  }
  for (let ele of str2) {
    collection2[ele] = (collection2[ele]++ || 0) + 1;
  }
  for (let key in collection2) {
    // ensure keys in collection2 exists in collection1
    if (!key in collection1) {
      return false;
    }
    // ensure count of key in collection2 is equal to count of key in collection1
    if (collection2[key] !== collection1[key]) {
      return false;
    }
  }
  return true;
}

console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('rat', 'car'));
console.log(validAnagram('texttwisttime', 'timetwisttext'));
