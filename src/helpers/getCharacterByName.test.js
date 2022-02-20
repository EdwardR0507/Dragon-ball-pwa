import { getCharacterByName } from "./getCharacterByName";
describe("Tests on getCharacterByName", () => {
  test("Should be return a character", () => {
    const character = getCharacterByName("Goku");
    expect(character).toHaveLength(1);
  });
  test("Should be return a empty array", () => {
    const character = getCharacterByName("Pikachu");
    expect(character).toHaveLength(0);
  });
});
