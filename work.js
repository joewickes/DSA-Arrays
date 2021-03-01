const Array = require('./array');

function main(){

  Array.SIZE_RATIO = 3;

  // Create an instance of the Array class
  let arr = new Array();

  // Add an item to the array
  arr.push(3);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
  console.log(arr);
  // 2)
  // Length is 6,
  // Capacity is 12
  // Memory address is 3

  arr.pop();
  arr.pop();
  arr.pop();
  console.log(arr);
  // 3)
  // Length is 3
  // Capacity is 12
  // Memory address is 3

  arr.pop();
  arr.pop();
  arr.pop();
  arr.push("tauhida")
  console.log(arr);
  // 4)
  // The size allocation for the array doesn't change even with the items removed
  // Resize just resizes if the array capacity is too small

  // 5
  // O(n)
  const testStrInput = 'www.thinkful.com /tauh ida parv een';

  const newStr = testStrInput.replace(/ /g, '%20');

  console.log(newStr);


  // 6)
  // O(n)
  let inputArr = [4, 6, -3, 5, -2, 1];
  let newArr = [];

  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] < 5) {
      newArr.push(inputArr[i])
    }
  }

  console.log(newArr);

  // 7)
  // O(n)
  let origArr = [4, 6, -3, 5, -2, 1];
  let maxSum = 0;
  let currentSum = 0;

  for (let i = 0; i < origArr.length; i++) {
    // if neither of those is true, update the current sum
    currentSum += origArr[i];
    
    // If the current sum dips below 0, reset current sum to 0 and continue
    if (currentSum < 0) {
      currentSum = 0;
      continue;
    }
    // if the current sum is higher than the max sum, make it the new max sum
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }

  console.log(maxSum);

  // 8)
  // O(n^2)
  function sort2(array1, array2) {
    array1.push(...array2);
    array1.sort((a, b) => a - b);
    console.log(array1);
  }

  sort2([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]);

  // 9)
  // O(n);

  function removeCharacters(str, char) {
    let regexStr = `[${char}]`;
    const regex = new RegExp(regexStr, 'g')
    const replaced = str.replace(regex, '');
    console.log(replaced);
  } 

  removeCharacters('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou');

  // 10)
  // O(n^2) {
  function products(arr) {
    let currNum = null;
    let currSum = null;
    let finalArr = [];

    for (let i = 0; i < arr.length; i++) {
      currNum = arr[i];
      console.log('starting', currNum);
      for (let j = 0; j < arr.length; j++) {
        if (currNum === arr[j]) {
          continue;
        } else if (currSum === null) {
          currSum = arr[j];
        } else {
          currSum *= arr[j];
        }
      }
      finalArr.push(currSum);
      currNum = null;
      currSum = null;
    }
    console.log(finalArr);
  }

  products([1, 3, 9, 4]);

  // 12)
  // O(n)

  function findRotation(str1, str2) {
    let str = str1;
    const strObj = {};

    for (let i = 0; i < str1.length; i++) {
      const first = str[0];
      const last = str.slice(1);
      let combined = last + first;
      strObj[combined] = 1;
      str = combined;
    }

    console.log(strObj);

    if (strObj[str2]) {
      return true;
    } else {
      return false;
    }
  }
  console.log(findRotation('amazon', 'azonma'));
  console.log(findRotation('amazon', 'azonam'));
}
 
main();