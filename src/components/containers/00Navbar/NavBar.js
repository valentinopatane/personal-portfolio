import React, { useEffect, useRef, useState } from "react";
import "../../styles/NavBar.css";
import logo from "../../img/logo.png";
import burger from "../../img/menu-svgrepo-com.svg";
const NavBar = () => {
    const [show, setShow] = useState(true);
    const [isMenuActive, setIsMenuActive] = useState(false);

    let oldValue;
    let newValue;

    const controlNavbar = () => {
        newValue = window.scrollY;
        if (oldValue < newValue) {
            setShow(false);
        } else if (oldValue > newValue) {
            setShow(true);
        }
        oldValue = newValue;
    };

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar);
        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    });

    const handleBurger = () => {
        setIsMenuActive(!isMenuActive);
    };

    const myNavRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("bigNavShow");
                }
            });
        });

        const navbar = myNavRef.current.querySelector(".bigNav");
        observer.observe(navbar);
    }, []);

    return (
        <header ref={myNavRef} className={show ? "navContainer" : "navOff "}>
            <nav className="navBar bigNav">
                <div className="logoContainer">
                    <a href="#home">
                        <img src={logo} />
                    </a>
                </div>
                <ol className={isMenuActive ? "showNav navList" : "navList"}>
                    <li className="navListItem">
                        <a href="#about" onClick={() => setIsMenuActive(false)}>
                            Acerca
                        </a>
                    </li>
                    <li className="navListItem">
                        <a
                            href="#studies"
                            onClick={() => setIsMenuActive(false)}
                        >
                            Estudios
                        </a>
                    </li>
                    <li className="navListItem">
                        <a href="#work" onClick={() => setIsMenuActive(false)}>
                            Trabajos
                        </a>
                    </li>
                    <li className="navListItem">
                        <a
                            href="#contact"
                            onClick={() => setIsMenuActive(false)}
                        >
                            Contacto
                        </a>
                    </li>
                    {/* <div className="navListItem">ENG/ESP</div> */}
                </ol>
                <div className="navBurgerMenu" onClick={handleBurger}>
                    <img src={burger} />
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
