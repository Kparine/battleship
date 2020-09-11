const { battleGroup } = require("./battleGroup");

const Ship = (name) => {
	const { size } = battleGroup[name];

	const hit = () => {
		this.hits += 1;
		console.log(`You hit ${this.name}`);
		if (this.sunk()) {
			return console.log(`You sunk ${this.name}`);
		}
	};

	const sunk = () => {
		if (this.hits === this.size) {
			return true;
		}
		return false;
	};

	return { name, size, hit, sunk };
};

module.exports = { Ship };
