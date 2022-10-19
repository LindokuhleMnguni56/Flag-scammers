import { useReducer, useContext, createContext } from "react";

const initialValue = {
  langutypeage: "id"
  // other: "value",
};

const AppContext = createContext(initialValue);

const AppReducer = (state, action) => {
  switch (action.type) {
    case "PICK_TYPE":
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

const MyContext = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialValue);
  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
export default MyContext;
