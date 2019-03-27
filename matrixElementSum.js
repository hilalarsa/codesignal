function matrixElementsSum(matrix) {
    let totalSum = 0
    let newMatrix = [...matrix]
    for(let i=0;i<newMatrix.length;i++){
        for(j=0;j<newMatrix[i].length;j++){
            if(newMatrix[i][j]==0){
                newMatrix[i][j]=0
                if(i!=newMatrix.length-1){
                    newMatrix[i+1][j]=0
                }
            }else{
                totalSum = totalSum + newMatrix[i][j]
            }
        }
    }
    return totalSum
}

let MATRIX = [[1, 1, 1, 0], 
             [ 0, 5, 0, 1], 
             [ 2, 1, 3, 10]]

matrixElementsSum(MATRIX)

