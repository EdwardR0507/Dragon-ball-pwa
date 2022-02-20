import { Characters } from "../models/Characters";

export const getCharacterByName = (name = "") => {
  if (name === "") {
    return [];
  }
  return Characters.filter((character) =>
    character.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
  );
};
