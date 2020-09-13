const { playerOneBoard } = require("./board.json");
const { Ship } = require("./ship");

const GameBoard = {
	fire: (x, y) => {
		/** validate GameBoard.fire inputs (x,y) */

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
						Ship(ship).hit();
						/** SUNK */
						if (Ship(ship).sunk()) {
							return `You sank my ${ship}`;
						}
						return `You hit my ${ship}`;
					}
					/** MISS */
					return "oops, you missed";
				}
			}
		}
	},
};

// export default GameBoard;
const result = GameBoard.fire(0, 4);
console.log("result ******------>>>>>>", result);
