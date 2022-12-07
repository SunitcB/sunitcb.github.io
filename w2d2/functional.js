function testAnyFunction(expected, found) {
    if (Array.isArray(expected) && expected.toString() === found.toString()) {
        return "TEST SUCCEEDED";
    } else if (expected === found) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}

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

console.log("TEST RESULT FOR FUNCTION, sum: " + testAnyFunction(15, sum([1, 2, 3, 4, 5])));
console.log("TEST RESULT FOR FUNCTION, multiply: " + testAnyFunction(120, multiply([1, 2, 3, 4, 5])));
console.log("TEST RESULF FOR FUNCTION, findLongestWord: " + testAnyFunction(7, findLongestWord(["strange", "stir", "as", "flower"])));
console.log("TEST RESULF FOR FUNCTION, filterLongWords: " + testAnyFunction(["strange", "stir", "flower"], filterLongWords(["strange", "stir", "as", "flower"], 3)));