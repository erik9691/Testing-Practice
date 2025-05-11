/* eslint-disable no-undef */
import { capitalize, reverseString, calculator, ceaserCipher, analyzeArray } from "./functions.js";

test("capitalize", () => {
	expect(capitalize("john")).toBe("John");
});

test("reverseString", () => {
	expect(reverseString("john")).toBe("nhoj");
});

test("add", () => {
	expect(calculator.add(10, 2)).toBe(12);
});
test("subtract", () => {
	expect(calculator.subtract(10, 2)).toBe(8);
});
test("divide", () => {
	expect(calculator.divide(10, 2)).toBe(5);
});
test("multiply", () => {
	expect(calculator.multiply(10, 2)).toBe(20);
});

test("ceaserCipher (basic)", () => {
	expect(ceaserCipher("baba", 1)).toBe("cbcb");
});
test("ceaserCipher (wrap)", () => {
	expect(ceaserCipher("zaza", 1)).toBe("abab");
});
test("ceaserCipher (lettercase)", () => {
	expect(ceaserCipher("BabA", 1)).toBe("CbcB");
});
test("ceaserCipher (punctuation)", () => {
	expect(ceaserCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("analyzeArray", () => {
	expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
		average: 4,
		min: 1,
		max: 8,
		length: 6,
	});
});
