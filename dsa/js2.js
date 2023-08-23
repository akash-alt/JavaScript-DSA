// let age = 18;
// if(age>=18){
//   console.log("applicable");
// }
// else{
//   console.log("not applicable");
// }

//************************************ *//

// let age = 18;
// let state = "UP";

// if(age>=16){
//   if(state=="UP"){
//     console.log("you can drive!");
//   }
// }

//** *//

// if(age>=16 && state == "UP"){
//   console.log("you can drive!");
// }

// const obj = {
//   name:"akash",
//   role:"developer"
// }
// obj.name = "shreya"
// console.log(obj["name"]);
// console.log('name' in obj);


//**************************************************** *//

// let arr = ["akash","developer","sammy","june"];
// arr.unshift("100")
// console.log(arr);
// console.log(arr.length);

// arr.map((item)=>{
//   console.log(item);
// })


//******************************* *//

// const result = "value1";
// if(result === null || result===undefined){
//     result == "value2"
// }

//****************************** *//

// const age = undefined ?? 28 ;
// console.log(age);

//********************** *//

// let count;
// let result = count || 1;
// console.log(result);

//******************************* *//

// let age = 18;
// let role ;

// age >= 16?role='developer':role='tester' ;
// console.log(role);


//********************************************** *//

//* switch statement
// let day = 7;
// let dayname;

// switch (day) {
//   case 1:
//     dayname="sunday"
//     break;

//   case 2:
//     dayname="monday";
//     break;  
  
//   case 3:
//     dayname="tuesday";
//     break;
//   case 4:
//     dayname="wednesday";
//     break;
//   case 5:
//     dayname="thursday";
//     break;
//   case 6:
//     dayname="friday";
//     break;
  
//   case 7:
//     dayname="saturday";
//     break;

//   default:
//     break;
// }

// console.log(dayname);

//* while

// let count = 3;

// while (count<10) {
//   console.log(count);
//   count+=2;
// }

//*
// do{
//   console.log(count);
//   count+=1;
// }while(count<9)

//*************************************** *//

// let arr = [11,12,14,15,16,17]
// for(let i=0;i<arr.length;i++){
//   if(arr[i]%2 !== 0){
//     console.log(arr[i]);
//   }
// }

//*
// let j=0;
// for(;j<9;j+=2){
//   console.log(j);
// }

//*
// let sum =0;
// for(let i=0;i<=9;i++,sum+=i)
//   console.log(sum);

//*
// for(let i=0;i<=9;i++){
//   // console.log(i);
//   if(i==3){
//     break;
//   }
//   console.log(i);
// }

//*

// for(let i=0;i<=3;i++){
//   for(let j=0;j<=4;j++){
//     console.log(i,j);
//   }
// }

//********************************************* *//

// function func(x){
//   return function(){
//     // console.log(x-1);
//     return x-2;
//   }
//   ()
// }
// let res = func(5);
// console.log(res);


//*
// function func(a,b){
//   return a+b;
// }
// let res = func(2,6);
// console.log("res:",res);


//*
// function func(a,b){
//     if(a>b){
//       return -1;
//     }
//     else if(a<b){
//       return 1;
//     }
//     return 0;
// }
// let res = func(111,11);
// console.log("Result:",res);

//*

// function func(message){
//   if(message){
//     return;
//   }
//   console.log(message);
// }
// func("hello")


//* Sum
// function add(){
//   let sum=0;
//   for(let i=0;i<arguments.length;i++){
//     sum+=arguments[i]
//   }
//       return sum;
// }
// console.log(add(2,6));


//*

// show()
// function show(){
//   console.log("hello");
// }

//*

// (function(){
//   console.log("hello");
// }
// )()


//*
// function recursive(){
//   let age =18;
//   if(age>16){
//     console.log("active");
//   }
//   else{
//     recursive()
//   }
// }

//*

// const person = {
//   name:"akash",
//   role:"developer"
// }

