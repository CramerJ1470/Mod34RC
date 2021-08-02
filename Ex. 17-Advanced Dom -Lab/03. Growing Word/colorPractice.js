count = 1;
while (count < 4) {
	F = "FF";
	colorCode = ["#", "00", "00", "00"];
	colorCode[colorCode.length - count] = F;
	console.log(colorCode.join(""));
	count++;
}
