import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <>
            <header className="header">
                <h1>LP Valorant</h1>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Caracteristicas</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </nav>
            </header>
        </>
    );
};
export default Header;