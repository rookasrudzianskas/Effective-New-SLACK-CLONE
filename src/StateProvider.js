import React, { createContext, useContext, useReducer } from "react";

// wrapping our app around this data layer, to be able to use it
export const StateContext = createContext();

// always copy it
export const StateProvider = ({ reducer, initialState, children }) => (
    // reducer listens for any kind of actions, youshoot to the data layer. reducer is the place, where listening for event happens
    // initialState is basically how the data layer looks like, before we do anything about it
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {/* is our app, which is wrappend by StateProvider, which is out datalayer, to be able to access any info there*/}
        {children}
    </StateContext.Provider>
);

// this is how we access the data layer inside all the other components
export const useStateValue = () => useContext(StateContext);