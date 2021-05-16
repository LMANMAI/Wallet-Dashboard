import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: null,
  userphoto: null,
  useremail: null,
  menu: false,
  formulario: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.username = action.payload.username;
      state.userphoto = action.payload.userphoto;
      state.useremail = action.payload.useremail;
    },
    setUserLogOut: (state) => {
      state.username = null;
      state.userphoto = null;
      state.useremail = null;
    },
    setMenuPosition: (state, action) => {
      state.menu = action.payload;
    },
    setFormPosition: (state, action) => {
      state.formulario = action.payload;
    },
  },
});

export const {
  setActiveUser,
  setUserLogOut,
  setMenuPosition,
  setFormPosition,
} = userSlice.actions;
export const selectUserName = (state) => state.user.username;
export const selectUserPhoto = (state) => state.user.userphoto;
export const selectUserEmail = (state) => state.user.useremail;
export const selectMenuState = (state) => state.user.menu;
export const selectFormState = (state) => state.user.formulario;
export default userSlice.reducer;
