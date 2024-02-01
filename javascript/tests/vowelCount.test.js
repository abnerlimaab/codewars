import { vowelCount } from "../src/vowelCount";

describe("vowelCount", () => {
    it("should return 5 for 'abracadabra'", () => {
        expect(vowelCount("abracadabra")).toBe(5);
    });
});