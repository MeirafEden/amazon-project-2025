
import React, { createContext, useReducer } from "react";

// Create context
export const DataContext = createContext();

// Initial state
const initialState = {
  user: null, // can be replaced with a dummy user for testing
  basket: [], // empty cart initially
};

// Reducer (basic template)
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] };
    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.id),
      };
    default:
      return state;
  }
};

// DataProvider component
export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={[state, dispatch]}>
      {children}
    </DataContext.Provider>
  );
};

