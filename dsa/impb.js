
//* Q-1 Check Pallindrom

// function checkPallindrom(x){
//   // if(x<0) return false;
//   return x<0 ? false :(x === +x.toString().split('').reverse().join(''));
// }
// const res1 = checkPallindrom(101)
// console.log(res1);

//****************************************************************************** *//

//* Q-2 Fibonacci Number
//* M-1
// const fibbo = (num) =>{
//   let n1=0, n2=1,nextTerm;
//   for (let i = 1; i <= num; i++) {
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }
// }
// const res = fibbo(5);
// console.log(res)

//****************** *//

//* M-2
// const fibb = (num)=>{
//   const arr = [0,1];
//   for (let i = 2; i <=num; i++) {
//      arr.push(arr[i-1] + arr[i-2])
//   }
//   return arr[n];
// }
// const res = fibb(5)
// console.log(res)

//*************************************************************************** *//
//* Q- Anagram
//* M-1

// const checkAnagram = (str1,str2) =>{
//   if(str1.length !== str2.length){
//     return false
//   }
//   let v1 = str1.split('').sort().join('')
//   let v2 = str2.split('').sort().join('')
//   console.log("v1:",v1)
//   console.log("v2:",v2)
//   return v1===v2
// }
// const res = checkAnagram("anagram","nagaram")
// console.log(res)

//* M-2

// const checkAnagram = (s,t) =>{
//     if(s.length !== t.length) return false;
//     let obj1 = {};
//     let obj2 = {};

//     for(let i=0;i<s.length;i++){
//       obj1[s[i]] = (obj1[s[i]] || 0)+1;
//       obj2[t[i]] = (obj2[t[i]] || 0)+1;
//       console.log(obj1);
//       console.log("****************************");
//       console.log(obj2);
//     }
//     for (const key in obj1) {
//       if(obj1[key] !== obj2[key]) return false
//     }
//     return true;
    
// }
// const res = checkAnagram("anagram","nagaram");
// console.log(res);


//************************************************** *//
//* Q- Sum of two number with target
// const sumOfTwo = (num,target)=>{
//     for(let i=0;i<num.length;i++){
//       for(let j=i+1;j<num.length;j++){
//         if(num[i]+num[j] === target){
//             return [i,j]
//         }
//       }
//     }
// }
// console.log(sumOfTwo([1,2,3,4],7));


//****************************************************** *//

// const maxProfit = (prices) =>{
//   let globalProfit = 0;
//   for(let i=0;i<prices.length;i++){
//     for(let j=i+1;j<prices.length;j++){
//       let currentProfit = prices[j] - prices[i];

//       if(currentProfit>globalProfit) globalProfit = currentProfit
//     }
//   }
//   return globalProfit
// }
// console.log(maxProfit([7,1,5,3,6,4]));


//************************************************ *//
//* Greedy Algorithems
// const maxPro = (prices) =>{
//   let minstockPurchasePrice = prices[0] || 0
//   let profit = 0;
//   for(let i=1;i<prices.length;i++){
//       if(prices[i<minstockPurchasePrice]){
//           minstockPurchasePrice = prices[i]
//       }
//       profit = Math.max(profit,prices[i] - minstockPurchasePrice)
//   }
//   return profit;
// }
// console.log(maxPro([7,1,5,3,6,4]))


//*************************************************** *//
//* Q : Remove duplicates of an array and return an array of only unique elements

// const uniqueArray = (array) =>{
//   let hashmap = {};
//   let unique = [];
//   for (let i = 0; i < array.length; i++) {
//     if(!hashmap.hasOwnProperty(array[i])){
//       hashmap[array[i]] = 1;
//       unique.push(array[i])
//     }
//   }
//   return unique;
// }
// console.log(uniqueArray([1, 2, 3, 5, 1, 5, 9, 1, 2, 8]));


//************************************************************** *//
//* Big O Notation

// const funnyNum = (arr) =>{
  //* M-1
  // for(let i=4;i<arr.length;i++){
  //   if(i===3) return arr[i]
  // }

  //* M-2
  // for(let i=0;i<arr.length;i++){
  //   if(i==3) return arr[i];
  // }

  //* M-3
  // return arr[4]

// }
// const res = funnyNum([11,12,14,15,16])
// console.log(res);


//**************************************************** *//
// function test(arr){
//     for(let i=0;i<arr.length;i++){
//       for(let j=0;j<arr.length;j++){
//         console.log(i,j);
//       }
//     }
// }
// const res = test([11,12,14,15,16,17])
// console.log(res);


//**************************************************** *//

// function test(n){
//   for(let i=0;i<n;i++){
//     console.log(i);
//     for(let j=0;j<n;j++){
//       // console.log(i,j);
//     }
//   }
// }
// const res = test(2);
// console.log(res);


//**************  sum of value  *****************//
// const addvalue = (arr) =>{
//     let sum = 0;
//     for(let i=0;i<arr.length;i++){
//       sum = sum+arr[i]
//     }
//     return sum;
// }
// const res = addvalue([11,12,14,15]);
// console.log(res);


//************************************** *//

// function test (arr){
//   let i=0;
//   while(i<arr.length){
//     console.log(arr[i]);
//     i++
//   }
// }
// const res = test([11,12,14,15,16]);
// console.log(res);



