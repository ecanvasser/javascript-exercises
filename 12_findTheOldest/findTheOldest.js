const findTheOldest = function(list) {
    let sortedList = list.sort((a, b) => {
        (a.yearOfDeath === undefined) ? aLife = new Date().getFullYear() - a.yearOfBirth : aLife = a.yearOfDeath - a.yearOfBirth;
        (b.yearOfDeath === undefined) ? bLife = new Date().getFullYear() - b.yearOfBirth : bLife = b.yearOfDeath - b.yearOfBirth;
        
        if (bLife > aLife) {
            return 1;
        } else {
            return -1;
        }
    })

    return sortedList[0]
};

// Do not edit below this line
module.exports = findTheOldest;
