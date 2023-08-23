
//****  Array Problems   ****//
//********************************************** *//
//* Prime Number

// const arr = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,139];
// const isPrime = (num) =>{
//   for(let i=2;num>i;i++){
//     if(num%i === 0){
//         return false;
//     }
//   }
//   return num>-1;
// }
// const result = arr.filter(isPrime)
// console.log(result);


//***************************************************** *//
//* filter the array which has non zeros values
// const arr = [
//   {id:14},
//   {id:-15},
//   {id:11},
//   {id:17},
//   {id:0},
//   {},
//   {id:null},
//   {id:undefined},
//   {id:NaN}
// ]

// let invalidEntries = 0;
// const filterById = (item)=>{
//     if(Number.isFinite(item.id) && item.id !==0){
//         return true;
//     }
//     invalidEntries++;
//     return false;
// }
// const arrById = arr.filter(filterById)
// console.log(arrById);



//********************************************************* *//

//***   filter array content based on search criteria
// const fruits = ["Apple","mangos","banana","graps","xyz"];

// const filterArray = (arr,query) =>{
//     return arr.filter((el)=> el.toLowerCase().includes(query.toLowerCase()))
// }

// console.log(filterArray(fruits,"ap"));

//*************************************************************** *//
// const board = [
//   ["R", "N", "B", "Q", "K", "B", "N", "R"],
//   ["P", "P", "P", "P", "P", "P", "P", "P"],
//   [" ", " ", " ", " ", " ", " ", " ", " "],
//   [" ", " ", " ", " ", " ", " ", " ", " "],
//   [" ", " ", " ", " ", " ", " ", " ", " "],
//   [" ", " ", " ", " ", " ", " ", " ", " "],
//   ["p", "p", "p", "p", "p", "p", "p", "p"],
//   ["r", "n", "b", "q", "k", "b", "n", "r"],
// ];

// console.log(`${board.join("\n")}\n\n`);


// Move King's Pawn forward 2
// board[4][4] = board[6][4];
// board[6][4] = " ";
// console.log(board.join("\n"));

//************************************************************ *//

// const value = [];
// for(let i=0;i<10;i++){
//   value.push([2**i,2*i**2])
// }
// console.table(value)
//************************************************************************************* *//

//* calculate max profit from stock
//* M-1
// const calculateMaxProfit = (prices) => {
//   let minPrice = Number.MIN_SAFE_INTEGER;
//   // let minPrice = Number.MAX_VALUE;
//   let maxProfit = 0;

//   for (let price of prices) {
//       if (price < minPrice) {
//           minPrice = price;
//       } else if (price - minPrice > maxProfit) {
//           maxProfit = price - minPrice;
//       }
//   }
//   // return maxProfit;
//   console.log(maxProfit);
// }
// calculateMaxProfit([11,13,14,56,99,134,4])

//* M-2
// const foundMaxProfit = (pricess) =>{
//   let max = 0;
//   for(let i=0;i<pricess.length-1;i++){
//     for(let j=i+1;i<pricess.length;j++){
//       const profit = pricess[j] - pricess[i]
//       console.log(profit);
//       if(profit > max){
//          max = profit
//       }
//     }
//   }
//   // return max;
//   console.log(max);
// }
// foundMaxProfit([56,45,67,89,22,345])



//*********************************** *//
//* Amazon interview question

// function chunk(array, size) {
//   // Declare an array to hold the chunked array
//   const chunked = [];

//   // Iterate over each element of the unchunked array
//   for (let element of array) {

//     // Find the last element of the chunked array
//     const lastElement = chunked[chunked.length - 1];

//     // if lastElement does not exist or its size is equal to chunk size, push a new chunk and the element to chunked array
//     if (!lastElement || lastElement.length === size) {
//       chunked.push([element]);
//     } else {
//       // Else push the element to the current chunk
//       lastElement.push(element);
//     }
//   }
//   return chunked;
// }

//* M-2
// function chunk(array, size) {
//   const chunked = [];
//   let index = 0;

//   while (index < array.length) {
//     chunked.push(array.slice(index, index + size));
//     index += size;
//   }

//   return chunked;
// }
// const res = chunk([1, 2, 3, 4], 2) 
// console.log(res);


//************************************************************ *//
//* Amazon : duplicate an array

// function duplicateArr(arr,n){
//   let duplicate = [];
//   let index = 0;
//   while(index<n){
//     duplicate = duplicate.concat(arr)
//     index++
//   }
//   return duplicate;
// }
// const res = duplicateArr([1,2,3,4,5],3);
// console.log(res);


//*************************************************** *//
//*Q // Find the intersection of two arrays.
// An intersection would be the common elements that exists within both arrays.
// In this case, these elements should be unique!
// var firstArray = [2, 2, 4, 1];
// var secondArray = [1, 2, 0, 2];

// intersection(firstArray, secondArray); // [2, 1]


//* M-1
// const intersection = (array1, array2) => {
//   const intersectionArray = [];
//   array1.filter(element => {
//       if (array2.includes(element)) {
//           intersectionArray.push(element);
//           array1.splice(array1.indexOf(element), 1);
//       }
//   });
//   return intersectionArray;
// }
// const res = intersection([1,2,3,4,5],[2,3,4])
// console.log(res);


//* M-2

// const intersectionArr = (array1,array2) =>{
//   const arrayMap = {}
//   const intersection = []

//   array1.forEach(element => {
//     arrayMap[element] = 1;
//   });

//   array2.forEach(element =>{
//     if(arrayMap[element]){
//       intersection.push(element);
//       arrayMap[element]++
//     }
//   })
//   return intersection;
// }
// const res = intersectionArr([2,2,5,1],[2,2,5,6]);
// console.log(res);


