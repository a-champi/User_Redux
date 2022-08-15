import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name : "user",

    initialState : { value: { name: "", age: 0, email: ""}},
    
    // reducer
    reducers : {
        login: (state, action) => {
            state.value = action.payload;
        },
    },
})

export default userSlice.actions.reducers
