
//* Q *\\ Given an object and a filter function, write a function that will go through and filter the object, then return a filtered object
//* Deep Filter

 const filter = (n) => n >= 0;
 let inputObj = {
 	'a': 1,
 	'b': {
 		'c': 2,
 		'd': -3,
 		'e': {
 			'f': {
 				'g': -4,
 			},
 		},
 		'h': {
 			'i': 5,
 			'j': 6,
 		},
 	}
 }

// const deepFilter = (inputObject, callbackFilterFn) => {

// 	for (let key in inputObject) {
// 		if (typeof inputObject[key] === 'object') {
// 			deepFilter(inputObject[key], callbackFilterFn);
// 			if (Object.keys(inputObject[key]).length === 0) {
// 				delete inputObject[key];
// 			}
// 		} else {
// 			if (!callbackFilterFn(inputObject[key])) {
// 				delete inputObject[key];
// 			}
// 		}
// 	}
// 	return inputObject;
// }

// console.log(deepFilter(inputObj, filter))



//******************   JavaScript Fetch Retry (On failure)  ******************\\

// const fetch_retry = (url,option,n) =>{
//     for(let i=0;i<n;i++){
//         // console.log(i)
//         fetch(url,option);
//         if(success) return result;
//     }
// }
// const res1 = fetch_retry("https://chat.openai.com/",3);
// console.log(res1);


//***   fetch_retry outline

// const fetch_retry = (url,option,url) =>{
//     fetch(url,option)
//     .then(function(result){

//     }).catch(function(error){

//     })
// }
// fetch_retry()


//* 

const fetch_retry = (url,options,n) =>{
        return new Promise(function(resolve,reject){
            fetch(url,options)
                .then(function(result){

                })
                .catch(function(error){
                    
                })
        })
}


