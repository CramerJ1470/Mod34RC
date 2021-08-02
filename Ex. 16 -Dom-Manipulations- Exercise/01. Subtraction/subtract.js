function subtract() {
	let firstNumber = document.getElementById("firstNumber").value;
	let secondNumber = document.getElementById("secondNumber").value;
	let result = document.getElementById("result");

	let answer = Number(firstNumber) - Number(secondNumber);
	result.textContent = answer;

	//console.log(firstNumber);
	//console.log(secondNumber);
	//console.log(result.textContent);
}
