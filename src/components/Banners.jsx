import React from 'react'

function Banners() {
  return (
    <div>
      <div className="carousel w-full h-screen pt-16">
        <div id="slide1" className="carousel-item relative w-full ">
            <img src="https://popees.com/pub/media/slideshow/cache/2000x500/AW___Web_Banner___womens_Day-01.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
            <img src="https://m.media-amazon.com/images/I/71VBt4eTg3L._SX3000_.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a> 
                <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
            <img src="https://cdn.fcglcdn.com/brainbees/banners/mktng_nonapps_base_hp_10march241709908210224.webp" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a> 
                <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
            <img src="https://cdn.fcglcdn.com/brainbees/banners/diaplove1709210117177.webp" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">❮</a> 
                <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banners
