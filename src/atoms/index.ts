import { atom } from "jotai";

export const authFormAtom = atom("email");
export const authFormValuesAtom = atom({
  email: "",
  name: "",
  password: "",
});
