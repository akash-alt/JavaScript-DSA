
//* Bubble Sort *//
//* make the array in the sorting formate

// const sortArr = (arr) =>{
//     for(let i=arr.length-1;i>0;i--){
//       for(let j=0;j<i;j++){
//         if(arr[j]>arr[j+1]){
//           let temp = arr[j]
//           arr[j] = arr[j+1]
//           arr[j+1] = temp
//         }
//       }
//     }
//     return arr;
// }
// const result = sortArr([22,11,14,9,76])
// console.log(result);


//* Selection Sort *//
// const selectioSort = (arr) => {

//   for (let i = 0; i < arr.length - 1; i++) {
//     let min = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[min]) min = j
//     }
//     if (i !== min) {
//       let temp = arr[i]
//       arr[i] = arr[min]
//       arr[min] = temp
//     }
//   }
//   return arr
// }
// const result = selectioSort([11, 5, 2, 9, 0])
// console.log(result);


//* Insertion Sort *//

// const inertionSort = (arr) =>{
//     let temp
//   for(let i=1;i<arr.length;i++){
//      temp = arr[i]
//     for(var j=i-1;arr[j]>temp && j>-1;j--){
//       arr[j+1] = arr[j]
//     }
//     arr[j+1] = temp
//   }
//   return arr
// }
// console.log(inertionSort([11,2,56,90,4]));


//***********  Merge Sort   ****************//

function mergeSort(arr1, arr2) {
  let combind = []
  let i=0;
  let j=0;
  // console.log(arr1);

  while( i< arr1.length && j<arr2.length ){
    if(arr1[i]<arr2[j]){
      combind.push(arr1[i])
      i++
    }else{
      combind.push(arr2[j])
      j++
    }
  }
  while(i<arr1.length){
    combind.push(arr1[i])
    i++
  }
  while(j<arr2.length){
    combind.push(arr2[j])
    j++
  }
  return combind
}

console.log(mergeSort([11,2,34,4,56,6],[23,54,90,78]))
// console.log(result);

