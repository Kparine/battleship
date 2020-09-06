const playerOneBoard = [
	["x", "x", "x", "x", "dingy", "x", "x", "x", "x", "x"],
	["x", "x", "x", "x", "x", "x", "x", "x", "x", "destroyer"],
	["x", "x", "cruiser", "cruiser", "cruiser", "x", "x", "x", "x", "destroyer"],
	["x", "x", "x", "x", "x", "x", "x", "x", "x", "destroyer"],
	["x", "x", "x", "x", "x", "x", "x", "x", "x", "destroyer"],
];

const GameBoard = {
	fire: (x, y) => {
		if (!x || !y || (typeof x && y !== "string")) {
			return "please enter valid coordinates";
		}

		for (let row = 0; row < playerOneBoard.length; row++) {
			for (let col = 0; col < playerOneBoard[row].length; col++) {
				if (row === x && col === y) {
					if (playerOneBoard[row][col] !== "x") {
						/** HIT */
						const ship = playerOneBoard[row][col];
						playerOneBoard[row][col] = "hit";
						return GameBoard.sunk(ship);
					}
					/** MISS */
					return "oops, you missed";
				}
			}
		}
	},
	sunk: (ship) => {
		console.log(ship);
		for (let i = 0; i < playerOneBoard.length; i++) {
			for (let j = 0; j < playerOneBoard[i].length; j++) {
				if (playerOneBoard[i][j] === ship) {
					return `You Hit My ${ship}`;
				}
			}
		}
		return `You Sunk My ${ship}`;
	},
};

export default GameBoard;
