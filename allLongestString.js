function allLongestStrings(inputArray) {
    let currentHighest = 0
    let result = []
    let newArray = [...inputArray]
    for(let i=0;i<newArray.length;i++){
        currentHighest = checker(newArray[i],currentHighest)
    }
    for(let i=0;i<newArray.length;i++){
        if(newArray[i].length==currentHighest){
            result.push(newArray[i])
        }
    }
    return result
}


function checker(string,currentHighest){
    if(string.length<=currentHighest){
        return currentHighest
    }else if(string.length>currentHighest){
        return string.length
    }
}

allLongestStrings(["aba", "aa", "ad", "vcd", "aba"])