import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "./store"

interface BaseState {
    isLoading: boolean
    isSidebarOpen: boolean
}

const initialState: BaseState = {
    isLoading: false,
    isSidebarOpen: true
}


export const baseSlice = createSlice({
    name: 'base',
    initialState,
    reducers: {
        setLoading:(state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },
        setSidebarOpen:(state, action: PayloadAction<boolean>) => {
            state.isSidebarOpen = action.payload
        }
    }
})

export const {setLoading, setSidebarOpen} = baseSlice.actions

export const selectLoading = (state: RootState) => state.base.isLoading
export const selectIsSidebarOpen = (state: RootState) => state.base.isSidebarOpen

export default baseSlice.reducer
