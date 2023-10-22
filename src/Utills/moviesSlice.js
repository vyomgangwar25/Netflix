import {createSlice} from "@reduxjs/toolkit";
const moviesSLice=createSlice({
    name:"movies",
    initialState:{
        NowPlayingMovies:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.NowPlayingMovies=action.payload;
        }
    }
})
export const{addNowPlayingMovies}=moviesSLice.actions;
export default moviesSLice.reducer;