const expect = require("chai").expect;

const findStudentByName = require("../src/solution.js");

describe("findStudentByName", () => {
    it("should return a matching object to the student name", () => {
        const students = [
            { name: "Leo Yeon-Joo", score: 8.9 },
            { name: "Morgan Sutton", score: 7.4 },
            { name: "Natalee Vargas", score: 9.2 },
          ];
        const actual = findStudentByName(students, 'Natalee Vargas');
        const expected = { name: 'Natalee Vargas', score: 9.2 };
        expect(actual).to.eql(expected);
    })
})

describe("findStudentByName", () => {
    it("should return null whenever the name isnt present", () => {
        const students = [
            { name: "Leo Yeon-Joo", score: 8.9 },
            { name: "Morgan Sutton", score: 7.4 },
            { name: "Natalee Vargas", score: 9.2 },
          ];
        const actual = findStudentByName(students, 'Jimmy');
        expect(actual).to.be.null;
    })
})