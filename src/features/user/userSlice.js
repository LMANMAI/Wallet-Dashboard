import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  menu: false,
  formulario: false,
  cards: [],
  modal: false,
  account: "",
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
    setModal: (state, action) => {
      state.modal = action.payload;
    },
    setAccount: (state, action) => {
      state.account = action.payload[0];
    },
  },
});

export const {
  setActiveUser,
  setUserLogOut,
  setMenuPosition,
  setFormPosition,
  setCards,
  setModal,
  setAccount,
} = userSlice.actions;
export const selectUser = (state) => state.user.user;
export const selectMenuState = (state) => state.user.menu;
export const selectFormState = (state) => state.user.formulario;
export const selectCardState = (state) => state.user.cards;
export const selectModalState = (state) => state.user.modal;
export const selectAccountState = (state) => state.user.account;

export default userSlice.reducer;
