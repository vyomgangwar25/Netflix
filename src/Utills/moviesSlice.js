import {createSlice} from "@reduxjs/toolkit";
const moviesSLice=createSlice({
    name:"movies",
    initialState:{
        NowPlayingMovies:null,
        trailerVideo:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.NowPlayingMovies=action.payload;
        },
        addTrailerVideo:(state,action)=>{
        state.trailerVideo=action.payload;
        }
    }
})
export const{addNowPlayingMovies,addTrailerVideo}=moviesSLice.actions;
export default moviesSLice.reducer;