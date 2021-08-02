function create(words) {
	let sectionDiv = document.getElementById("content");
	let newSectionDiv = [];
	let sectionP = [];
	for (let x = 0; x < words.length; x++) {
		newSectionDiv[x] = document.createElement("div");
		newSectionDiv[x].id = "content";
		sectionP[x] = document.createElement("p");
		sectionP[x].style.display = "none";
		sectionP[x].textContent = words[x];
		//sectionP.addEventListener(
		//"click",
		////(sectionP.style.display = ""),
		///	(sectionP.style.display = "none")
		//);

		newSectionDiv[x].appendChild(sectionP[x]);
		sectionDiv.appendChild(newSectionDiv[x]);
		console.log(newSectionDiv[x]);
	}
	for (let i = 0; i < newSectionDiv.length; i++) {
		newSectionDiv[i].addEventListener("click", function () {
			if (sectionP[i].style.display == "none") {
				sectionP[i].style.display = "";
			} else if (sectionP[i].style.display == "") {
				sectionP[i].style.display = "none";
			}
		});
	}

	console.log("TODO:...");
}
