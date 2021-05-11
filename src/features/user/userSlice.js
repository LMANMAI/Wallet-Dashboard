import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: null,
  userphoto: null,
  useremail: null,
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
  },
});

export const { setActiveUser, setUserLogOut, setPopUp } = userSlice.actions;
export const selectUserName = (state) => state.user.username;
export const selectUserPhoto = (state) => state.user.userphoto;
export const selectUserEmail = (state) => state.user.useremail;

export default userSlice.reducer;
