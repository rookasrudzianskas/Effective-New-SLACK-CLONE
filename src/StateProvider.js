import React, { createContext, useContext, useReducer } from "react";

// wrapping our app around this data layer, to be able to use it
export const StateContext = createContext();

// always copy it
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {/* is our app, which is wrappend by StateProvider, which is out datalayer, to be able to access any info there*/}
        {children}
    </StateContext.Provider>
);

