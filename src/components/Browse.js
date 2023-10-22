import React  from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/UseNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
const Browse = () => {

useNowPlayingMovies();//call custom hook
 
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse
