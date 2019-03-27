function checkPalindrome(inputString) {
    let stringMid = 0
    if(inputString.length==0){
        return false
    }else if(inputString.length==1){
        return true
    }else if(inputString.length%2==1){
        stringMid=(inputString.length+1)/2
        if(stringMid-1==checker(inputString,stringMid)){
            return true
        }else{
            return false
        }
    }else if(inputString.length%2==0){
        stringMid=inputString.length/2
        if(stringMid==checker(inputString,stringMid)){
            return true
        }else{
            return false
        }
    }else{
        return false
    }
}

function checker(inputString, stringMid){
    let counter = 0
    let j = inputString.length-1
    for(let i=0;i<stringMid;i++){
        // console.log(inputString.charAt(i),inputString.charAt(j))
        if(inputString.charAt(i)==inputString.charAt(j) && i!=j){
            console.log(inputString.charAt(i),inputString.charAt(j))
            counter++
        }
        j--
    }
    return counter
}


console.log(checkPalindrome("a"))

