// // const , var  , let 


// const PI= 3.14 
// var name  = "James"
// let count = 20

// console.log("count: ", count)

// ///functions  

// //1.

// function Hello(){
//     console.log("Je suis un fonction! ")
// }

// Hello()


// //2e

// const message = ()=>{
//     console.log("Je suis une fonctions en  array! ")
// }
// message()

//3e

// (()=>{
//     console.log("Je suis une fonction ano.")
// })()


let count = 0
function counter(){
    count ++;
    if (count == 10){
      count = 0
      console.log(count)
    }
  
}

(()=>{
    setInterval(()=>{
        counter()
    },1000)
})()
