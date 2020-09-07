import GameBoard from "../src/index";
const spy = jest.spyOn(GameBoard, "sunk");

describe("GameBoard", () => {
	it("should have a fire method", () => {
		expect(GameBoard.fire).toBeDefined();
	});
	it("should have a sunk method", () => {
		expect(GameBoard.sunk).toBeDefined();
	});

	describe("fire", () => {
		it("should not call sunk on invalid coordinates", () => {
			GameBoard.fire();
			expect(spy).not.toHaveBeenCalled();
		});
		it("should return on invalid coordinates", () => {
			const result = GameBoard.fire(2);
			expect(typeof result).toBe("string");
			expect(result).toEqual("please enter valid coordinates");
		});
		it("should return on invalid coordinates", () => {
			const result = GameBoard.fire("0", 2);
			expect(typeof result).toBe("string");
			expect(result).toEqual("please enter valid coordinates");
		});
		it("should call return string on shot outside board boundaries", () => {
			const result = GameBoard.fire(0, 10);
			expect(typeof result).toBe("string");
			expect(result).toEqual("shot fell outside board boundaries");
		});
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