//* M-1
// person.greet = function(){
//   console.log("hello");
// }
// person.greet()

//* M-2
// function greet(){
//   console.log("test");
// }
// person.greet = greet
// person.greet()

//*
// const obj = {
//   name:"akash",
//   role:"developer",
//   test:function(){
//     console.log("hello");
//   }
// }
// obj.test();
// console.log(obj.name);


//*
// const obj = {
//   name:"akash",
//   role:"developer",
//   greet(){
//     console.log("test es6 feature");
//   },
//   getfulldetails: function(){
//     return this.name +" "+ this.role
//   }
// }
// obj.greet()
// console.log(obj.getfulldetails())


//*
// function Person(firstname,lastname){
//     this.firsname = firstname,
//     this.lastname = lastname,
//     this.getfullname= function (){
//       return this.firsname+" "+this.lastname
//     }
// }
// let person = new Person("Akash","Yadav");
// console.log(person.firsname);
// console.log(person.getfullname());

//*
// function newName(fname,lname){
//     this.fname = fname,
//     this.lname = lname,

//     this.getfullname = function(){
//       return this.fname+" "+this.lname
//     }
// }
// const result = new newName("Khooshi","Yadav");
// console.log(result.getfullname());

//**************************************************** *//

// const data = {
//    name :"akash",
//   getname : function(){
//     return this.name
//   }
// }
// console.log(data.getname());

//********************************************* *//

// let obj = {};
// obj.name= "akash"
// delete obj.name;
// console.log(obj.name);


//* prototype *//
// function Person(name){
//     this.name = name;
// }
// Person.prototype.getname = function(){
//     return this.name
// }
// let res = new Person("akash")
// console.log(res.getname());


//* class

// let Person = class {
//   constructor(name){
//      this.name = name
//   }
//   getName() {
//     return this.name;
//   }
// }
// let person = new Person("Akash Yadav")
// console.log(person.getName());

//* HOC 
// function outerFunc(){
//   return function(){
//     return "hello"
//   }
// }
// let res = outerFunc()
// console.log(res());

//*

// function outerFunc1(fn){
//   fn()
// }
// outerFunc1(function(){console.log("hello2");})


//**************************************************** *//

// function saySomething(message){
//   return "hello,I'm"+this.name +" "+message
// }
// let res = {name:"akash"};
// console.log(saySomething.call(res,"nice to meet you"))
// console.log(saySomething.apply(res,["nice to meet you"]))


//*
// function curr(a){
//     return function(b){
//       return a+b;
//     }
// }
// console.log(curr(2)(3))


//* memoization
// function memoized(){
//   let cache = {}
//   return function(num){
//     if(num in cache){
//       return cache[num]
//     }else{
//       cache[num] = num+234
//       return cache[num]
//     }
//   }
// }
// let res = memoized();
// console.log(res(123));


//* constructor

// function construct(name,role,place){
//     this.name = name,
//     this.role = role,
//     this.place = place
// }
// let data = new construct("akash","developer","blr");
// console.log(data);

//* clouser

// let fname = "akash";
// function clous(){
//   let role = " developer";
//   console.log("I'm " + fname + role);
// }
// clous()


//*
// function outer(message){
//   return function(name){
//     return name + message
//   }
// }

// let mes = outer("hi");
// let mes1 = outer("hello")

// console.log(mes("akash"));
// console.log(mes1("akash"));



//***  Arrow function  ***//

// const arr = ["akash","sakhsi","shreya"]
// const res = () =>{

//     arr.map((item)=> console.log(item)
//       // return item.length
//     )
// }
// console.log(res())


//******************************************** *//

// function test(){
// var a = "akash2.0"
//   if(true){
//     let a = "test" // variable shadowing 
//     console.log(a);
//   }
//   console.log(a);
// }
// // console.log(a);
// test()


//************************************ *//

