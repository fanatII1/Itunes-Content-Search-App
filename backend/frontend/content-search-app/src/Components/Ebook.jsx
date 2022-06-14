import "./Styles/Ebook.css"

/*In this component, we want to fetch the data stored in the WebStorage API, and make sure that
we display the pieces of data(ebook) thats returned to us from the  Itunes API
*/
function Ebook() {
    let ebookData = JSON.parse(sessionStorage.getItem("ebook"));
    // console.log(ebookData)
    // console.log(ebookData.results[0].artistName)
    // console.log(ebookData.results)

    /*we going to store the specific book that was clicked into this array*/
    let array = [];
    const store = (author, image, bookTitle) =>{
        array.push({author: author, image: image, bookTile: bookTitle})
        //console.log(array)
        sessionStorage.setItem("favBook", JSON.stringify(array))
    }

    return (ebookData === null) ? (
        <div id='empty-search'>Go back and Search...</div>
    ): (
        <section id="musicRender">
        {ebookData.results.map((ebook, i)=>{
            return (
            <div key={i} className='ebookContentContainer'>
                <div className="ebookPicture">
                <img src={ebook.artworkUrl100} alt={ebook.trackName} />
                </div>
                
                <div className="ebook-description">
                    <p className="ebookAuthor">Author: {ebook.artistName}</p>
                    <p className='ebookAName'>Book Name: {ebook.trackName}</p>
                    <p className="price">Price: R{(ebook.price * 15.36).toFixed(0)}</p>
                <button className="favourites-btn" onClick={()=>{store(ebook.trackName, ebook.artworkUrl100, ebook.trackName)}}>Add To Favourites</button>
                </div>
            </div>)
         })}
     </section>
    )
  }

export default Ebook