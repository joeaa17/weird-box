import { useEffect, useState } from "react";

type StateSetter<T> = (val: React.SetStateAction<T>) => void;
export type SharedStateHook<T> = [T, StateSetter<T>];
export type SharedStateHookCallback<T> = (setter: StateSetter<T>) => undefined | (() => void);

export const createSharedStateHook = <T>(init: T): (() => SharedStateHook<T>) => {
  const stateSetters: React.Dispatch<React.SetStateAction<T>>[] = [];

  const setAllStates: StateSetter<T> = (val: React.SetStateAction<T>) => {
    stateSetters.forEach((set) => set(val));
  };

  return (): SharedStateHook<T> => {
    const [state, setState] = useState(init);

    useEffect(() => {
      const length = stateSetters.push(setState);
      return () => void stateSetters.splice(length - 1, 1);
    }, []);

    return [state, setAllStates];
  };
};