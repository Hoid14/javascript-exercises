const sumAll = function(a,b) {
    let result=0
    if(a<0 || b<0 || typeof a!=="number" || typeof b!=="number" ){
        result="ERROR"
        return result
    }
    let mayor
    let menor
    if(a>b){
        mayor=a
        menor=b
    }
    else{
        mayor=b
        menor=a
    }
    
    for(let i=menor; i<=mayor; i++){
        result+=i
    }
    return result
};

// Do not edit below this line
module.exports = sumAll;
