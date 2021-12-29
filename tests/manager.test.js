const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Should set office number because of constructor properties", () => {
  const testValue = 20;
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const e = new Manager("Foo", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("Retrieves office number using getOffice()", () => {
  const testValue = 1010;
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});