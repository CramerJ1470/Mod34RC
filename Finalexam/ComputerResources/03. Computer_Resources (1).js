class Computer {
	constructor(ramMemory, cpuGHz, hddMemory) {
		this.ramMemory = ramMemory;
		this.cpuGHz = cpuGHz;
		this.hddMemory = hddMemory;
		this.taskManager = [];
		this.installedPrograms = new Map();
		this.installAProgram = function (name, requiredSpace) {
			//console.log(`memory available `, this.hddMemory);
			//console.log(`needed memeory: `, requiredSpace);
			if (this.installedPrograms.has(name)) {
				console.log("already installed");
			} else if (requiredSpace > this.hddMemory) {
				//	console.log(
				//		`There is not enough space on the hard drive ${name} sent to overCPU`
				//	);
				let tempProgram = {
					name: name,
					requiredSpace: requiredSpace,
					status: "over",
				};
				this.taskManager.push(tempProgram);
				//	console.log(`taskManager: `, this.taskManager);
			} else {
				this.hddMemory -= requiredSpace;
				this.installedPrograms.set(name, requiredSpace);
				//	console.log(this.installedPrograms);
			}
		};
		this.uninstallAProgram = function (name) {
			let overPrograms = [];
			for (let a = 0; a < this.taskManager.length; a++) {
				if (this.taskManager[a].status == "over") {
					overPrograms.push(this.taskManager[a]);
				}
			}
			//console.log(`over programs `, overPrograms);
			if (this.installedPrograms.has(name)) {
				let memory = this.installedPrograms.get(name);

				this.hddMemory += memory;
				this.installedPrograms.delete(name);
				if (overPrograms != "") {
					for (let d = 0; d < overPrograms.length; d++) {
						if (overPrograms[d].requiredSpace < this.hddMemory) {
							this.installAProgram(
								overPrograms[d].name,
								overPrograms[d].requiredSpace
							);
							for (let e = 0; e < this.taskManager.length; e++) {
								if (
									this.taskManager[e].name ==
									overPrograms[d].name
								) {
									this.taskManager.splice(e, 1);
								}
							}
						}
					}
				}
				//	console.log(
				//		`Removing `,
				//		name,
				//		memory,
				//		`remaining memory : `,
				//		this.hddMemory
				//	);
			} else if (!this.installedPrograms.has(name)) {
				//	console.log(name, ` not installed`);
				console.log("Control panel is not responding");
				if (overPrograms != "") {
					for (let d = 0; d < overPrograms.length; d++) {
						installAProgram(
							overPrograms[d].name,
							overPrograms.requiredSpace
						);
					}
				}
			}
		};

		this.openAProgram = function (name) {
			let openPrograms = new Map();
			for (let b = 0; b < this.taskManager.length; b++) {
				if (this.taskManager[b].status == "open") {
					openPrograms.set(
						this.taskManager[b].name,
						this.taskManager[b].requiredSpace
					);
				}
			}

			//console.log("open: ", openPrograms);
			if (!this.installedPrograms.has(name)) {
				console.log("The ", name, " is not recognized");
			} else if (this.installedPrograms.has(name)) {
				if (openPrograms.has(name)) {
					console.log("The ", name, " is already open");
				} else if (!openPrograms.has(name)) {
					let programeRequiredSpace =
						this.installedPrograms.get(name);
					let TempCurrentRamNeeded =
						(programeRequiredSpace / this.ramMemory) * 1.5;
					let TempCurrentCPUUsageNeeded =
						(programeRequiredSpace / this.cpuGHz / 500) * 1.5;
					if (
						TempCurrentRamNeeded >= this.ramMemory &&
						TempCurrentCPUUsageNeeded >= this.cpuGHz
					) {
						console.log(name` caused out of memory exception`);
					} else if (TempCurrentRamNeeded > this.ramMemory) {
						console.log(name` caused out of memory exception`);
					} else if (TempCurrentCPUUsageNeeded > this.cpuGHz) {
						console.log(name` caused out of cpu exception`);
					} else {
						let item = {
							name: name,
							ramUsage: TempCurrentRamNeeded,
							cpuUsage: TempCurrentCPUUsageNeeded,
						};
						this.taskManager.push(item);
						//	console.log(
						//		`item added to open in taskManager: `,
						//		this.taskManager
						//	);
					}
				}
			}
		};
		this.taskManagerView = function () {
			let openPrograms = [];
			console.log(this.taskManager[0]);
			for (let b = 0; b < this.taskManager.length; b++) {
				if (!this.taskManager[b].status) {
					openPrograms.push(this.taskManager[b]);
				}
			}
			//console.log(`open Programs `, openPrograms);
			if (openPrograms == "") {
				console.log("All running smooth so far");
			} else {
				//console.log(openPrograms.length);
				for (let x = 0; x < openPrograms.length; x++) {
					console.log(
						`Name - ${
							openPrograms[x].name
						} | Usage - CPU: ${Math.round(
							openPrograms[x].cpuUsage
						)}%, RAM: ${Math.round(openPrograms[x].ramUsage)}%`
					);
				}
			}
		};
	}
}

let computer = new Computer(4096, 7.5, 25000);
computer.installAProgram("Word", 7300);
computer.installAProgram("Excel", 10240);
computer.installAProgram("PowerPoint", 12288);
computer.uninstallAProgram("Word");
computer.installAProgram("Solitare", 1500);
console.log("_".repeat(50));
computer.openAProgram("Excel");
computer.openAProgram("Solitare");

console.log(computer.installedPrograms);
console.log("_".repeat(50));
console.log(computer.taskManager);
/*
let computer = new Computer(4096, 7.5, 250000);
computer.installAProgram("Word", 7300);
computer.installAProgram("Excel", 10240);
computer.installAProgram("PowerPoint", 12288);
computer.installAProgram("Solitare", 1500);
computer.openAProgram("Word");
computer.openAProgram("Excel");
computer.openAProgram("PowerPoint");
computer.openAProgram("Solitare");
console.log(computer.taskManagerView());

*/
/* [
	{ name: 'Excel', requiredSpace: 10240 },
	{ name: 'PowerPoint', requiredSpace: 12288 },
	{ name: 'Solitare', requiredSpace: 1500 }
  ]
  --------------------------------------------------
  [
	{ name: 'Excel', ramUsage: 3.75, cpuUsage: 4.096 },
	{
	  name: 'Solitare',
	  ramUsage: 0.54931640625,
	  cpuUsage: 0.6000000000000001
	}
  ]
  /mnt/c3175o97aret5tft1o9g/2895145865609168827-0.code:44
                            this.overCpu[0].name,
*/
