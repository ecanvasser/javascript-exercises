const palindromes = function (str) {
    const letterChar = /[a-z]/;
    let palindrome = [];

    for (letter of str.toLowerCase()) {
        if (letterChar.test(letter)) {
            palindrome.push(letter);
        }  
    }

    return (palindrome.join() === palindrome.reverse().join())
};

// Do not edit below this line
module.exports = palindromes;
