/** Main Board
 *
 * Fire Method Considerations:
 *  1. Check Coordinate
 * 	2. Is coordinate === 'x', if (yes), then 'MISS', else 'HIT'
 * 	3. Check board for remaining Ship type (s1, etc.), if (no), then 'SANK', else false
 *
 */

const playerOneBoard = [
	["x", "x", "x", "x", "dingy", "x", "x", "x", "x", "x"],
	["x", "x", "x", "x", "x", "x", "x", "x", "x", "destroyer"],
	["x", "x", "cruiser", "cruiser", "cruiser", "x", "x", "x", "x", "destroyer"],
	["x", "x", "x", "x", "x", "x", "x", "x", "x", "destroyer"],
	["x", "x", "x", "x", "x", "x", "x", "x", "x", "destroyer"],
];

const GameBoard = {
	fire: (x, y) => {
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
					return console.log("\x1b[34m", "You've Missed");
				}
			}
		}
	},
	sunk: (ship) => {
		for (let i = 0; i < playerOneBoard.length; i++) {
			for (let j = 0; j < playerOneBoard[i].length; j++) {
				if (playerOneBoard[i][j] === ship) {
					return console.log("\x1b[33m", "You Hit My", ship);
				}
			}
		}
		return console.log("\x1b[31m", "You Sunk My", ship);
	},
};

GameBoard.fire(0, 4);
export default GameBoard;
