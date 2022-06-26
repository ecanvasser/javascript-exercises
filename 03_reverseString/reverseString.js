const reverseString = function(word) {
    
    let result = [];
    for (let i = 0; i <= word.length-1; i++) {
        result.unshift(word[i]);
    }

    return result.join('')
};

// Do not edit below this line
module.exports = reverseString;
