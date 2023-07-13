const { configureStore } = require("@reduxjs/toolkit");
const { default: authSlice } = require("@store/Slices/authSlice");

const store = configureStore({
    reducer : {
        auth : authSlice
    }
})


export default store;