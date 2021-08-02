function solve() {
	//	let splitRegex = /[.][ ]/gm;
	let splitArray = [];
	let newStrings = [];
	let solveString = document.getElementById("input");
	//	splitArray = splitRegex.exec(solveString);
	splitArray = solveString.textContent.split(". ");
	for (let x = 0; x < splitArray.length / 3; x++) {
		newStrings[x] = splitArray[x] + ". ";
		if (splitArray[x + 1] != undefined) {
			newStrings[x] = newStrings[x] + splitArray[x + 1] + ". ";
		}
		if (splitArray[x + 2] != undefined) {
			newStrings[x] = newStrings[x] + splitArray[x + 2] + ".";
		}
		newStrings[x] += "\n";
	}
	console.log(newStrings);
	let outputDiv = document.getElementById("output");
	let para = document.createElement("p");

	outputDiv.appendChild(para);
	for (let i = 0; i < newStrings.length; i++) {
		para = document.createElement("p");
		para.textContent = newStrings[i];
		outputDiv.appendChild(para);
		console.log(document);
	}
}
