import React from 'react';
// import './Header.css'
const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                <a className="navbar-brand" href="/a">BIG OVEN</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="container collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link " aria-current="page" href="/a">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/a">Recipes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/a">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/a">CookBook</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/a">Health</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;