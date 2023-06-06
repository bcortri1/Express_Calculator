function mean(numArr) {
    if (numArr.length === 0){
        return "No numbers provided"
    }
    let value = 0;
    for (let i = 0; i < numArr.length; i++) {
        let val = numArr[i]
        let num = Number(val)

        if (num != num) {
            return `${val} is not a number`
        }

        value = value + num

    }
    value = value / numArr.length
    return value
}

function median(numArr) {
    if (numArr.length === 0){
        return "No numbers provided"
    }
    
    let value = 0;
    for (let i = 0; i < numArr.length; i++) {
        let val = numArr[i]
        let num = Number(val)
        if (num != num) {
            return `${val} is not a number`
        }
    }

    let sortedArr = numArr.sort(function(a, b){return a - b});

    if (sortedArr.length % 2 === 0){
        let i = (sortedArr.length/2)
        value = (Number(sortedArr[i])+Number(sortedArr[i-1]))/2
    }
    else{
        let i = (sortedArr.length/2)-.5
        value = Number(sortedArr[i])
    }
    return value
}


function mode(numArr) {
    if (numArr.length === 0){
        return "No numbers provided"
    }
    let value = "Default Value";
    let numSet = new Set(numArr)
    let numCount = {}
    for (val of numSet){
        
        let num = Number(val)
        if (num != num) {
            return `${val} is not a number`
        }
        numCount[val] = 0;
        for (i = 0; i < numArr.length; i++){
            if (numArr[i] === val){
                numCount[val] = numCount[val]+1;
            }
        }
    }

    
    value = Object.keys(numCount).reduce(function(curr, key, arr){
        if (curr === "Default Value"){
            return numCount[key]
        }
        else {
            if (curr < numCount[key]){
                return numCount[key]
            }
            else if (curr > numCount[key]){
                return curr
            }
            else {
                return "No Mode"
            }
        }

    },value)

    return value
}

function all(numArr) {
    return {
        mean: mean(numArr),
        median: median(numArr),
        mode: mode(numArr)
    }
}


module.exports = { mean, median, mode };