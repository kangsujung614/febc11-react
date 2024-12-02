import { atom } from "jotai";

export const countAtom = atom(2);

export const updateCount = atom(
  null,
  (get, set, step) => {
      set(countAtom, step? get(countAtom) + step : 0);
  }
);