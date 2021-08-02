function toggle() {
	let spanText = document.getElementsByTagName("span");
	console.log(spanText);
	const regex = />[A-z]+</g;
	let getWord = spanText[0].outerHTML;
	let word = getWord.match(regex).toString();
	let originalDiv = document.getElementById("accordion");
	console.log(word);
	if (word == ">More<") {
		originalDiv.getElementsByTagName("div")[1].style.display = "block";
		document.getElementsByTagName("span")[0].textContent = "Less";
	} else if (word == ">Less<") {
		originalDiv.getElementsByTagName("div")[1].style.display = "none";
		document.getElementsByTagName("span")[0].textContent = "More";
	}
}

//  <span class="button" onclick="toggle()">More</span>
/*  <div id="extra">
        <p>
          Lorem ipsum dolor sit amet, ectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
*/
