import { createContext, useState } from "react";
export let DropDownApi = createContext();

let DropDownApiProvider = ({ children }) => {
  let [state, setState] = useState(false);
  let [drop, setDrop] = useState(true);
  let makeToggleit = () => {
    setState(!state);
  };
  let handleDrop = () => {
    setDrop(!drop);
  };
  return (
    <DropDownApi.Provider value={{ state, makeToggleit, handleDrop, drop }}>
      {children}
    </DropDownApi.Provider>
  );
};
export default DropDownApiProvider;
