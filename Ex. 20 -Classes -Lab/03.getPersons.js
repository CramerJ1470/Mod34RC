function main() {
	let finalArray = [];
	let person1 = new Persons("Anna", "Simpson", 22, "anna@yahoo.com");
	finalArray.push(person1);
	let person2 = new Persons("Kingsland University");
	finalArray.push(person2);
	let person3 = new Persons("Stephan", "Johnson", 25);
	finalArray.push(person3);
	let person4 = new Persons("Gabriel", "Peterson", 24, "g.p@gamil.com");
	finalArray.push(person4);

	console.log(finalArray);
}

class Persons {
	constructor(firstName, lastName, age, email) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.email = email;
	}
}
main();
