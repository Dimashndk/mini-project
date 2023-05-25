import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    msg: "",
    user: "",
    token: "",
    loading: false,
    error : false,

}

const authSlice = createSlice ({
    name:'user', 
    initialState,
    reducers: {

    },
    extraReducers:{

    }
})

export default authSlice.reducer