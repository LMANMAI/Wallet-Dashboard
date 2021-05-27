import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  menu: false,
  formulario: false,
  cards: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.user = action.payload;
    },
    setUserLogOut: (state) => {
      state.user = null;
    },
    setMenuPosition: (state, action) => {
      state.menu = action.payload;
    },
    setFormPosition: (state, action) => {
      state.formulario = action.payload;
    },
    setCards: (state, action) => {
      state.cards = action.payload;
    },
  },
});

export const {
  setActiveUser,
  setUserLogOut,
  setMenuPosition,
  setFormPosition,
  setCards,
} = userSlice.actions;
export const selectUserName = (state) => state.user.username;
export const selectUserPhoto = (state) => state.user.userphoto;
export const selectUserEmail = (state) => state.user.useremail;
export const selectMenuState = (state) => state.user.menu;
export const selectFormState = (state) => state.user.formulario;
export const selectCardState = (state) => state.user.cards;

export default userSlice.reducer;
