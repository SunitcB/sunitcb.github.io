function sum(arr) {
    if (Array.isArray(arr)) {
        return arr.reduce((acc, x) => acc + x, 0);
    } else {
        return 0;
    }
}

function multiply(arr) {
    if (Array.isArray(arr)) {
        return arr.reduce((acc, x) => acc * x, 1);
    } else {
        return 0;
    }
}

function findLongestWord(arr) {
    return arr.map(x => x.length).reduce((acc, y) => y > acc ? y : acc, 0);
}

function filterLongWords(arr, i) {
    return arr.filter(x => x.length > i);
}