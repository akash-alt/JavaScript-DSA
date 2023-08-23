

//* Q-1
// function sayHi(){
//   console.log(age);
//   console.log(name);

//   var age = 29;
//   let name = "akash"

// }
// sayHi()


//* Q-2
// function test(){
//   for(var i=0;i<3;i++){
//     setTimeout(() => {
//       console.log(i,1);
//     });
//   }

//   for(let i=0;i<3;i++){
//     setTimeout(() => {
//       console.log(i,1);
//     });
//   }
// }
// test()


//* Q-3
// const shape = {
//    radious : 10,
//    diameter(){
//     return this.radious*2
//    },
//    perimeter : ()=> 2*Math.PI * this.radious // we can use "this" with arrow function

// }
// console.log(shape.diameter());
// console.log(shape.perimeter());


//* Q-4
// console.log(+true)
// console.log(!"akash")


//* Q-5
// let a = 3;
// let b = new Number(3);
// let c = 3;

// console.log(a == b);
// // console.log(typeof b);
// console.log(a===b ); // a:number & b:object
// console.log(b === c);


//* Q-6

// function fullName(firstName,lastname){
//    function inner(){
//       console.log(firstName,lastname);
//    }
//    return inner
// }
// const res = fullName("akash","yadav")
// console.log(res());


//********************************* *//
//* clouser
// function test(c){
//    let a = "akash";
//    let b = "yadav";

//    return function(){
//       console.log(a,b,c);
//    }
// }
// const res = test('developer')
// console.log(res());


//****************************************** *//

// function test(power){
//    return function(number){
//       return number**power;
//    }
// }
// const res = test(5);
// console.log(res(2));

//********************************************** *//
//* 
// function func(){
//    return function(){
//       if(true){
//          console.log("Hi you called me!");
//       }
//       else{
//          console.log("this is things");
//       }
//    }
// }
// const res = func();
// console.log(res());


//******************************************************** *//
//* Q-7

// function Person(firstName,lastName){
//       this.firstName = firstName;
//       this.lastName = lastName;
//       this.getfullname = function(){
//          return `${this.firstName} ${this.lastName}`
//       }
// }

// const res = new Person("akash","yadav");
// console.log(res.getfullname());  // output: akash yadav


//************************************************************** *//
//* Q-8
// function test(firstName,lastName){
//       this.firstName = firstName;
//       this.lastName = lastName;
// }

// const res =new test("akash","yadav");
// const res1 = test("akash","yadav")
// console.log(res);
// console.log(res1);


//* Q-9

// function test(data){
//    if(data =={age:18}){
//       console.log("applicable");
//    }else if(data === {age:18}){
//       console.log("still applicable");
//    }else{
//       console.log("uhh... you don't have age");
//    }
// }
// test({data:18})


//* Q-10

// const res = eval("10*10+9");
// console.log(res); //output : 109

//* Q-11

// for(let i=0;i<5;i++){
//    if(i === 3) continue;
//    console.log(i);
// }


//* Q-12

// String.prototype.givenPizza=()=>{
//    return "just given pizza to lydia"
// }
// let name = "lydia";
// console.log(name.givenPizza()); // bcs string is built in constructor


//* Q-13 hof

// function add(a,b){
//   return a+b
// }
// function test2(a,b,fn){
//     let result = fn(a,b)
//     console.log(result);
// }
// test2(2,4,add)


//* Q-14
// const person = {fname:"akash"};
// function test(age){
//   return `${this.fname} ${age}`
// }
// console.log(test.call(person,25)); //* akash 25
// console.log(test.bind(person,25)) //* function


//* Q-15

// function test(){
//   return (()=> 0)()  //* 0 
// }
// console.log(typeof test()); //* number


//* Q-16

// console.log(typeof typeof 1); //* string

//* Q-17

// const obj = [1,2,3];
// obj[10] = 18;
// console.log(obj);


//* Q-18

