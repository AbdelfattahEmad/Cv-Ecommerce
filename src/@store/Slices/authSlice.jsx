import { createSlice } from '@reduxjs/toolkit';

const initState = {
    user : null,
    isLogged : false
}

export const authSlice = createSlice({
    name : 'auth',
    initialState : initState,
    reducers : {
        login(state,action){
            if(action.payload){
                state.user = action.payload
                state.isLogged = true;
            }
        },
        logout(state,action){
            state.user = null;
            state.isLogged = false;
        }
    }
})


export const authActions = authSlice.actions;


export default authSlice.reducer;