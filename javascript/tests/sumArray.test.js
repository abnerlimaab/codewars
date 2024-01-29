import { sumArray } from "../src/sumArray";

describe("sumArray", () => {
    it("should retuns 0 If an empty value ( null, None, Nothing etc. ) is given instead of an array", () => {
        expect(sumArray(null)).toBe(0);
    });

    it("should retuns 0 If the given array is an empty list", () => {
        expect(sumArray([])).toBe(0);
    });

    it("should retuns 0 If the given array is a list with only 1 element", () => {
        expect(sumArray([3])).toBe(0);
    });

    it("should sum all the numbers of a given array, except the highest and the lowest element", () => {
        expect(sumArray([3, 5])).toBe(0);
        expect(sumArray([6, 2, 1, 8, 10])).toBe(16);
        expect(sumArray([0, 1, 6, 10, 10])).toBe(17);
        expect(sumArray([-6, -20, -1, -10, -12])).toBe(-28);
        expect(sumArray([-6, 20, -1, 10, -12])).toBe(3);
    });
});