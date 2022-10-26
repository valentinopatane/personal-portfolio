import React, { useEffect, useRef } from "react";

import FirstScreen from "../01Landing/FirstScreen";
import NavBar from "../00Navbar/NavBar";
import About from "../02About/About";

import githubLogo from "../../img/github";
import instagramLogo from "../../img/ig";
import linkedinLogo from "../../img/linkd";

import "../../styles/Home.css";
import Studies from "../03Studies/Studies";
import Works from "../04Works/Works";
import Contact from "../05Contact/Contact";

const Home = () => {
    const myRef = useRef(null);
    const socialsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        });

        const containers = myRef.current.querySelectorAll(".bigContainer");
        containers.forEach((element) => observer.observe(element));
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("showSocials");
                }
            });
        });

        const socialDiv = socialsRef.current;
        observer.observe(socialDiv);
    }, []);
    return (
        <div ref={myRef}>
            <NavBar />
            <main>
                <div ref={socialsRef} className="bigSocials">
                    <div className="socialsContainer">
                        <ul>
                            <li>
                                <a
                                    href="https://github.com/valentinopatane"
                                    target="_BLANK"
                                >
                                    {githubLogo}
                                    <span>GitHub</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/valenpatanee/"
                                    target="_BLANK"
                                >
                                    {instagramLogo} <span>Instagram</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/valentino-patane/"
                                    target="_BLANK"
                                >
                                    {linkedinLogo} <span>LinkedIn</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="mailContainer">
                        <ul>
                            <li>
                                <a
                                    href="mailto:valentinopatane98@gmail.com"
                                    target="_BLANK"
                                >
                                    <span>valentinopatane98@gmail.com</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <FirstScreen />
                <About />
                <Studies />
                <Works />
                <Contact />
            </main>
        </div>
    );
};

export default Home;
