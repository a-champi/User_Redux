import { createSlice } from "@reduxjs/toolkit";
import { usersData }  from "./data.js"



export const usersSlice = createSlice({
    name : "users",

    initialState : { value: usersData},
    
    reducers: {
        //AddUser
         addUsers: (state, action) => {
             state.value.push(action.payload);
         },
        //DeleteUser
        deleteUser: (state, action) =>{
            state.value = state.value.filter((user) => action.payload.id !== user.id);
        },
        //updateUsername
        updateUsername: (state, action) => {
            state.value.map((user) => {
                if(user.id === action.payload.id){
                    user.username = action.payload.username           
                }
            })    
        }
        
    },
})

export const {addUsers, deleteUser, updateUsername} = usersSlice.actions; 

export default usersSlice.reducer;
