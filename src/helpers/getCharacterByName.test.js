import { getCharacterByName } from "./getCharacterByName";
describe("Tests on getCharacterByName", () => {
  test("Should be return a character", () => {
    const character = getCharacterByName("Goku");
    expect(character).toHaveLength(1);
  });
  test("Should be return a empty array if name is empty", () => {
    const character = getCharacterByName("");
    expect(character).toHaveLength(0);
  });
});
