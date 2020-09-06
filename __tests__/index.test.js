import GameBoard from "../src/index";

describe("GameBoard", () => {
	it("should have a fire method", () => {
		expect(GameBoard.fire).toBeDefined();
	});
	it("should have a sunk method", () => {
		expect(GameBoard.sunk).toBeDefined();
	});
});