// let a ="value";
// {
//   let a="value2.0"
//   console.log(a);
// }


//******************************************** *//
//* JS has 2 phases... 1) Memory allocation   2) Exacution Phase


//* Hoisting 

// console.log(a);
// let a = "akash"


//****   TDZ : temporal dead zone is the time between  declaration and initialization of let and const variable  ***//
//* TDZ : is like they are in scope but yet not declared  **//

// function test(){
//   console.log(a,b,c);

//   const c = "23"
//   let b = 12;
//   var a = "test2.0"
// }
// test()


//************************************************************** *//

//* map,filter,reduce

// const arr = [2,3,4,5,6,7,8,9];
// function test(){

//   //* map
//   arr.map((item,i)=>{
//     console.log(item*2+i);
//   })

  //* filter
  // let res = arr.filter((item)=> item >2
  // )
  // console.log(res);

  //* reduce
  // let res = arr.reduce((accu,val) => accu + val )
  // console.log(res);
// }
// test()



//**************************** Function ************************ *//
//* first class function

// function test(num){
//   return num*num
// }
// function test2(fn){
//   console.log(fn(4));
// }
// test2(test)


//*  IIFE  **//

// (
//   function test(n){
//     console.log(n*n);
//   }
// )(6)


//*
// (
//   function test(x){
//       return (function(y){
//         console.log(x);
//       })(4)
//   }
// )(5)


//*

// function test(){
//   for(let i=0;i<5;i++){
//     setTimeout(() => {
//       console.log(i);
//     }, i*1000);
//   }
// }
// test()

//************************************************ *//

//* function are globle scope
// test()
// function test(){
//   console.log(a);
//   var a = "akash"
//   console.log("hello!");
// }

//******************************************** *//


// var a = 21;
// var fun = function(){
//   console.log(a);
//   var a = 23
// }
// fun()

//******************************************* *//

//* spread operator
// function multiple(a,b){
//   console.log(a*b)
// }
// var arr = [2,4];
// multiple(...arr);

//************************************************* *//

//* rest operator will come to as parameter
//* spread operator will come to as arguments
// function test(a,b,c,...d){
//   console.log(a,b,c,d);
// }
// let arr = [1,2,3,4,5,6,7,8];
// test(...arr)

//*********************************************** *//
//* clouser

// function outer(){
//   let name = "akash";

//   function inner(role){
//     console.log(name,role);
//   }
//   return inner
// }
// outer()("developer")

//*

// let e = 1;
// function sum(a){
//   return function (b){
//     return function(c){
//       return function(d){
//         return a+b+c+d+e
//       }
//     }
//   }
// }
// console.log(sum(2)(3)(4)(5));


//***************************************** *//

// function f(a){
//   return function(b){
//     return function(c){
//       return a+b+c;
//     }
   
//   }
// }
// console.log(f(5)(6)(1));

//******************************************** *//
//* Object

// function obj(a){
//   return a
// }
// console.log(obj(4))


//*********************************************** *//

// const obj = {
//   name:"akash",
//   role:"developer"
// }
// console.log(obj.name);

// const user = {name:"akash",role:"developer"}
// const admin = {admin:"true",...user}
// console.log(admin);


//************************************************* *//

// this.a = 5;
// function test(){
//   console.log(this.a);
// }
// console.log(test());


//************************************************ *//
//* call
// let obj = {name:"akash"};
// function sayHello(age){
//   return this.name+" "+age
// }
// console.log(sayHello.call(obj,24));


//************************************************ *//
//* apply
// let arr = [1,2,3,44,45];
// let elements = [12,14,16];
// arr.push.apply(arr,elements)
// console.log(arr);


//************************************************** *//

// const arr = [11,12,14,15,16,99];
// const res = Math.max(...arr)
// const res1 = Math.min(...arr)
// console.log(res);
// console.log(res1);

//******************************************** *//

