class Rectangle {
	constructor(height, width, color) {
		this.height = height;
		this.width = width;
		this.color = color;
		this.calcArea = function () {
			return this.height * this.width;
		};
	}
}
let rect = new Rectangle(4, 5, "red");
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
