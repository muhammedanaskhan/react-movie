import React from 'react'
import './HomeScreen.css'
import Nav from './Nav/Nav'
import Banner from './Banner/Banner'
import requests from '../Requests'
import Row from './Row/Row'

function HomeScreen() {
  return (
    <div className='homescreen'>
        <Nav/>
        <Banner/>
        <Row 
          title="REACT MOVIE ORIGINALS"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />
        <Row title="Trending Now" fetchUrl={requests.fetchNetflixOriginals} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    
    </div>
  )
}

export default HomeScreen