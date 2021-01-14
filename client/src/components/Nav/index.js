import React from "react";


// ToDo : make the nav bar working
function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">
                Google Search Books
            </a>
            <a className="navbar" href="/search">
                Search Books
            </a>
            <a className="navbar" href="/saved">
                View Saved Books
            </a>
        </nav>
    );
}

export default Nav;
