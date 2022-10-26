import React from "react";
import "../../styles/About.css";
import personal from "../../img/personal.png";

import htmlIcon from "../../img/html.svg";
import cssIcon from "../../img/css.svg";
import nodeIcon from "../../img/node.svg";
import jsIcon from "../../img/js.svg";
import mongoIcon from "../../img/mongo.svg";
import reactIcon from "../../img/react.svg";
import expressIcon from "../../img/express.svg";
import photoshopIcon from "../../img/photoshop.svg";

const About = () => {
    return (
        <section className="aboutSection bigContainer" id="about">
            <div className="subTitle">
                <h2 id="aboutTitle">Acerca de</h2>
                <div className="line"></div>
            </div>
            <div className="aboutInfo">
                <div className="aboutPara">
                    <p>
                        Hola! Mi nombre es Valentino y disfruto de la
                        programación como medio para crear cosas increíbles. Mi
                        interés por el desarrollo web comenzó a principios del
                        2021 cuando descubrí, a través de la curiosidad, cómo
                        construir una página web con HTML y CSS. ¡Desde ese
                        momento no pude parar!
                        <br />
                        <br />
                        En la actualidad trabajo de manera independiente sin
                        dejar de lado mi ruta de aprendizaje, incorporando
                        nuevas tecnologías que me permiten llevar a cabo día a
                        día ideas más complejas.
                        <br />
                        <br />
                        Mi principal objetivo hoy en día es continuar creciendo
                        como profesional dentro del mundo IT, el cuál me parece
                        fascinante y lleno de desafíos.
                        <br />
                        <br />
                        Acá hay algunas de las tecnologías con las que he estado
                        trabajando recientemente:
                    </p>
                    <ul className="skillList">
                        <li>
                            <img src={htmlIcon} />
                            HTML
                        </li>
                        <li>
                            <img src={cssIcon} />
                            CSS
                        </li>
                        <li>
                            <img src={jsIcon} />
                            JS
                        </li>
                        <li>
                            <img src={photoshopIcon} />
                            Photoshop
                        </li>
                        <li>
                            <img src={mongoIcon} />
                            Mongo
                        </li>
                        <li>
                            <img src={expressIcon} />
                            Express
                        </li>
                        <li>
                            <img src={reactIcon} />
                            ReactJS
                        </li>
                        <li id="studies">
                            <img src={nodeIcon} />
                            NodeJS
                        </li>
                    </ul>
                </div>
                <div className="aboutImg">
                    <div className="aboutImgBorder"></div>
                    <img src={personal} />
                </div>
            </div>
        </section>
    );
};

export default About;
