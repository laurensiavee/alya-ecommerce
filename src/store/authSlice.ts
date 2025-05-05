import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "./store"

interface AuthState {
    token: string,
    userId: string,
    isLoggedIn: boolean,
    isLoading: boolean
}

const initialState: AuthState = {
    token: "",
    userId: "",
    isLoggedIn: false,
    isLoading: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload
            if(state.token != "")
                state.isLoggedIn = true
            else 
                state.isLoggedIn = false
        },
        setUserId: (state, action: PayloadAction<string>) => {
            state.userId = action.payload
        },
        setLoggedIn:(state, action: PayloadAction<boolean>) => {
            state.isLoggedIn = action.payload
        }, 
        setLoading:(state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        } 
    }
})

export const {setToken, setUserId, setLoggedIn, setLoading} = authSlice.actions

export const selectToken = (state: RootState) => state.auth.token
export const selectUserId = (state: RootState) => state.auth.userId
export const selectLoggedIn = (state: RootState) => state.auth.isLoggedIn
export const selectLoading = (state: RootState) => state.auth.isLoading

export default authSlice.reducer
