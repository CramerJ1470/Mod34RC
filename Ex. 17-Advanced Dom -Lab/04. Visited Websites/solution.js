function solve() {
	let myCounter = {};
	const website1 = document.getElementsByClassName("link-1");
	//for (let x = 0; x < website1.length; x++) {
	//	let siteEle1 = document.getElementsByClassName("thin")[x];
	//	let siteEle2 = document.getElementsByClassName("thick")[x];
	//	let siteText = siteEle1.innerHTML + siteEle2.innerHTML;
	//	console.log(siteText);
	for (var eachElement of website1) {
		console.log("each element is ", eachElement);
		let tempSite = eachElement.children[0].innerText;

		let tempSiteCount = eachElement.children[1].innerText.split(" ")[1];
		myCounter[tempSite] = +tempSiteCount;
		eachElement.addEventListener("click", iWasClicked);
		console.log(tempSite, tempSiteCount);
	}

	console.log("my counter is ", myCounter);

	function iWasClicked() {
		console.log("The button was clicked");
		let tempSiteClicked = this.children[0].innerText;
		myCounter[tempSiteClicked]++;
		let countToUpdate = myCounter[tempSiteClicked];
		const numToReplace = /\d+/gm;
		let newCount = this.children[1].innerText.replace(
			numToReplace,
			countToUpdate
		);
		this.children[1].innerText = newCount;
	}
}
