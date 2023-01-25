import React from 'react'
import './Banner.css'
function Banner() {
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
            This is a test description
        </h1>
    </div>
    <div className="banner--fadeBottom"/>
    </header>
  )
}

export default Banner