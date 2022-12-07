describe("The sum function", () => {
    it("Sum function adds all the elements in an array of integers and returns the overall sum", () => {
        assert.equal(sum([1, 2, 3, 4, 5]), 15);
    })
});

describe("The multiply function", () => {
    it("Multiply function calculates the product of all the elements in an array of integers and returns the overall product", () => {
        assert.equal(multiply([1, 2, 3, 4, 5]), 120);
    })
});

describe("The findLongestWord function", () => {
    it("findLongestWord function returns the length of the longest word in an array of strings", () => {
        assert.equal(findLongestWord(["strange", "stir", "as", "flower"]), 7);
    })
});

describe("The filterLongWords function", () => {
    it("filterLongWords function accepts one integer parameter and returns the number of words whose length is less than the provided parameter", () => {
        assert.equal(filterLongWords(["strange", "stir", "as", "flower"], 3), ["strange", "stir", "flower"]);
    })
});