function addItem() {
	//Johnny TwoShoes Cramer
	let newItemText = document.getElementById("newItemText");
	let newItemValue = document.getElementById("newItemValue");
	var menuItem = document.getElementById("menu");
	var option = document.createElement("option");
	option.textContent = newItemText.value;
	option.value = newItemValue.value;
	menuItem.add(option);
	newItemText.value = "";
	newItemValue.value = "";

	//console.log(newItemText.value);
	//console.log(newItemValue.value);
	//console.log(option);
	//console.log(menuItem);
}
