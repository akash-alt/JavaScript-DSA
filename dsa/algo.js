
//*****  Fibonacci *****//

//* M-1
// function sum(num) {
//   let n1 = 0, n2 = 1, nextTerm;
//   for (let i = 1; i <= num; i++) {
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm
//   }
// }
// console.log(sum(9));

//* M-2

// function fibonacci(num){
//   let fibb = [0,1]
//   for(let i=2;i<num;i++){
//     fibb[i] = fibb[i-1] + fibb[i-2]
//   }
//   return fibb
// }
// console.log(fibonacci(8));


//*************  Factorial of a number     ************//

// function factorial(num){
//   if(num <=0){
//     return 
//   }
//     let result = 1;
//     for(let i=2;i<=num;i++){
//        result = result * i
//     }
//     return result
// }
// console.log(factorial(4));



//******************** Prime Number  ***********************//

// function primeNum (num){
//   if(num <2){
//     return false
//   }
//     if(num %2 === 0){
//       return false
//     }else{
//       return true
//     }
// } 
// console.log(primeNum(5));


//* M-2
// function primeNum(num){
//   if(num<0){
//     return false
//   }
//   for(let i=2;i<= Math.sqrt(num);i++){
//     if(num%i === 0){
//       return false
//     }
//     return false
//   }
// }
// primeNum(5)


//********************  Power of Tow  ************************//

// function power(x){
//   return function(y){
//     return x**y
//   }
// }
// console.log(power(4)(2));


//***************** M-2  ******************//

// function isPower(n){
//   if(n<1){
//     return false
//   }
//   while(n>1){
//     if(n%2 !== 0){
//       return false
//     }
//       n = n/2
//   } 
//   return true
// }
// console.log(isPower(4));



//*************  Recursive Fibonacci ***********//

// function isFib(n){
//   if(n<2){
//     return n;
//   }
//   return isFib(n-1)+ isFib(n-2)
// }
// console.log(isFib(5));


//***************  Recursive factorial  *******************//

// function factorial(n) {
//   if (n === 0) {
//     return 1
//   }
//   return n*factorial(n-1)
// }
// console.log(factorial(4));


//*********************  Linear Search  *************************//

// function linearSearch(arr,target){
//       for(let i=0;i<arr.length;i++){
//         if(arr[i] === target){
//           return i
//         }
//       }
//       return -1
// }
// console.log(linearSearch([11,12,19,15],19));


//********************* Binary Search  ***********************//
//* arr = [11,12,4,5,9,2,19,22]
// function binarySearch(arr,target){
//     let leftIndex = 0;
//     let rightIndex = arr.length-1;

//     while (leftIndex <= rightIndex) {
//       let middleIndex = Math.floor((leftIndex + rightIndex)/2)
//       if(target === arr[middleIndex]){
//         return middleIndex
//       }

//       if(target < arr[middleIndex]){
//         rightIndex = middleIndex-1
//       }else{
//         leftIndex  = middleIndex+1
//       }
//     }
//     return -1
// }
// console.log(binarySearch([11,12,4,5,9,2,19,22],19));
//* time complexity: Big-O = O(log n)


//************  Recursive Search ****************//

// function recursiveSearch(arr,target){

//   for(let i=0;i<arr.length;i++){
//     if(target === arr[i]){
//       return  i
//     }
//   }
//   return -1
// }
// console.log(recursiveSearch([11,12,13,141,5,9],5));


// function recursiveSearch(arr, target) {
//   return search(arr, target, 0, arr.length - 1)
// }
// function search(arr, target, leftIndex, rightIndex) {
//   if (leftIndex > rightIndex) {
//     return -1
//   }

//   let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
//   if (target === arr[middleIndex]) {
//     return middleIndex
//   }

//   if (target < arr[middleIndex]) {
//     return search(arr, target, leftIndex, middleIndex - 1);
//   } else {
//     return search(arr, target, middleIndex + 1, rightIndex); // Fix: Update the right index correctly
//   }
// }

// console.log(recursiveSearch([11, 12, 13, 14, 15, 9], 9));


// function recursiveSearch(arr, target) {
//   return search(arr, target, 0, arr.length - 1);
// }

// function search(arr, target, leftIndex, rightIndex) {
//   if (leftIndex > rightIndex) {
//     return -1;
//   }

//   let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
//   if (target === arr[middleIndex]) {
//     return middleIndex;
//   }

//   if (target < arr[middleIndex]) {
//     return search(arr, target, leftIndex, middleIndex - 1);
//   } else {
//     return search(arr, target, middleIndex + 1, rightIndex); // Fix: Update the right index correctly
//   }
// }

// console.log(recursiveSearch([11, 12, 13, 14, 15, 9], 9));



//***************************** Bubble Sort  *********************************//
//* M-1
// function bubSort(arr){
//   return  arr.sort((a,b)=>{
//       return a-b
//     })
// }
// console.log(bubSort([11,15,9,4,0,1]));


//*************************** M-2  * Bubble Sort  *************************//

// function bubSort(arr) {
//   let swapped
//   do {
//     swapped = false;
//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         let temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//         swapped = true
//       }
//     }
//   } while (swapped)
// }
// const arr = [8,20,-2,-4,7];
// bubSort(arr)
// console.log(arr);
//* nested so it means : O(n^2) time complexity
//* 2 loops has used 1) do while loop 2) for loop


//********************** Insertion Sort  ************************** *//
 
// function insertionSort(arr){
//   for(let i=1;i<arr.length;i++){
//       let numberToInsert = arr[i];
//       let j = i-1;
//       while( j>=0 && arr[j] > numberToInsert ){
//           arr[j+1] = arr[j]
//           j = j-1
//       }
//       arr[j+1] = numberToInsert
//   }
//   return arr
// }
// const arr = [11,13,19,12,99,0,4];
// const res = insertionSort(arr)
// console.log(res);


//************************  Quick Sort   ************************** *//
//* Sorting by ascending order
// function quickSort(arr){
//    if(arr.length < 2){
//     return arr
//    }
//    let pivot = arr[arr.length-1];
//    let left = [];
//    let right = [];

//    for(let i=0;i<arr.length-1;i++){
//       if(arr[i] < pivot){
//         left.push(arr[i])
//       }
//       else{
//         right.push(arr[i])
//       }
//    }
//       return [...quickSort(left), pivot ,...quickSort(right)]
// }
// console.log(quickSort([11,1,9,7,99]));

//* Sorting in descending order


// function quickSort(arr){
//   if(arr.length<2){
//     return arr
//   }
//   let pivot = arr[arr.length-1];
//   let left = [];
//   let right = [];

//   for(let i=arr.length-2;i>=0;i--){
//     if(arr[i]>pivot){
//       left.push(arr[i])
//     }else{
//       right.push(arr[i])
//     }
//   }
//   return [...quickSort(left),pivot,...quickSort(right)]
// }

// console.log(quickSort([11,1,9,7,99]))



//********************* Cartesian Product  ************************* *//

function CartesianPro(arr1,arr2){
    
  let result = []
  for(let i=0;i<arr1.length;i++){
    for(let j=0;j<arr2.length;j++){
      result.push([arr1[i],arr2[j]])
    }
  }
  return result;
}
console.log(CartesianPro([1,2],[3,4,5,6]));




