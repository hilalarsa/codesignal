function firstMultiple2(divisors, start) {
    let ping = start
    let counter = 0
    for(let i=0;i<divisors.length;i++){
        if(ping%divisors[i]==0){
            counter++
        }
        ping++
    }
    if(counter==divisors.length){
        console.log(ping,counter)
        return ping
    }
}

