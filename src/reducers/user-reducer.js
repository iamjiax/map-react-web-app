import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loggedIn: true,
    user: {
      name: "Jia",
      email:"xu.jia3@northeastern.edu"
    }
  },
  reducers: {},
  extraReducers: {}
});

export default userSlice.reducer;

