export const initialState = {
    user: null,
};

// we define here all the action types, which could be shoot from any component to reducer
export const actionTypes = {
    SET_USER: "SET_USER",
};

const reducer = (state, action) => {
    console.log(action);

    // listen for the action ty[e
    // in this case it is the only one we are going to be using
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                // whatever it currrently is in and what we update
                ...state,
                // and modify something what we want to do with that info
                // so this basically takes the payload from teh shooted action data (payload) and updates with it the user
                user: action.user
            }

    }
}