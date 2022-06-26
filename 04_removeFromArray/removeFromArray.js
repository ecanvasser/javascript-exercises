const removeFromArray = function() {
    
    let arr = Array.from(arguments)[0];
    let args = Array.from(arguments).slice(1,);

    for (const arg of args) {
        if (arr.indexOf(arg) !== -1) {
            arr.splice(arr.indexOf(arg), 1);
        } else {
            continue;
        }
    }

    return arr;
        
};

// Do not edit below this line
module.exports = removeFromArray;
