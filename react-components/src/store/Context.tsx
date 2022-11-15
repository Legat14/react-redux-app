import { createContext } from 'react';

const Context = createContext<{
  functions: {
    highliteLink: (linkToHighlite: number, nav?: HTMLElement) => void;
  };
}>({
  functions: {
    highliteLink: () => {},
  },
});

export default Context;
