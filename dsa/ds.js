
//* Array
// let arr = [1,2,34,"akash"];
//  arr.push(2);
//  arr.unshift("test")

// for (const item of arr) {
//   console.log(item);
// }


//* Object
// let obj = {
//   name:"akash",
//   role:"developer"
// }
// obj.place = "Bangalore"
// delete obj['name']

// console.log(obj.role);
// console.log(obj['name']);
// console.log(obj);


//************************************ *//

// const set = new Set([1,2,3]);
// set.add(4)
// console.log(set);


//*********************************** *//

// const map = new Map([["a",1],["b",2]]);
// map.set('c',3);
// map.delete('c')

// for(let [key,value] of map){
//   console.log(`${key}: ${value}`);
// }
// for (let index = 0; index < array.length; index++) {
//   const element = array[index];

// }



//**************************** Stack Implementation ************//

// class Stack{
//   constructor() {
//      this.items = []
//   }

//   push(element){
//       this.items.push(element)
//   }

//   pop(){
//     return this.items.pop()
//   }

//   peek(){
//     return this.items[this.items.length -1]
//   }

//   isEmpty(){
//     return this.items.length === 0;
//   }

//   size(){
//     return this.items.length
//   }

//   print(){
//     console.log(this.items.toString());
//   }

// }

// const stack = new Stack(); 
// console.log(stack.isEmpty());

// stack.push(10)
// console.log(stack.size());
// console.log(stack.print());



//******************************  Queue DS  *************************//
//* Method 1 (Array)

// class Queue {
//   constructor() {
//     this.items = []
//   }
//   enqueue(element) {
//     this.items.push(element)
//   }

//   dequeue() {
//     return this.items.shift()
//   }

//   isEmpty() {
//     return this.items.length === 0
//   }

//   peek() {
//     if (!this.isEmpty) {
//       return this.items[0]
//     } else {
//       return null
//     }
//   }

//   size() {
//     return this.items.length
//   }

//   print() {
//     console.log(this.items.toString());
//   }
// }

// const queue = new Queue();
// console.log(queue.isEmpty());

// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)

// console.log(queue.size());
// console.log(queue.print());
// queue.dequeue(10)
// console.log(queue.print());



//* Method 2 (Object)

// class Queue{
//   constructor() {
//     this.items = {}
//     this.rear = 0
//     this.front = 0
//   }

//   enqueue(element){
//     this.items[this.rear] = element;
//     this.rear++
//   }

//   dequeue(){
//     const item = this.items[this.front]
//     delete this.items[this.front]
//     this.front++
//     return item
//   }

//   isEmpty(){
//     return this.rear - this.front === 0
//   }

//   peek(){
//     return this.items[this.front]
//   }

//   size(){
//     return this.rear-this.front
//   }

//   print(){
//     console.log(this.items);
//   }
// }

// const queue = new Queue();
// console.log(queue.isEmpty());

// queue.enqueue(10)
// queue.enqueue(20)
// console.log(queue.print());


//********************************  Linked List ***********************//

class Node{
  constructor(value){
    this.value = value;
    this.next = null
  }
}

class LinkedList{
  constructor(){
    this.head = null;
    this.size = 0;
  }

  isEmpty(){
    return this.size == 0
  }

  getSize(){
    return this.size
  }

  //* O(1)
  prepend(value){
    const node = new Node(value)
    if(this.isEmpty()){
      this.head = node
    }
    else{
      node.next = this.head
      this.head = node
    }
    this.size++
  }

  //* linear O(n)
  append(value){
    const node = new Node(value);
    if(this.isEmpty()){
      this.head = node
    }else{
      let prev = this.head
      while(prev.next){
        prev = prev.next
      }
      prev.next = node
    }
    this.size++
  }



  print(){
    if(this.isEmpty()){
      console.log('List is empty');
    }else{
      let curr = this.head
      let listValue = ''
      while(curr){
        listValue += `${curr.value} `
        curr = curr.next
      }
      console.log(listValue)
    }
  }
}

const list = new LinkedList();
console.log('list is empty:',list.isEmpty());
console.log('List size:',list.getSize());
list.print()
list.append(10);
list.print()

list.append(20);
list.append(30);
list.print()


//************************************************************************************* *//
//*************** Hash Table **************//

class HashTable{
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key){
    let total = 0;
    for(let i=0;i<key.length;i++){
      total += key.charCodeAt(i)
    }
    return total % this.size
  }
  
}




