//* callback
// const gettownumadd = (number1, number2, callback, callback2) => {
//   console.log(number1, number2);
//   callback(number1, number2)
//   callback2(number1, number2)
// }
// const two = (num1,num2) =>{
//   console.log(num1);
//    console.log(num1+num2)
// }
// console.log(gettownumadd(2,3,two))

// gettownumadd(4, 4, (num1, num2) => { console.log(num1 + num2) }
//   , (num1, num2) => {console.log(num1 * num2)}
//   )


//******************************************************** *//
//* REST Parameter
// const restPara = (a,b,...c) =>{
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// const res = restPara(1,2,3,4,5,6,6,99,7)
// console.log(res)


//* SPREAD Parameter
// const spreadPara = (fname,lname) =>{
//     console.log(fname,lname);
// }
// const res = spreadPara([..."akash","yadav"]);
// const res = spreadPara(...["akash","yadav"]);
// console.log(res);


//***************************************************** *//
//* Class

// class mydetails{
//   constructor(fname,lname){
//       this.fname = fname;
//       this.lname = lname
//   }
// }
// const res = new mydetails("akash","yadav");
// console.log(res);

//****************************************************** *//

// const sub = new Promise((reject,resolve) =>{
//   const result = true;
//   if(result)  resolve("completed!!")
//   else  reject( new Error("something went wrong"))
// })
// sub.then((res) =>{
//   console.log(res);
// }).catch((err) =>{
//   console.error(err)
// })


//********************************** *//
//* callback pyramid dom
// async_A(function(){
//   async_B(function(){
//     async_C(function(){
//     })
//   })
// })


////////////////////////////////////////////////////////////////////////////
//*

// let num = 10;
// let total = 0;
// let i=0
// while(i<=10){
//   total = total+i
//   i++
// }
// console.log(total);


//* 

// const arr = [11,12,14,15,16,17];
// const resmap = arr.map((item,index,arr) =>{
//   return index
// })

// const resfilter = arr.filter((item)=>{
//   return item>14
// })
// console.log(resfilter);

const incrementfive = () =>{
  for(let i=0;i<5;i++){
    console.log(i);
  }
}
console.log(incrementfive());


