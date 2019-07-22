const { formatDate } = require("./utils");

describe("formatDate", () => {
  it("returns the str date in the right format", () => {
    expect(formatDate(1563785008)).toEqual("Mon Jan 19 1970 03:23:05");
    expect(formatDate(720615619)).toEqual("Fri Jan 09 1970 09:10:15");
  });
});
