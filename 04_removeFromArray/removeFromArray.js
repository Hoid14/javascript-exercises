const removeFromArray = function() {
    let lista=arguments[0]
    for(let i=1;i<arguments.length;i++){
        lista=lista.filter((item)=>item!==arguments[i])
    }
    return lista
};

// Do not edit below this line
module.exports = removeFromArray;
