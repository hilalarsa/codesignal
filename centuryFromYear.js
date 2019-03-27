function centuryFromYear(year) {
    let counter = 0
    let returnValue=0
    if(year>100){
        while(year>100){
            if(year<100){
                returnValue=year
            }
            year = year-100
            counter = counter+1
        }
        if(returnValue!=0){
            return counter+1
        }else{
            return counter+1
        }
    }else{
        return 1
    }
}

console.log(centuryFromYear(1700))