//*********************************** *//
//*
// function outer(){
//   let name = "akash"
//     function inner(){
//     console.log(name);
//   }
//   return inner()
// }
// const res = outer()
// console.log(res);


//************************************************* *//

// function test(a){
//   return function(b){
//       console.log(a+b);
//   }
// }
// const res = test(1);
// const res1= test(2)
// console.log(res(5));

//*

// function sum(a){
//   return function(b){
//       return function(c){
//         return a+b+c;
//       }
//   }
// }
// console.log(sum(1)(3)(4));

//*


// const arr = [1,2,34,5,67];
// function test(){
//   // const initailValue = 0;
//   const res = arr.reduce((accu,curr)=> accu+curr);
//   console.log(res);
// }
// test()

//*

// let a = null;
// let b ;
// console.log(typeof a);
// console.log(typeof b);

//* multiline string
// let data = `this is multiline
//                 string for writing the 
//                   content `

// console.log(data);

//* default parameter
// function para(a=2,b=5){
//     console.log(a+b);
// }
// para()

//* destructuring
// const arr = [1,11,141,5,16];
// const [a,b] = arr;
// console.log(a);


//* Enhanced Object Literals

// function test(a,b,c){
//   return a,b,c;
// }
// test()

//* Promises 

// const res = new Promise((resolve,reject)=>{
//   resolve()
// }).then(()=>{
//   console.log();
// })


//* classes

// class userData{
//   constructor(fname,lname,role){
//       this.fname = fname;
//       this.lname = lname;
//       this.role = role
//   }

//   getfullName(){
//     console.log(`I'm ${fname} ${lname}`);
//   }
// }

// let obj = new userData("Akash","Yadav","developer");
// console.log(obj);


//***************************************************** *//

// let a = [1,2,3,4];
// let b = [5,6,7,8];

// console.log(...b,...a);

// function test(a,b,...c){
//     return a,b,c
// }
// console.log(test(1,2,3,3,4,5,6,6))

//***************************************************** */

// useEffect(()=>{
//   return(()=>{
//     // unmounting something 
//   })
// },[update])


//*************************************************** *//


// function test1(){
//   console.log("this is 1st function");
// }
// function test2(){
//   test1()
// }
// function test3(){
//   test2()
// }
// test3()


//****************************** *//

// const promise = new Promise((resolve,reject)=>{
//   resolve("this is resolve !!")
// }).then((res)=>console.log(res))
// .catch((err)=> console.log(err))


//****************************************************************************** *//
//****  Array Practice


// const  arrData = [1,14,10,54,65,56,67,78,89]
// M-1
// function filterData(a,b){
//     return a.filter((item)=> item>2)
// }
// console.log(filterData(arrData));

//* M-2
// const res = arrData.filter((a,b)=>{
//     if(a>2){
//       return true;
//     }
// })
// console.log(res);

//*

// const fruits = ["Apple","mangos","banana","graps","xyz"];
// const filterArray = (arr,query) =>{
//     return arr.filter((el)=> el.toLowerCase().includes(query.toLowerCase()))
// }
// console.log(filterArray(fruits,"ap"));


//************************************************ *//


// const canJump = (nums)=>{

//   let lastPos = nums.length -1 ;
//   for(let i = nums.length-1 ;i >=0;i--){
//     if(i = nums[i] >= lastPos ){
//       lastPos = i;
//     }
//   }
// }
// const res = canJump([11,12,13,14,15,16]);
// console.log(res);



//**************************************************************** *//
//* convert an object to Array
//* there are total 3 methods
//* 1) Object.keys()
//* 2) Object.value()
//* 3) Object.entries()

// const person = {
//   fname:"Akash",
//   lname:"Yadav",
//   role:"developer"
// }

// const res = Object.keys(person);
// const res = Object.values(person);
// const res = Object.entries(person);
// console.log(res);


//****************************************************************** *//

