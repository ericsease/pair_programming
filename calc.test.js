const calculator = require("./calc");

describe("calculator", () => {
    test("canary test", () => {
        expect(calculator).toBeTruthy();
    });
    test("returns the sum of two numbers", () => {
        expect(calculator.add(1, 1)).toBe(2);
    })
    // expect(calculator.add(1, 1)).toBe(2);
    test("returns the sum of any two numbers", () => {
        const numOne = Math.floor(Math.random() * 1000);
        const numTwo = Math.floor(Math.random() * 1000);
        expect(calculator.add(numOne, numTwo)).toBe(numOne+numTwo);
    })
})