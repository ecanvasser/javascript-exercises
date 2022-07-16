const fibonacci = function(num) {
    let fibSeq = [1, 1];
    if (parseInt(num) > 0) {
        for (let i = 0; i < num; i++) {
            fibSeq.push(fibSeq[i] + fibSeq[i+1])
        }
        return fibSeq[num - 1]
    } else {
        return "OOPS"
    }
};

// Do not edit below this line
module.exports = fibonacci;
