const { isEmpty } = require("../validations");

describe("validations tests suites - isEmpty", () => {
    test("should return true as the label is undefined", () => {
        const result = isEmpty();
        expect(result).toBe(true);
    });

    test("should return true as the label is empty", () => {
        const result = isEmpty("");
        expect(result).toBe(true);
    });

    test("should return false as the label is empty", () => {
        const result = isEmpty("Label");
        expect(result).toBe(false);
    });
});

const validations = require("../validations");

describe("validation function tests", () => {
    test("gamertag is at least 8 characters", () => {
        //length
        const result = validations("&longenoughfezagze99");
        expect(result).toBeTruthy();
    });
    test("gamertag is less than 8 characters", () => {
        const result = validations("&short&9");
        expect(result).toBeFalsy();
    });

    //special character
    test("gamertag doesn't contain special", () => {
        const result = validations("longenoughfezagze99");
        expect(result).toBeFalsy();
    });
    test("gamertag contains special", () => {
        const result = validations("&&longenoughfezagze99");
        expect(result).toBeTruthy();
    });

    test("gamertag doesn't contain number", () => {
        const result = validations("&longenoughfezagze");
        expect(result).toBeTruthy();
    });

    test("gamertag contains number", () => {
        const result = validations("&longenoughfezagze99");
        expect(result).toBeTruthy();
    });
});

// TODO: Create tests suite for validation function
