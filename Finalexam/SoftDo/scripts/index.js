// NOTE: The comment sections inside the index.html file is an example of how suppose to be structured the current elements.
//       - You can use them as an example when you create those elements, to check how they will be displayed, just uncomment them.
//       - Also keep in mind that, the actual skeleton in judge does not have this comment sections. So do not be dependent on them!
//       - Тhey are present in the skeleton just to help you!

// This function will be invoked when the html is loaded. Check the console in the browser or index.html file.

function mySolution() {
	const messageToSend = document.querySelector("textarea");
	const buttonSend = document.querySelector("button");
	var buttonArchive = document.querySelector("button[class='archive']");
	var buttonOpen = document.querySelector("button[class='open']");
	let messageArchive = [];
	//console.log(messageToSend);
	//console.log(buttonSend);

	const receivePendingQuestion = document.getElementsByTagName("p");

	buttonSend.addEventListener("click", sendMessage);
	buttonArchive.addEventListener("click", archiveMessage);
	buttonOpen.addEventListener("click", openMessage);

	let paragraph1;
	let spanBox;

	function sendMessage() {
		document.getElementById(
			"pendingQuestions"
		).childNodes[5].style.display = "";

		let msgToSend = messageToSend.value;
		console.log("hello I am working sendMessage");
		let sentMsg = msgToSend;
		let pQDiv = document.getElementById("pendingQuestions");

		paragraph1 = document.getElementsByTagName("p")[0];
		let givenUser = document.querySelector("input").value;
		let spanBox = document.getElementsByTagName("span")[0];
		if (givenUser != "") {
			spanBox.textContent = givenUser;
		} else spanBox.textContent = "Anonymous";

		paragraph1.innerText = sentMsg;

		receivePendingQuestion.value = sentMsg;
		messageToSend.value = "";
		givenUser.value = "";
		document.querySelector("input").value = "";
	}

	function archiveMessage() {
		messageArchive.push(
			`${document.getElementsByTagName("p")[0].innerText}`,
			`${document.getElementsByTagName("span")[0].textContent}`
		);
		document.getElementsByTagName("p")[0].innerText = "";
		document.getElementsByTagName("span")[0].textContent = "";
	}

	function openMessage() {
		//console.log(document.getElementsByTagName("p"));
		console.log(document.getElementById("openQuestions"));
		let openDiv = document.getElementById("openQuestions");
		let changedHTML = openDiv.innerHTML
			.toString()
			.replace(
				`<!-- <div class="openQuestion">`,
				`<div class="openQuestion">`
			)
			.replace(`</div> -->`, `</div>`);
		console.log(`changedHTML `, changedHTML);

		openDiv.innerHTML = changedHTML;
		document.getElementById(
			"pendingQuestions"
		).childNodes[5].style.display = "none";

		document.getElementsByTagName("span")[1].textContent =
			document.getElementsByTagName("span")[0].textContent;
		document.getElementsByTagName("p")[1].textContent =
			document.getElementsByTagName("p")[0].textContent;

		let replyBtn = document.querySelector("button[class='reply']");
		console.log(replyBtn);
		replyBtn.addEventListener("click", replyMessage);
	}

	function replyMessage() {
		let replyDiv = document.getElementById("openQuestions");
		var t = 0;
		let replyHTML = replyDiv.innerHTML.replace(
			/<!-- <div class="openQuestion">/g,
			function (match) {
				t++;
				return t === 1 ? `<div class="openQuestion">` : match;
			}
		);
		var s = 0;
		replyHTML = replyHTML.replace(/div> -->/g, function (match) {
			s++;
			return s === 1 ? `div>` : match;
		});
		console.log(replyHTML);

		replyDiv.innerHTML = replyHTML;
		document.getElementsByTagName("span")[2].textContent =
			document.getElementsByTagName("span")[1].textContent;
		document.getElementsByTagName("p")[2].textContent =
			document.getElementsByTagName("p")[1].textContent;
		document.getElementById("openQuestions").childNodes[5].style.display =
			"none";
		let backButton = document.querySelectorAll("button[class='reply']")[1];
		backButton.addEventListener("click", function () {
			document.getElementsByTagName("input")[1].style.display = "none";
			replyDiv.getElementsByClassName("actions")[1].style.display =
				"none";
			replyDiv.getElementsByTagName("button")[2].style.display = "none";
			replyDiv.getElementsByTagName("ol")[0].style.display = "none";
			console.log("trying");
			//replyDiv.style.display = "none";
		});
		let sendAnswer = replyDiv.getElementsByTagName("button")[2];

		sendAnswer.addEventListener("click", function () {
			document.getElementsByTagName("ol")[0].innerHTML = "";
			sendAnswer1();
		});
	}
	let newListItems;
	let newLi;
	let addToList = document.createElement("ol");
	function sendAnswer1() {
		let replyDiv = document.getElementById("openQuestions");
		let olDiv = document.getElementById("items");
		let shortReply = replyDiv.getElementsByTagName("input")[0].value;
		newLi = document.createElement("li");

		newLi.textContent = shortReply;
		console.log(`newLi `, newLi);
		addToList.appendChild(newLi);
		console.log(addToList);
		olDiv.appendChild(addToList);
		replyDiv.getElementsByTagName("input")[0].value = "";
	}
	console.log("GOOD LUCK c(:");
}

/*
                <div class="pendingQuestion">
					<img src="./images/user.png" width="32" height="32" />
					<span>Anonymous</span>
					<p>
						This will be the question holer.. This will be the
						question holer.. This will be the question holer..
					</p>
					<div class="actions">
						<button class="archive">Archive</button>
						<button class="open">Open</button>
					</div>
				</div>
                */
