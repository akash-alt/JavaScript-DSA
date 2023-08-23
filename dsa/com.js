
//* here it will be multiply (n*n*n)
// function test(n) {
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       for (let k = 0; k < n; k++) {
//         console.log(i, j, k);
//       }
//     }
//   }
// }
// console.log(test(10))

//* here it will be addition ( n + n)
// function test2(n) {
//   for (let i = 0; i < n; i++) {
//     console.log(i);
//   }

//   for (let j = 0; j < n; j++) {
//     console.log(j);
//   }
// }


//************************************************ *//

// class Cookie{
//   constructor(color,brand,model){
//     this.model = model
//     this.color = color
//     this.brand = brand 
//   }
// }
// let result = new Cookie("green","BMW","X5")
// console.log(result.model);


//********************************************** *//

// class Node{
//   constructor(value){
//     this.value = value
//     this.next = null
//   }
// }

// class LinkedNode{
//   constructor(value){
//     const newNode = new Node(value)
//     this.head = newNode
//     this.tail = this.head
//     this.length = 1
//   }

//   push(value){
//     const newNode = new Node(value)
//     if(!this.head){
//       this.head = newNode;
//       this.tail = this.head
//     }else{
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//     this.length++;
//     return this
//   }
// }

// function test(){
//   let myLinkedList = new LinkedNode(1);
//   myLinkedList.makeEmpty()
//   myLinkedList.push(1)
//   myLinkedList.push(2)

//   myLinkedList.getHead();
//   myLinkedList.getTail();
//   myLinkedList.getLength();
//   console.log("linklist:");
//   myLinkedList.printList()
// }
// test()


//**************************************************************** *//

// function test(){
//   console.log(a);
//   let b=10;    //* reference error
//   const c=9;  //* reference error
//   var a = 12; //* undefind

// }
// test()


//*************************************************************** *//

// function test(arr){
//   return arr.filter((item) => item>3)
// }
// console.log(test([1,2,4,15]))

// function test(arr){
//   return arr.reduce((acc,curr) =>{
//     return acc+ curr
//   },0)
// }
// console.log(test([11,12,14,15]));


// function addValue(num){
//   return num+num
// }
// function display(fn){
//   console.log("result",fn(5));
// }
// display(addValue)


//****************************************** *//
// (
//   function (x) {
//     return (
//       function (y) {
//         console.log(x);
//       }
//     )(3)
//   })(2)


//***************************************** *//

// function outer(){
//   var name = "akash"
//   function innerr(){
//     console.log(name)
//   }
//    innerr()
// }
// console.log(outer());


//**************************************************** *//

// var e = 10;

// function add(a){
//   return function (b){
//     return function(c){
//       return function(d){
//         return a+b+c+d+e
//       }
//     }
//   }
// }
// console.log(add(1)(2)(3)(4))


//************************************************** *//

// function curr(a){
//   return function (b){
//     return function (c){
//       return `${a} ${b} ${c}`
//     }
//   }
// }
// console.log(curr(2)(6)(1));


//************************************************* *//

// function evaluate(operation){
//   return function(a){
//     return function(b){
//         if(operation === "sum") return a+b
//         else if(operation === "multiply") return a*b
//         else if(operation === "divide") return a/b
//         else return "something went wrong"
//     }
//   }
// }
// console.log(evaluate("sum",(4)(3)));


//************************************************* *//

// const user = {
//   name :"akash",
//   role:"developer",
//   address:"Bangalore"
// }
// for(let i in user){
//   console.log(user[i]);
// }


//**************************************************** *//

// let nums = {
//   a:100,
//   b:200,
//   title:"My number"
// }
// multiplyByTwo(nums)
// function multiplyByTwo(obj){
//   for(key in obj){
//     if(typeof obj[key] === 'number'){
//       obj[key] = obj[key]*2
//     }
//   }
// }
// console.log(nums)


//****************************************************** *//

// let data ={
//   name:"akash",
//   role:"developer",
//   place:"Bangalore"
// }

// const res = JSON.stringify(data)
// JSON.parse()
// console.log(res);


//************************************************************ *//

// const user = {name:"akash",role:"developer"}
// const res = {admin:true,...user}
// console.log(res);


//*************************************************************** *//


// function f1(){
//   console.log("f1");
// }

// function f2(){
//   console.log("f2");
// }

// function f3(){
//   console.log("f3");
//   setTimeout(f2, 1000);
//   f1()

//   new Promise((resolve,reject) =>(
//     resolve("done")
//   ).then(resolve => console.log(resolve))
//   )
// }
// f3()


//************************** *//

// function next(n){
//   let count = n
//   return function(){
//     let newCount = count;
//     count++
//     return newCount
//   }
  
// }
// console.log(next(10))

//* M-2

//  function createCounter (n) {
//   let count = n;
// return function () {
//   const currentCount = count;
//   count++;
//   return currentCount;
// };
// }
// const counter = createCounter(10);
// console.log(counter)


//******************************************** *//
//* M-1
// const data = [11,1,4,16,99,34];
// const res = data.filter((word) => word > 6);
// console.log(res)

// //* M-2

// const filterArr = (arr,fn) =>{
//     let a = [];
//     for(let i=0;i<arr.length;i++){
//       a.push(fn(arr[i],i))
//     }
//     return a
// }
// const d = filterArr([1,2,33,4,5])



//************************************************************ *//

const arr = [11,12,141,5.9];
// const res = arr.splice(2,1,0)
// console.log(res);
// console.log(arr);
// const res = arr.sort((a,b) =>{
//   return b-a
// })
// console.log(arr);

//*

// function sum(arr1,arr2){
//   const res =  [...arr1,...arr2]
//   for(let i=0;i<res.length;i++){
//     res.sort((a,b)=>{
//       return a-b
//     })
//   }
//   return res
// }
// console.log(sum([1,2,3],[5,6,7]));


//********************************************** *//

function test(nums){
  nums.sort((a,b)=>{
    const order1 = a+b;
    const order2 = b+a;
    return order1.localCompare(order2)
  })

  if(nums[0] === 0) return 0;

  return nums.join()
}
console.log(test([11,12,14,15]));

