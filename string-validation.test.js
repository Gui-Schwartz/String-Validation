import { validString } from "./string";

describe("String Validation Tests", () => {
  it("Valid string", () => {
    expect(validString("()")).toBe("a string é válida");
    expect(validString("([{()}])")).toBe("a string é válida");
    expect(validString("{}[](){{[]}}({[]})")).toBe("a string é válida");
    expect(validString("{[(a)]}")).toBe("a string é válida");
    expect(validString("[{(a)}bc{}()]")).toBe("a string é válida");
    expect(validString("[(abc)]")).toBe("a string é válida");
  });

  it("Invalid string", () => {
    expect(validString("123")).toBe("String inválida, contém números");
    expect(validString("{[}")).toBe("String inválida");
    expect(validString("{[)]}")).toBe("String inválida");
    expect(validString("{")).toBe("Erro, simbolos não fechados");
    expect(validString("{}[)")).toBe("String inválida");
    expect(validString("[(1)]")).toBe("String inválida, contém números");
  });
});
