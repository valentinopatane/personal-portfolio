import React, { useEffect, useState } from "react";
import "../../styles/Contact.css";
import githubLogo from "../../img/github";
import instagramLogo from "../../img/ig";
import linkedinLogo from "../../img/linkd";
import emailjs from "@emailjs/browser";
const Contact = () => {
    const [messageSent, setMessageSent] = useState(false);
    function sendEmail(e) {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_0337e4m",
                "template_9a7uz2g",
                e.target,
                "wWWjThTX9_YfkBwTq"
            )
            .then((res) => setMessageSent(true))
            .then((res) => e.target.reset())
            .then((res) => setTimeout(() => setMessageSent(false), 5000))
            .catch((e) => console.log(e));
    }
    return (
        <section id="contact" className="contactBody bigContainer">
            <div className="subTitle">
                <h2 id="contactTitle">Contacto</h2>
                <div className="line"></div>
            </div>
            <div className="contactDataContainer">
                <form className="contactForm" onSubmit={sendEmail}>
                    <h6 className="contactDataTitle">Enviame un mensaje:</h6>
                    <input
                        type="text"
                        name="user_name"
                        placeholder="Nombre"
                    ></input>
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Email"
                    ></input>
                    <textarea
                        type="text"
                        name="user_message"
                        placeholder="Mensaje"
                    ></textarea>
                    <button type="submit">Enviar</button>
                    {messageSent ? (
                        <span className="messageSent">¡Mensaje Enviado!</span>
                    ) : null}
                </form>
                <div className="contactData">
                    <h6 className="contactDataTitle">
                        Descarga mi curriculum:
                    </h6>

                    <a
                        className="cv"
                        href="CV - Valentino Patané.pdf"
                        download="CV - Valentino Patané"
                    >
                        Descargar CV
                    </a>

                    <h6 className="contactDataTitle">Descubre mis redes:</h6>
                    <ul className="contactSocials">
                        <li>
                            <a
                                href="https://github.com/valentinopatane"
                                target="_BLANK"
                            >
                                {githubLogo}
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/valenpatanee/"
                                target="_BLANK"
                            >
                                {instagramLogo}
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/valentino-patane/"
                                target="_BLANK"
                            >
                                {linkedinLogo}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Contact;
