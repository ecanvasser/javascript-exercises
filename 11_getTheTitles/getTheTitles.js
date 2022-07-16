const getTheTitles = function(books) {
    let titleList = [];
    let titles = books.filter((book) => titleList.push(book.title));
    return titleList;
};

// Do not edit below this line
module.exports = getTheTitles;
