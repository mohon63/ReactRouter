import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const links = [
        { name: "home", location: "/" },
        { name: "about", location: "/about" },
        { name: "friends", location: "/friends" }
    ];

    const [active, setActive] = useState("home");
    console.log(active)
    return (
        <div>
            <h1>Welcome to fancy React Router!</h1>
            <nav>
                {
                    links.map((link, i) => <Link key={i} className={active === link.name ? "active" : ""} onClick={() => setActive(link.name)} to={link.location}>{link.name}</Link>)
                }
            </nav>
        </div>
    );
};

export default Header;