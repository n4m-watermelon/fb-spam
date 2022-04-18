import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import meApi from "../services/me";

export interface LoginState {
  isLogined: boolean;
  data: any;
}

const initialState: LoginState = {
  isLogined: false,
  data: {},
};

export const onLoginAsync = createAsyncThunk("login/onLogin", async () => {
  const response = await meApi.getMe();
  return response.data;
});

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setIsLogIn: (state, { payload }) => {
      state.isLogined = payload;
    },
    setIsLogout: (state) => {
      state.isLogined = false;
      state.data = null;
    },
    setDataLogin: (state, { payload }) => {
      state.data = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(onLoginAsync.pending, (state) => {})
      .addCase(onLoginAsync.fulfilled, (state, action) => {});
  },
});

export const { setIsLogIn, setIsLogout, setDataLogin } = loginSlice.actions;
export const selectIsLogin = (state: RootState) => state.login.isLogined;
export const selectDataLogin = (state: RootState) => state.login.data;
export default loginSlice.reducer;
