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
        const result = validations("longenough&tGamerTag");
        expect(result).toBeTruthy();
    });

    test("gamertag is less than 8 characters", () => {
        const result = validations("short&");
        expect(result).toBeFalsy();
    });

    //special character
    test("gamertag doesn't contain special", () => {
        const result = validations("longenoughfezagze");
        expect(result).toBeFalsy();
    });
    test("gamertag contains special", () => {
        const result = validations("&longenoughfezagze");
        expect(result).toBeTruthy();
    });
});



// TODO: Create tests suite for validation function
