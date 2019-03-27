function shapeArea(n) {
    // let limit = n-1
    let result=0
    let finalResult =0
    for(let i=0;i<n-1;i++){
        result = ((i*2)+1)
        // console.log(result)
        finalResult = finalResult+result
    }
    return (finalResult*2)+(result+2)
}

console.log(shapeArea(3))


    /*let totalLeft = 0
    let totalRight = 0
    let left = n
    let right = n-1
    let mid = n+(n-1)
    let i,j
    if(n==1){
        return 1
    }else{
        for(i=1;i<left;i+=2){
            totalLeft=totalLeft+i
            console.log(totalLeft)
        }
        // console.log(i)
        for(j=1;j<right;j+=2){
            totalRight=totalRight+j
            console.log(totalRight)
        }
        console.log(totalLeft,totalRight)
        return mid+totalLeft+totalRight
    }
    */