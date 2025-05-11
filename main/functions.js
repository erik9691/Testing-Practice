export { capitalize, reverseString, calculator, ceaserCipher, analyzeArray };

function capitalize(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
	let newString = "";
	for (let i = string.length; i > 0; i--) {
		newString += string.charAt(i - 1);
	}
	return newString;
}

const calculator = new (class calc {
	constructor() {}
	add(num1, num2) {
		return num1 + num2;
	}
	subtract(num1, num2) {
		return num1 - num2;
	}
	divide(num1, num2) {
		return num1 / num2;
	}
	multiply(num1, num2) {
		return num1 * num2;
	}
})();

function ceaserCipher(string, shift) {
	let shiftedWord = "";
	for (let i = 0; i < string.length; i++) {
		shiftedWord += shiftLetter(string.charAt(i), shift);
	}
	return shiftedWord;
}

function shiftLetter(letter, shift) {
	const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
	let letterPos = alphabet.indexOf(letter.toLowerCase());
	if (letterPos === -1) {
		return letter;
	}
	letterPos += shift;
	let shiftedLetter;
	if (letterPos >= alphabet.length) {
		shiftedLetter = alphabet[letterPos - alphabet.length];
	} else {
		shiftedLetter = alphabet[letterPos];
	}
	if (letter.toUpperCase() === letter) {
		shiftedLetter = shiftedLetter.toUpperCase();
	}
	return shiftedLetter;
}

function analyzeArray(array) {
	let minNum = array[0];
	let maxNum = array[0];
	let sum = 0;

	for (let i = 0; i < array.length; i++) {
		if (minNum > array[i]) {
			minNum = array[i];
		}
		if (maxNum < array[i]) {
			maxNum = array[i];
		}
		sum += array[i];
	}
	return {
		average: sum / array.length,
		min: minNum,
		max: maxNum,
		length: array.length,
	};
}
