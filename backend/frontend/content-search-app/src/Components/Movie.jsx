import React from 'react'
import "./Styles/Movies.css"

/*In this component, we want to fetch the data stored in the WebStorage API, and make sure that
we display the pieces of data(movie) thats returned to us from the  Itunes API
*/
function Movie() {
    let movieData = JSON.parse(sessionStorage.getItem("movie"));
    // console.log(movieData)
    // console.log(movieData.results[0].artistName)
    // console.log(movieData.results)

      /*we going to store the specific movie that was clicked into this array*/
      let array = [];
      const storeToStorage = (movie, image, genre) =>{
          array.push({first: movie, image: image, last: genre})
          //console.log(array)
          sessionStorage.setItem("favMovie", JSON.stringify(array))
      }


    return (movieData === null) ? (
        <div id='empty-search'>Go back and Search</div>
    ) : (
        <section id="moviesRender">
            {movieData.results.map((movies, i)=>{
               return (
               <div key={i} className='movieContentContainer'>
                   <div className="moviePicture">
                   <img src={movies.artworkUrl100} alt={movies.trackName} />
                   </div>
                   
                   <div className="movie-description">
                       <p className='movieName'>Music Name:{movies.trackName}</p>
                       <p className="year-released">Genre: {movies.primaryGenreName}</p>                
                   <button onClick={()=>{storeToStorage(movies.trackName, movies.artworkUrl100, movies.primaryGenreName)}} className="favourites-btn">Add To Favourites</button>
                   </div>
               </div>)
            })}
        </section>
    )
  }

export default Movie

