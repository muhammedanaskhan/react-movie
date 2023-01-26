import React, { useEffect, useState } from 'react'
import axios from '../../axios';
import requests from '../../Requests';
import './Banner.css'

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => { //fetch data
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1) // gen rand no. from 0->len
                ]
            )
            return request;
        }
        fetchData();
    },[])

    console.log(movie);

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n-1) + '...' : string
    }

  return (
    <header className='banner' style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://www.solidbackgrounds.com/images/1920x1080/1920x1080-amber-orange-solid-color-background.jpg)`,
        backgroundPosition: "center center",
    }}>

    <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">     
            <button className='banner__button'>Play</button>
            <button className='banner__button'>My List</button>
        </div>
        <h1 className="banner__description">
            {truncate(
                `This is a test description
                This is a test description
                This is a test description
                This is a test description`,150
            )}
            
        </h1>
    </div>
    <div className="banner--fadeBottom"/>
    </header>
  )
}

export default Banner