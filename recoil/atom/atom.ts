import { atom } from "recoil";

export const themeState = atom<boolean>({
  key: "theme",
  default: undefined,
});
