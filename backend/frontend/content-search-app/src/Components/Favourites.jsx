import React from 'react'
import "./Styles/Favourites.css"

/*we goin to fetch the "favourite items" from the WebStorage and display them in here*/
function Favourites() {
    let favBookData = JSON.parse(sessionStorage.getItem("favBook"));
    let favMusicData = JSON.parse(sessionStorage.getItem("favMusic"));
    let favMovieData = JSON.parse(sessionStorage.getItem("favMovie"));

    let storageData = [favBookData, favMusicData, favMovieData];
    //console.log(storageData) --> certain items in array are null

    //we create an array that has no null values
    let definedStorage = storageData.filter(checkData);
    function checkData (data){
        return data != null;
    }

    console.log(definedStorage[0])

  return (storageData === null) ? (
    <p>Go back and Search...</p>
  ) :(
    <section id="favouriteItemRender">
    {definedStorage[0].map((favouriteItem, i)=>{
        return (
         <div key={i} className='favouriteItemContainer'>
             <div className="favouriteItemPicture" id={favouriteItem.image}>
             <img src={favouriteItem.image} alt={favouriteItem.image} />
             </div>
             
             <div className="favouriteItem-description">
                 <p className="favouriteItemAuthor">Item Heading: {favouriteItem.first}</p>
                 <p className='favouriteItemAName'>Item Sub-Heading: {favouriteItem.last}</p>
                 <button><a href="https://itunes.apple.com/us/movie/">Get from iTunes</a></button>
             </div>
         </div>)
     })}
    </section>
  )
}

export default Favourites