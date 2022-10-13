import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 user: null
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state,action) => {
        return {...state, user: [{...action.payload}]}
    },
    logout: (state) => {
        return {...state, user: null}
    },
    
  },
  
});

export const { login, logut  } = userSlice.actions;

export const selectUser = (state) => state.user.user;
// export const selectBookMarkRestro = (state) => state.restros.bookMarkedRes;

export default userSlice.reducer;
