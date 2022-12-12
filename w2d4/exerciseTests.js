describe("The filtering function implemented in the String object", () => {
    it("The filtering() function returns a string after removing banned words: 'not' , 'a' from a string", () => {
        assert.equal("I am not Sunit!".filtering('not', 'a'), "I am Sunit!");
    })
});

describe("The bubbleSort function implemented in the Array object", () => {
    it("The bubbleSort() function returns a sorted integer array implementing bubble sorting algorithm to an unsorted integer array", () => {
        assert.equal(JSON.stringify([6, 4, 0, 3, -2, 1].bubbleSort()), JSON.stringify([-2, 0, 1, 3, 4, 6]));
    })
});

describe("The output from the teach function", () => {
    it("The teach function outputs the teacher's name and subject that he/she teaches from initialization of the Person constructor function from a teacher object", () => {
        assert.equal(teacher.teach("basketball"), "Joakim Noah is now teaching basketball");
    })
});
