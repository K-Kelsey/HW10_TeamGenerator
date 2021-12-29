const Intern = require("../lib/Intern");

test("Can set school value using constructor", () => {
  const testValue = "Hogwarts";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Foo", 1, "test@test.com", "Hogwarts");
  expect(e.getRole()).toBe(testValue);
});

test("Should return school using getSchool()", () => {
  const testValue = "Hogwarts";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});