function firstDuplicate(a) {
    let counter = 0
    let currentTemp = 0
    let duplicate = scanDuplicate(a)
    console.log(duplicate)
    if(duplicate.length==0){
        return -1
    }else{
        for(let i=0;i<duplicate.length;i++){
            for(let j=i;j<a.length;j++){
                if(duplicate[i]==a[j]){
                    counter++
                    if(counter==2){
                        counter=0
                        if(currentTemp==0){
                            currentTemp=j
                        }
                        if(j<currentTemp){
                            currentTemp=j
                        }
                    }
                }
            }
        }
        return a[currentTemp]
    }
}
function scanDuplicate(array){
    let duplicate = []
    for(let i=0;i<array.length;i++){
        for(let j=i+1;j<array.length;j++){
            if(array[i]==array[j] && array[i]!=duplicate[j]){
                duplicate.push(array[i])
                // console.log(duplicate)
                continue
            }
        }
    }
    return duplicate
}
firstDuplicate([1,1,1,1,2])