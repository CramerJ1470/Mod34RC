$("#dateTimeInput").datetimepicker();
const dateTime = document.getElementById("dateTimeInput");
// const next = document.getElementById("next");
//const prev = document.getElementById("prev");
const images = document.getElementsByClassName("i-container")[0];
console.log(images);
const imgBox = document.getElementsByClassName("card");
console.log(imgBox);
const first_card_clone = imgBox[0].cloneNode(true);
const last_card_clone = imgBox[imgBox.length - 1].cloneNode(true);
console.log(first_card_clone);
console.log(last_card_clone);

//images.insertBefore(last_card_clone, imgBox[0]);
//images.appendChild(first_card_clone);

images.style.transitionDuration = "0.6s";
images.style.transform = `translate(250px)`;

let current_card = 1;

next.addEventListener("click", () => {
	console.log(`next`);
	if (current_card < images.children.length - 1) {
		current_card++;
		images.style.transitionDuration = "0.5s";
		images.style.transform = `translate(-${current_card * 350}px)`;
		if (current_card === images.children.length - 1) {
			setTimeout(() => {
				images.style.transitionDuration = "0.5s";
				images.style.transform = `translate(350px)`;
				current_card = 0;
			}, 600);
		}
	} else {
		return;
	}
});
prev.addEventListener("click", () => {
	if (current_card > 0) {
		current_card--;

		if (current_card === 0) {
			setTimeout(() => {
				images.style.transitionDuration = "0.5s";
				images.style.transform = `translate(-${
					(images.children.length - 2) * 350
				}px)`;
				current_card = images.children.length - 2;
			}, 600);
		}

		images.style.transitionDuration = "0.5s";
		images.style.transform = `translate(-${current_card * 350}px)`;
	} else {
		return;
	}
});

function addCourse(course) {
	console.log(`you picked `, course);
	programSelectedP.innerText = course;
}

const sendButton = document.getElementById("bookHourBtn");
let programSelectedP = document.getElementById("programSelected");

let professor = document.getElementById("lecturer");

let course = document.getElementById("course");
let totalConsultations =
	document.getElementById("totalConsultations").firstElementChild;
const consultationBox =
	document.getElementsByClassName("box-body")[2].firstElementChild;

sendButton.addEventListener("click", function () {
	console.log(totalConsultations);
	let consultationNumber = Number(totalConsultations.innerText);
	console.log(consultationNumber);
	let newConsult = document.createElement("li");
	let professorName = professor.value;
	let userName = document.getElementById("username").value;
	console.log(userName);

	courseSelected = course.value;
	let date = document.getElementById("dateTimeInput").value.substr(5, 5);
	let time = document.getElementById("dateTimeInput").value.substr(11);
	console.log(professorName, courseSelected, `on `, date, `at `, time);
	let selectedProgram = course.value;
	console.log(selectedProgram);

	consultationNumber += 1;
	totalConsultations.innerText = consultationNumber;
	if (professorName == "Patrick Golloway") {
		lecturerA = "Patrick";
	} else if (professorName == "Anar Mahmen") {
		lecturerA = "Anar";
	} else if (professorName == "Simeon Mandazhiev") {
		lecturerA = "Simeon M.";
	} else if (professorName == "Simeon Katoshki") {
		lecturerA = "Simeon K.";
	} else {
		throw error;
	}
	let regexUsername = /\w{3,25}/;

	if (
		regexUsername.test(userName) &&
		userName.length > 2 &&
		userName.length <= 25 &&
		lecturerA &&
		date &&
		time &&
		selectedProgram
	) {
		newConsult.innerHTML = `<span>${lecturerA} - ${date} - ${time}</span>
	<i class="fas fa-chevron-circle-right"></i>`;
		consultationBox.appendChild(newConsult);
		console.log(`all tests passed`);
		//console.log(dateTime.value.substr(5, 5));
	} else {
		document.getElementById("username").value =
			"Please try again, something missing";
	}
});
$(function () {
	$("body").sakura();
});
