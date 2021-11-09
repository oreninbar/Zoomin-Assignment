import React from "react";
import { useLocalObservable } from "mobx-react";
import { UserStore } from "./userStore";
const StoreContext = React.createContext();

export const StoreProvider = ({ children }) => {
  const user_store = useLocalObservable(() => new UserStore());

  

  return (
    <StoreContext.Provider value={user_store}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => React.useContext(StoreContext);
