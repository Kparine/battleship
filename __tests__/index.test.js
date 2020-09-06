import GameBoard from "../src/index";

const spyFire = jest.spyOn(GameBoard, "fire");
const spySunk = jest.spyOn(GameBoard, "sunk");
// jest.mock("GameBoard")

describe("GameBoard", () => {
	it("should have a fire method", () => {
		expect(GameBoard.fire).toBeDefined();
	});
	it("should have a sunk method", () => {
		expect(GameBoard.sunk).toBeDefined();
	});

	describe("fire", () => {
		beforeEach(() => {
			jest.clearAllMocks();
		});
		it("should not call sunk on invalid coordinates", () => {
			GameBoard.fire();
			expect(spyFire).toHaveBeenCalled();
			expect(spySunk).not.toHaveBeenCalled();
		});
		it("should return on invalid coordinates", () => {
			const result = spyFire(2);
			expect(typeof result).toBe("string");
			expect(result).toEqual("please enter valid coordinates");
		});
		it("should return on invalid coordinates", () => {
			const result = spyFire("0", 2);
			expect(typeof result).toBe("string");
			expect(result).toEqual("please enter valid coordinates");
		});
		it("should call return string on miss", () => {
			const result = spyFire(0, 2);
			console.log("result ******------>>>>>>", result);
			expect(typeof result).toBe("string");
			expect(result).toEqual("oops, you missed");
		});
	});

	// describe("sunk", () => {
	// 	it("should expect a return string like hit", () => {
	// 		const result = GameBoard.fire(1, 9);
	// 		expect(typeof result).toBe("string");
	// 		expect(result).toEqual("You Hit My destroyer");
	// 	});
	// 	it("should expect a return string like sunk", () => {
	// 		const result = GameBoard.fire(0, 4);
	// 		expect(typeof result).toBe("string");
	// 		expect(result).toEqual("You Sunk My dingy");
	// 	});
	// });
});
