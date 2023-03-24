import { createSlice } from "@reduxjs/toolkit";
import { IUSerInbformation } from "../../types";

const INITIAL_STATE_USER_INFO: IUSerInbformation = {
    name: undefined,
    imageUser: undefined,
    emailUser: undefined
}


const userReduce = createSlice({
    name: "user",
    initialState: INITIAL_STATE_USER_INFO,
    reducers: {
        setUser(state, action) {
            Object.assign(state, {
                name: action.payload.name,
                imageUser: action.payload.imageUser,
                emailUser: action.payload.emailUser
            })
        }
    }
})

export const { setUser } = userReduce.actions
export default userReduce.reducer