//**************************************************** *//
//* Q: Maximum difference between two elements such that larger element 
//* appears after the smaller number 

//* M-1
// const max_value_res = (num) =>{
//     let max_diff = num[1] - num[0]
//     for(let i=0;i<num.length;i++){
//       for(let j=i+1;j<num.length;j++){
//         if(num[j] - num[i]>max_diff){
//             max_diff = num[j] - num[i]
//         }
//       }
//     }
//     return max_diff;
// }


//* M-2
// function findLargestDifference(arr) {
//   if (arr.length <= 1) {
//     return -1;
//   }

//   let currentMin = arr[0];
//   let currentMaxDifference = 0;
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > currentMin && (arr[i] - currentMin > currentMaxDifference)) {
//       currentMaxDifference = arr[i] - currentMin;
//     } else if (arr[i] <= currentMin) {
//       currentMin = arr[i];
//     }
//   }

//   return currentMaxDifference <= 0 ? -1 : currentMaxDifference;
// }
// const res = findLargestDifference([1,2,99,11,56]);
// console.log(res);


//************************************************************* *//

//* Q: // Write a program to find the majority element in the array.
// A majority element in an array A[] of size n is an element that appears more than n/2 times
// (and hence there is at most one such element).
// If input array doesn't contain a majority element, then output "NO Majority Element"


// function findMajorityElement(n, arr) {
//   const majorityCount = n / 2;
//   const arrayMap = {};

//   for (let element of arr) {
//     arrayMap[element] = arrayMap[element] + 1 || 1;
//   }

//   for (let element in arrayMap) {
//     if (arrayMap[element] > majorityCount) {
//       return element;
//     }
//   }

//   return "No majority element";
// }
// const res = findMajorityElement([3, 3, 4, 2, 4, 4, 2, 4, 4])
// console.log(res);
// let arr = [ 1, 1, 2, 1, 3, 5, 1 ]; 
// let n = arr.length; 
  
// // Function calling 
// const res = findMajorityElement(arr, n);
// console.log(res);


//************************************************************* *//
//* Q: // Given an array containing both negative and positive integers.
// Find the contiguous sub-array with maximum sum.

//* M-1
// const findMaxSum = (arr) =>{
//   let globalMaxSum = arr[0];
//   let currentMaxSum = arr[0];

//   for(let i=1;i<arr.length;i++){
//     currentMaxSum = Math.max(arr[i],currentMaxSum + arr[i])
//     globalMaxSum = Math.max(globalMaxSum,currentMaxSum)
//   }
//   return globalMaxSum;
// }
// const res = findMaxSum([1,2,3,4,5])
// console.log(res);


//* M-2

// const test = (arr) =>{
//   let initailValue = 0
//   const test2 = arr.reduce((acc,curr)=> acc+curr,initailValue
//   )
//   // console.log(test2);
//   return test2
// }
// const res1 = test([1,2,3]);
// console.log(res1);

//*
// 
// const test3 = (arr) =>{
//   // const arr = [1, 2, 3, 4];
//   const initialValue = 0;
//   const sumWithInitial = arr.reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//     initialValue
//   );
//     console.log(sumWithInitial);
// }
// console.log(test3([1, 2, 3, 4]));
// console.log(sumWithInitial);


//************************************************************** *//
//* Q - Given an array of size n-1 and given that there are numbers from 1 to n with one missing,
// the missing number is to be found.

// function findMissingElement(n, arr) {
//   const sum = n * (n + 1) / 2;
//   let initialValue = 0;
//   const arraySum = arr.reduce((accumulator, element) => accumulator + element, initialValue);

//   if (sum - arraySum) {
//     return sum - arraySum;
//   } else {
//     return "No missing element";
//   }
// }
// console.log(findMissingElement(10,[1, 2, 3 ,4, 5, 6, 7 ,8 ,10]))
// const res = findMissingElement([1,2,4,5,6]);
// console.log(res);


//**************************************************************** *//
/**  Q :
 * Given an array of strings, group anagrams together.
Example:
Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:
All inputs will be in lowercase.
The order of your output does not matter.
 */

//* Solution
// const checkAnagram = (str1,str2) =>{
//     if(str1.length !== str2.length){
//       return false;
//     }
//     let s1 = str1.split('').sort().join('');
//     let s2 = str2.split('').sort().join('');

//     return s1 === s2;
// }
// console.log(checkAnagram("madam","madam"))


//************************************************************ *//
//* Q - Remove duplicate in the array
//* M-1
// const removeDuplicate = (arr) =>{
//     for(let i=0;i<arr.length-1;i++){
//       if(arr[i] === arr[i+1]){
//         arr.splice(i+1,1)
//         i--
//       }
//     }
//     return arr
// }
// const res = removeDuplicate([1,1,2,3,3,4,4,5]);
// console.log(res);

//**************************************************************** *//

//* Q - Given array , find the subArray of with the largest sum
//* and it's return sum

function maxsubArray (nums){
    let maxSum = nums[0];
    let startIdx = 0;
    let endIdx = 0;

    for(let i=0;i<nums.length;i++){
      let currentSum = 0;
      for(let j=i;j<nums.length;j++){
        // console.log(nums[j]);
         currentSum = currentSum+nums[j]
        if(currentSum>maxSum){
            maxSum = currentSum;
            startIdx = i;
            endIdx = j;
        }
      }
    }
    return {
      sum:maxSum,
    subArray : nums.slice(startIdx,endIdx+1)
    }
}
const res = maxsubArray([1])
console.log(res)











