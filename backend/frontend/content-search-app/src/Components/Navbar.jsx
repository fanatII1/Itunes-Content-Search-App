import React from "react";
import {Link} from "react-router-dom";

function Navbar(){
    return(
        <nav>
            <div id="heading-wrapper">
            <h1>Content-Search-App</h1>
            </div>

            <div id="navigation-links">
            <ul>
                <li><Link to="/">Search</Link></li>
                <li><Link to="/Movie">Movie</Link></li>
                <li><Link to="/Music">Music</Link></li>
                <li><Link to="/Ebook">Ebooks</Link></li>
                <li><Link to="/Favourites">Favourites</Link></li>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar