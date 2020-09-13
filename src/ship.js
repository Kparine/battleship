const { battleGroup } = require("./battleGroup");

const Ship = (name) => {
	const { size } = battleGroup[name];
	let hits = 0;

	const hit = () => {
		hits++;
	};

	const sunk = () => {
		hits === size;
	};

	return { name, size, hit, sunk };
};

module.exports = { Ship };
