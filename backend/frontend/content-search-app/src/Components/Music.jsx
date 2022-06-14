import React from 'react'
import "./Styles/Music.css"

/*In this component, we want to fetch the data stored in the WebStorage API, and make sure that
we display the pieces of data(music) thats returned to us from the  Itunes API
*/
function Music() {
    let musicData = JSON.parse(sessionStorage.getItem("musicTrack"));
    // console.log(musicData)
    // console.log(musicData.results[0].artistName)
    // console.log(musicData.results)

      /*we going to store the specific muisc that was clicked into this array*/
      let array = [];
      const storeToStorage = (artist, image, genre) =>{
          array.push({first: artist, image: image, last: genre})
          //console.log(array)
          sessionStorage.setItem("favMusic", JSON.stringify(array))
      }

    return (musicData === null) ? (
       <div id='empty-search'>Go back and Search...</div>
    ) :
    (
        <section id="musicRender">
        {musicData.results.map((music, i)=>{
            return (
            <div key={i} className='musicContentContainer'>
                <div className="musicPicture">
                <img src={music.artworkUrl100} alt={music.trackName} />
                </div>
                
                <div className="music-description">
                    <p className="artistName">Artist: {music.artistName}</p>
                    <p className='musicName'>Song Name: {music.trackName}</p>
                    <p className="Genre">Genre: {music.primaryGenreName}</p>
                <button onClick={()=>{storeToStorage(music.trackName, music.artworkUrl100, music.trackName)}} className="favourites-btn">Add To Favourites</button>
                </div>
            </div>)
         })}
     </section>
    )
    
  }

export default Music