function almostIncreasingSequence(sequence){
    let counter = 0
    if(sequence.length<=1){
        return true
    }
    else if(checker(sequence)){
        return true
    }else{
        for(let i=0;i<sequence.length;i++){
            let newArray = [...sequence]
            
            destroyer(newArray,i)
            if(checker(newArray)){
                counter++
            }
        }
        if(counter>0){
            return true
        }else{
            return false
        }
    }
}

console.log(almostIncreasingSequence([1,2,3,4,5]))

function checker(array){
    let counter = 0
    for(let i=0;i<array.length-1;i++){
        if(array[i]>=array[i+1]){
            counter++
        }
    }
    if(counter>0){ //if the next number equals or more than previous
        return false
    }else{
        return true
    }
}

function destroyer(array,i){
    return array=array.splice(i,1)
}