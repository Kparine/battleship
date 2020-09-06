import GameBoard from "../src/index";

describe("GameBoard", () => {
	it("should have a fire method", () => {
		expect(GameBoard.fire).toBeDefined();
	});
	it("should have a sunk method", () => {
		expect(GameBoard.sunk).toBeDefined();
	});

	describe("fire", () => {
		it("should call return string on miss", () => {
			const result = GameBoard.fire(0, 2);
			expect(typeof result).toBe("string");
			expect(result).toEqual("oops, you missed");
		});
	});

	describe("sunk", () => {
		it("should expect a return string like hit", () => {
			const result = GameBoard.fire(1, 9);
			expect(typeof result).toBe("string");
			expect(result).toEqual("You Hit My destroyer");
		});
		it("should expect a return string like sunk", () => {
			const result = GameBoard.fire(0, 4);
			expect(typeof result).toBe("string");
			expect(result).toEqual("You Sunk My dingy");
		});
	});
});
