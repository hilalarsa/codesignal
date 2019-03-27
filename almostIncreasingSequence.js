function almostIncreasingSequence(sequence){
    for(let i=0;i<sequence.length;i++){
        let array = sequence
        let newArray = array.splice(i,1)
        console.log(newArray)
    }
    console.log(sequence)
}

almostIncreasingSequence([1,2,3,4,5])











// function almostIncreasingSequence(sequence) {
//     console.log(checkIncreasing(sequence))
//     if(checkIncreasing(sequence)[0]==0){
//         return true
//     }else{
//         let array = sequence
//         array.splice(checkIncreasing(sequence)[1],1); //returns deletedIndex
//         // console.log(array)
//         if(checkIncreasing(array)[0]==0){ //returns counter
//             return true
//         }else{
//             return false
//         }
//     }
// }
  
  
// function checkIncreasing(array){
//     let counter = 0
//     for(let i=0;i<array.length-1;i++){
//             if(array[i]<array[i+1]){
//             }
//             else if(array[i]>array[i+1]){
//                 counter++
//                 let deletedIndex = array[i]
//                 return [counter,array.indexOf(deletedIndex)]
//             }
//             else if(array[i]==array[i+1]){
//                 counter++
//             }
//     }
//     return [counter,0]
// }
  
// console.log(almostIncreasingSequence([1, 2, 3, 4, 3, 6]))