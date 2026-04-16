import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import type { State } from "./types";
import { checkAuthThunk, loginThunk, logoutThunk, registrationThunk } from "./userThunks";
import { STATUS_LOADING } from "@/constants/constants";

const initialState: State = {
    user: null,
    isAuth: false,
    status: "",
    error: "",
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(logoutThunk.fulfilled, (state) => {
            state.status = STATUS_LOADING.RESOLVED;
            state.isAuth = false;
            state.user = null;
        });
        builder.addMatcher(isAnyOf(loginThunk.pending, registrationThunk.pending, checkAuthThunk.pending), (state) => {
            state.status = STATUS_LOADING.LOADING;
            state.error = "";
        });
        builder.addMatcher(
            isAnyOf(loginThunk.fulfilled, registrationThunk.fulfilled, checkAuthThunk.fulfilled),
            (state, action) => {
                state.status = STATUS_LOADING.RESOLVED;
                state.isAuth = true;
                state.user = action.payload.user;
                console.log(state.user);
            },
        );
        builder.addMatcher(
            isAnyOf(loginThunk.rejected, registrationThunk.rejected, checkAuthThunk.rejected),
            (state, action) => {
                state.status = STATUS_LOADING.REJECTED;
                state.error = (action.payload as string) ?? "Error";
            },
        );
    },
});

export const userReducer = userSlice.reducer;
