import React from "react";
import "../../styles/FirstScreen.css";
const FirstScreen = () => {
    return (
        <section className="firstSection bigContainer" id="home">
            <div className="firstInfo">
                <h2>Hola! Mi nombre es</h2>
                <h1>{"< Valentino Patané />"}</h1>
                <h3>Construyo experiencias digitales.</h3>
                <p>
                    Soy desarrollador full-stack, y me especializo en la
                    construcción y diseño de experiencias digitales de calidad.
                    Aporto valor brindando soluciones tecnológicas a tus
                    problemas.
                </p>
                <div className="firstButtons">
                    <a href="mailto:valentinopatane98@gmail.com">Contacto</a>
                    <a
                        href="CV - Valentino Patané.pdf"
                        download="CV - Valentino Patané"
                    >
                        Descargar CV
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FirstScreen;