// function test(){
//   console.log("test")
// }
// function test1(){
//   console.log("test1")
//   test()
// }
// function main(){
//   test1()
//   setTimeout(test,0)
//   console.log("test2")
// }
// main()


//****************************************************** *//

// const promise = new Promise((reject,resolve)=>{
//     resolve("this is value!!")
// })


//***************************************** *//
//************************************** Default parameter ****************************//

//* In default parameter when we do not ppass the value and 
//* we have already make a condition to check the value is passed or not
//* if value not passed then it will take default value (|| = or) value will take automatically


//* Q-1
// const res = (a,b) =>{
//     b=b || 1; //* this is imp
//   return a+b;
// }
// console.log(res(11))

//* Q : this is the method for the geting the values

// function callApi(url,method = "GET"){
//   console.log("url:"+ url);
//   console.log("method:"+ method);
// }
// callApi("google.com","POST")


//**************************************************** *//
//**** Destructuring ****//

// let a,b,rest;

// [a,b] = [11,12];
// console.log(a);
// console.log(b);

// [a,b,...rest] = [114,15,16,17,18,19,20,21,22]
// console.log(rest)

//***************************************** *//

// const employee = {
//   id:1,
//   age: 24,
//   name : "akash",
//   role:"developer",
//   address:{
//     city:"Bangalore",
//     country:"India"
//   }
// }

// let name = employee.name;
// let age = employee.age;

// const{address:{city}} = employee;
// const city = employee.address.city
// const country = employee.address.country

// console.log(country)
// console.log(city)
// console.log(name)


//**********************  Destructuring in JavaScript  ************************** *//

// const users = [
//   ["akash","yadav"],
//   ["nikesh","janny"],
//   ["shreya","singh"],
// ];
// [
//   {
//     firstname:"sanjana",
//     lastname:"yadav"
//   },
//   {
//     firstname:"anjana",
//     lastname:"dubey"
//   },
//   {
//     firstname:"saggy",
//     lastname:"suman"
//   }
// ]

// const userObj = users.map(([firstname,lastname])=>{
//   return({firstname:firstname,lastname:lastname})
// })
// console.log(userObj);


//**********************  JavaScript Array of Method ************************ *//
//* foreach()
// const GroceryList = [
//   {name:"apple",price:24,category:"fruits"},
//   {name:"tomato",price:12,category:"vegies"},
//   {name:"banana",price:18,category:"fruits"}
// ]

// console.log(GroceryList);

//* foreach()
// const data = GroceryList.forEach((item)=>{
//   console.log(`name ${item.name} and price is ${item.price} and category is ${item.category}`)
// })

// //* map()
// const newPrices = GroceryList.map((item) =>{
//   return{name:item.name, price:item.price*2}
// })
// console.log(newPrices)

//* filter()
// const newFilter = GroceryList.filter((item) =>{
//       return item.category == "fruits"
// })
// console.log(newFilter)

// //* sort()
// const newSort = GroceryList.sort((a,b) =>{
//   return a.name.localeCompare(b.name)
// })
// console.log(newSort);

//* reduce()
// initialvalue = 0;
// const newSum = GroceryList.reduce((currentTotal,item)=>{
//   return item.price + currentTotal
// },initialvalue)
// console.log(newSum);

//* flat() methods
//* flat().map() method
//* inside of flat we will be define level of flat in the array
//* By default it is 1 level

// const arr = [1,2,3,4,5,[6,7,8,9]];
// const result = arr.flat(2)

// const res1 = arr.flat(2).map(num =>{
//   return num*2
// })

//**************************************** *//

// const res1 = arr.flatMap(num =>{
//   return num*3
// })
// console.log(res1);


//********************************************************** *//

// function test(name,callmeback){
//   console.log(`i'm ${name}`);
//   callmeback()
// }
// function callmeback(){
//   console.log("I'm callback");
// }

// test("akash",callmeback)


//******************************************************** */

















