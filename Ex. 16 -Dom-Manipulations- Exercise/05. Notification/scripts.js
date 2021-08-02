async function notify(someThing) {
	console.log(1);
	let notifyDiv = document.getElementById("notification");
	notifyDiv.style.display = "block";
	notifyDiv.innerText = someThing;
	await new Promise((resolve) => setTimeout(resolve, 2000)); // 3 sec
	notifyDiv.style.display = "none";
	console.log(2);
}
