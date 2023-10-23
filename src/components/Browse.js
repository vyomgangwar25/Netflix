import React  from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/UseNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import UsePopularMovies from '../hooks/UsePopularMovies';
import UseTopRated from '../hooks/UseTopRated';
import UseUpComming from '../hooks/UseUpComming';
 
const Browse = () => {

useNowPlayingMovies();//call custom hook(fetching the now playing movies and updating the store)
UsePopularMovies();//fetching the popular movies and updating the store
UseTopRated();
UseUpComming();
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse
