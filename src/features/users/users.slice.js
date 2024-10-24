import { createSlice } from "@reduxjs/toolkit"
import { getUsers } from "./users.api"

const initialState = {
    accounts: [],
    status: ""
}

const UserSlice = createSlice({
    name: "users",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.pending, (state, action) => {
                console.log(action)
                state.status = "Loading ..."

            })
            .addCase(getUsers.fulfilled, (state, action) => {
                console.log(action)
                state.status = "Success"
                state.accounts = action.payload
            })
    }
})

export const UserReducer = UserSlice.reducer