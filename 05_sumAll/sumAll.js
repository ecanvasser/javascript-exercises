const sumAll = function(num1, num2) {

    let nums = [num1, num2].sort();

    if ((num1 < 0 || typeof num1 !== 'number') || (num2 < 0 || typeof num2 !== 'number')) {
        return 'ERROR';
    } else {
        let sum = 0;
        for (let i = nums[0]; i <= nums[1]; i++) {
            sum += i;
        };
        return sum;
    }
}
// Do not edit below this line
module.exports = sumAll;
