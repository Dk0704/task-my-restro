import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  restros: [],
  bookMarkedRes: []
};

export const restroSlice = createSlice({
  name: 'restros',
  initialState,
  reducers: {
    addToBookmark: (state,action) => {
        return {...state, bookMarkedRes: [{...action.payload}, ...state.bookMarkedRes]}
    },
    removeBookmark: (state,action) => {
        return {...state, bookMarkedRes: state.bookMarkedRes.filter((r)=> r.id !== action.payload.id)}
    },
    removeFav: (state,action) => {
        return {...state, restros: state.restros.filter((r)=> r.id !== action.payload)}
    },
    addToFav: (state, action) => {
      console.log(state,action)
       return {...state, restros: [...state.restros, {...action.payload}]}
    },
  },
  
});

export const { addToBookmark, addToFav, removeBookmark, removeFav  } = restroSlice.actions;

export const selectRestro = (state) => state.restros.restros;
export const selectBookMarkRestro = (state) => state.restros.bookMarkedRes;

export default restroSlice.reducer;
