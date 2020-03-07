//Big O Notation - measures worst-case scenario

//worst-case = upper bound (max # of operations performed by an algorithm)

//O(1) - constant complexity with fast rate of growth
//O(log n) - logarithmic complexity
//O(n) - linear time complexity
//O(n*log n) - log linear	complexity
//O(n2)	- quadratic complexity
//O(n3)	- cubic complexity
//O(2n)	- exponential complexity
//O(n!)	-	factorial complexity with slow rate of growth

//O is short for 'Order of'
//Said like: O(n) = Order of or rate of growth is 'n' or linear complexity

//O(1) - Constant Time - Examples

//below performs only one operation regardless of the size of the number
const isNumberEven = num => num % 2 === 0;

//below performs only one operation to return the name
const data = ["Bill", "Mary"];
const getName = data => data[0];

//below performs only one operation to return the value
const gradeTest = score => {
  if (score < 60) {
    return "Fail!";
  } else if (score > 80) {
    return "Pass!";
  } else {
    return "Failed to take the test";
  }
};
//with the above we know the "upper bound - worse-case" scenario in advance
//and know that it will not change

//linear complexity

const pets = ["dog", "cat", "mouse", "rabbit", "bird"];

const petFinder = userInput => {
  for (let i = 0; i < pets.length; i++) {
    let petFound = false;
    if (pets[i] === userInput) {
      petFound = true;
    }
    return petFound;
  }
};
petFinder("dog");
//the above function yeilds O(1) when the userInput is 'dog' as the value is the first in the array - returns upon first operation
//but...
petFinder("bird");
//when the userInput is 'bird' as the value there are 5 operations that need to take place
//what is the above array of pets contained 100 different pets? 1000?
//linear complexity is find for small inputs but becomes a consideration when the size of the input increases

//Conditional Statements
const getLowerCase = arr => {
  if (arr.length === 0) {
    return "Nothing to be done";
  } else {
    console.log(arr.map(i => i.toLowerCase()));
    return arr.map(i => i.toLowerCase());
  }
};
getLowerCase(["OPEN", "UP"]);
//in the above function - if the condition is met - one operation is performed so O(1)
//if the condition is not met - we perform a map on an array of unknown length so O(n)
//so this function is O(1) or O(n)
//Order is: O(1) + O(n) = you drop the constant 1 and are left with O(n) as the worst-case

const forwardBack = num => {
  for (let i = 0; i <= num; i += 1) {
    console.log(i);
  }

  for (let i = num; i >= 0; i -= 1) {
    console.log(i);
  }
};
forwardBack(10);
//Order is O(n) : as O(n) + O(n) = O(2n) - 2 is a constant so we drop it and are left with O(n)
//does O(n) scale: it can be done better and worse

//https://www.bigocheatsheet.com/

//sum integers 1 to n

//O(n) - written as
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumNumbersBad = arr => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
  return sum;
};
sumNumbersBad(numbers);

//O(1) - written as
const sumNumbersGood = arr => {
  console.log((arr.length * (arr.length + 1)) / 2);
  return (arr.length * (arr.length + 1)) / 2;
};
sumNumbersGood(numbers);

//O(n^2) or O(n*n)
const names = ["Mary", "Frank", "Meghan", "Mary", "Jim"];
const findDuplicate = array => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        console.log(`Match found at ${i} and ${j}`);
        return `Match found at ${i} and ${j}`;
      }
    }
  }
  return "No matches found 😞";
};
findDuplicate(names);
//so the above is n*(n-1)/2 or (n*n )/2 - drop constants and get O(n^2)

//when passing 2 arrays this now becomes O(n*m) = multilenear
const names1 = ["Meghan", "Mike", "Brenda"];
const names2 = ["Heather", "Meghan", "Cory"];
const findDuplicate2arrays = (array1, array2) => {
  for (let i = 0; i < array1.length; i++) {
    for (let j = i + 1; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        console.log(`Match found at arr1[${i}] and arr2[${j}]`);
        return `Match found at arr1[${i}] and arr2[${j}]`;
      }
    }
  }
  return "No matches found 😞";
};
findDuplicate2arrays(names1, names2);

//classic O(n^2) example is Bubble Sort
//nested iterations
const bubbleSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
};

//does O(n^2) scale : it could be better or worse

//O(log n) : Binary Search
//can it scale : difinitely!

const powers = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512];

const binarySearch = (arr, num) => {
  let startIndex = 0;
  let endIndex = arr.length - 1;

  while (startIndex <= endIndex) {
    let pivot = Math.floor((startIndex + endIndex) / 2);

    if (arr[pivot] === num) {
      return `Found ${num} at ${pivot}`;
    } else if (arr[pivot] < num) {
      startIndex = pivot + 1;
    } else {
      endIndex = pivot - 1;
    }
  }
  return false;
};

//O(n log n) - Merge Sort
const nums = [128, 0, 64, 16, 4, 8, 2];

const merge = (left, right) => {
  let result = [];

  while (left.length || right.length) {
    if (left.length && right.length) {
      if (left[0] < right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    } else if (left.length) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return result;
};

const mergeSort = arr => {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr.length / 2;
  const left = arr.slice(0, pivot);
  const right = arr.slice(pivot, arr.length);

  return merge(mergeSort(left), mergeSort(right));
};

console.log(mergeSort(nums));
//O(log n) + O(log n) =  O(n log n)
//does O(n log n) scale? Yes
//can it be better? Maybe, it depends as not all sorting algorithms are created equal
