const calc = require("../calc");

test("dateDiff", () => {
    expect(calc.dateDiff(new Date(2022, 10, 11), new Date(2022, 10, 12))).toBe(1);
    expect(calc.dateDiff(new Date(2022, 10, 11), new Date(2022, 10, 11))).toBe(0);
});

test("calcPillColor", () => {
    expect(calc.calcPillColor(6)).toBe("赤");
    expect(calc.calcPillColor(7)).toBe("白");
    expect(calc.calcPillColor(11)).toBe("白");
    expect(calc.calcPillColor(12)).toBe("オレンジ");
    expect(calc.calcPillColor(21)).toBe("オレンジ");
    expect(calc.calcPillColor(22)).toBe("白");
});

test("calcProgressDay", () => {
    expect(calc.calcProgressDay(28)).toBe(28);
    expect(calc.calcProgressDay(29)).toBe(2);
});