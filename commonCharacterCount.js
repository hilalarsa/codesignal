function commonCharacterCount(s1, s2) {
    let counter = 0
    let newA = s1
    let newB = s2
    for(let i=0;i<newA.length;i++){
        for(let j=0;j<newB.length;j++){
            console.log(newA[i],newB[j])
            if(newA[i]==newB[j]){
                console.log('deleted')
                newA = destroyer(newA,i)
                newB = destroyer(newB,j)
                console.log(newA,newB)
                i=0
                j=0
                counter++
            }
        }
    }
    // console.log(new)
    return counter
}

function destroyer(string,pos){
    let left = string.substring(0,pos)
    let right = string.substring(pos+1,string.length)
    return left+right
}
commonCharacterCount("abca","xyzbac")