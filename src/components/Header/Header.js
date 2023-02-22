import React from "react";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__content">
                    <h2 className="header__title">Список дел</h2>
                    <nav className="header__nav">
                        <ul className="header__items">
                            <li className="header__item">
                                <NavLink to="/" className="header__link">
                                    Главная
                                </NavLink>
                            </li>
                            <li className="header__item">
                                <NavLink to="/surprise" className="header__link">
                                    Сюрприз
                                </NavLink>
                            </li>
                            <li className="header__item">
                                <NavLink to="/todo" className="header__link">
                                    Список дел
                                </NavLink>                                     
                            </li>
                            <li className="header__item">
                                <NavLink to="/timer" className="header__link">
                                    Часы
                                </NavLink>
                            </li>
                        </ul>
                    </nav> 
                </div>
            </div>
        </header>
    )
}

export default Header