const Engineer = require("../lib/Engineer");

test("Adds github account based off of constructor properties", () => {
  const testValue = "badassname";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Foo", 1, "test@test.com", "badassname");
  expect(e.getRole()).toBe(testValue);
});

test("Retrieve GitHub using getGithub()", () => {
  const testValue = "badassname";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});