// setInterval(() => {
//   console.log("hello!");
// }, 1000);  //* unique id will return


//* Q-19

// console.log([...'akash']) //* a,k,a,s,h

//* Q-20

// function * generator(i){
//   yield i;
//   yield i*2
// }
// const gen = generator(10);
// console.log(gen.next().value);
// console.log(gen.next().value); 
//* output: 10,20


//* Q-21

// function greeting(){
//   throw "hello this is throw!"
// }

// function sayHi(){
//   try{
//     const data = greeting()
//     console.log("hello!",data);
//   }
//   catch(err){
//       console.log("no error,",err);
//   }
// }
// sayHi() //* throw will use for handelling the exceptional things
//* output: no error, hello this is throw!


//* Q-22

// function Car(){
//   this.make = "lamborghini"
//   console.log(this.make);
//   return {make:"messarati"}
// }

// const myCar = new Car();
// console.log(myCar);


//* Q-23

// const set = new Set([11,11,14,15,16]);
// console.log(set); //* {11,14,15,16}


//* Q-24

// const age = 25;
// fname = "akash";
// console.log(delete fname); 
// console.log(delete age);


//* Q-25

// const settings = {
//   username:"akash",
//   level:19,
//   health:90
// }
// const data = JSON.stringify(settings,["level","health"])
// console.log(data); //* {"level":19,"health":90}


//* Q-26

// let num =10;
// const increasenumber = () => num++;
// const increasepassednumber = number => console.log(number++);
// const num1 = increasenumber();
// const num2 = increasepassednumber(num1);
// console.log(num1);
// console.log(num2);


//* Q-27

// const value = {number:10};
// const multiply = (x={...value}) =>{
//   console.log(x.number*=2)
// }
// multiply()
// multiply()
// multiply(value)
// multiply(value)  // 20 20 20 40


//* Q-28
// [1,2,3,4].reduce((x,y)=> console.log(x,y)) //* 1 2 undefined 3 undefined 4


//* Q-29

// function addItem(item,list){
//   return list.push(item) // push returns length of the array
// }
// const res = addItem("akash",["developer"])
// console.log(res);


//* Q-30

// const box = {x:20,y:30};

// Object.freeze(box); //* by using freeze we can not change the values

// const shape = box;
// shape.x = 100;
// console.log(box); //* {x:20,y:30}


//* Q-31

// const {fname:tell} = {fname:"akash"}
// console.log(fname); // Referanceerror


//* Q-32

// const obj = {
//   name:"akash",
//   role:"developer"
// }
// obj.city = "bangalore"
// console.log(obj);


//* Q-33

// fetch(URL)
// .then((res)=>res.json()) //* this is callback
// .then(data=> console.log(data))


//* Q-34
// console.log("i love javascript"[0]); //* i


//* Q-35
// function sum(num1,num2=num1){
//   return num1+num2
// }
// console.log(sum(10));


//* Q-36

// const myPromise = ()=> Promise.resolve("this is me!");

// function firstFunction(){
//   myPromise().then((res)=> console.log(res))
//   console.log(myPromise);
//   console.log('second');
// }

// async function secondFunction(){
//   console.log(await myPromise)
//   console.log('second');
// }
// firstFunction()
// secondFunction()


//* Q-37

// function compareMembers(person1, person2 = person){
//     if(person1 !== person2){
//       console.log("not equal!");
//     }
//     else{
//       console.log("all are equal!")
//     }
// }
// const person = {person:"akash"};
// compareMembers(person) //* output : all will be equal
//* here we have pass value in person and it takes reference value of the person1


//* Q-38

// function test({x,y,z}){
//   console.log(x+y+z)
// }
// test(1,2,3)


//* Q-39

let randomValue = { name: "Lydia" }
randomValue = 23

if (!typeof randomValue === "string") {
	console.log("It's not a string!")
} else {
	console.log("Yay it's a string!")
}












