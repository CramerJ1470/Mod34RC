function main() {
	let c = new Circle(2);
	console.log(`Radius: ${c.radius}`);
	console.log(`Diameter: ${c.diameter}`);
	console.log(`Area: ${c.area}`);
	c.diameter = 1.6;
	console.log(`Radius: ${c.radius}`);
	console.log(`Diameter: ${c.diameter}`);
	console.log(`Area: ${c.area}`);
}
class Circle {
	constructor(radius) {
		this.radius = radius;
		this.area = Math.PI * Math.pow(this.radius, 2);
	}
	get diameter() {
		return this.radius * 2;
	}
	set diameter(x) {
		this.radius = x / 2;
		this.area = Math.PI * Math.pow(x / 2, 2);
	}
}
main();
