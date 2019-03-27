function makeArrayConsecutive2(statues) {
    let sortedStatues=sort(statues)
    let low = getLow(sortedStatues)
    let high = getHigh(sortedStatues)
    let counter = 0
    let j=0
    for(let i=low;i<high;i++){
        // console.log(i,j,sortedStatues[j])
        if(i!=sortedStatues[j]){
           j--
            counter++
        }
        j++
    }
    console.log(counter)
    return counter
}

function getLow(array){
    return array[0]
}
function getHigh(array){
    return array[array.length-1]
}

function sort(array){
    let small = array[0]
    let result = 0
    let temp = 0
    for(let i=0;i<array.length;i++){
        for(let j=i+1;j<array.length;j++){
            if(array[i]>array[j]){
                temp=array[j]
                array[j]=array[i]
                array[i]=temp
            }
        }
    }
    return array
}

makeArrayConsecutive2([6, 2,3, 8,10])