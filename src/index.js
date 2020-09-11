const { playerOneBoard } = require("./board.json");
// import Ship from "./ship";
const { Ship } = require("./ship");

const GameBoard = {
	fire: (x, y) => {
		/** validate GameBoard.fire inputs (x,y) */
		console.log("Ship ******------>>>>>>", Ship("patrol"));

		if (
			typeof x == "undefined" ||
			typeof y == "undefined" ||
			typeof x !== "number" ||
			typeof y !== "number"
		) {
			return "please enter valid coordinates";
		}

		for (let row = 0; row < playerOneBoard.length; row++) {
			for (let col = 0; col < playerOneBoard[row].length; col++) {
				/** validate that shot landed within board boundaries *****/
				if (
					y < 0 ||
					x < 0 ||
					y > playerOneBoard[row].length - 1 ||
					x > playerOneBoard.length - 1
				) {
					return "shot fell outside board boundaries";
				}

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

// export default GameBoard;
const result = GameBoard.fire(2, 3);
console.log("result ******------>>>>>>", result);
