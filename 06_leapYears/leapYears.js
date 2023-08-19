const leapYears = function(a) {
    let result
    if(a%400===0){
        result=true
    }
    else if(a%100===0){
        result=false
    }
    else if(a%4===0){
        result=true
    }
    else{
        result=false
    }
    return result
};

// Do not edit below this line
module.exports = leapYears;
