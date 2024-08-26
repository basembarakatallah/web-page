
function Navbar() {
    return ( 
        <nav className="nav">
            <div className="logo"></div>
            <div className="navlinks">
                <a href="/about">About</a>
                <a href="/menu">Menu</a>
                <a href="/venue">Venue</a>
                <a href="/events">Events</a>
            </div>
            <div className="booknow">
                <button className="btnbook">Book Now</button>
                <div className="nav-btn-pic"></div>
            </div>
        </nav>
    );
}

export default Navbar;