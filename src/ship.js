const { battleGroup } = require("./battleGroup");

const Ship = (name) => {
	const { size, hits } = battleGroup[name];

	const hit = () => {
		return battleGroup[name].hits++;
	};

	const sunk = () => {
		return hits === size;
	};

	return { name, size, hit, sunk };
};

module.exports = { Ship };
