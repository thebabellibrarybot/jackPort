import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/nav.css';

const Nav = () => {

    const navigate = useNavigate();

    return (
        <nav>
            <div className="nav"><p onClick={() => navigate("/about&jack")}>jack's shop</p></div>
        </nav>
    )
}

export default Nav;
