import React, { useState } from "react";

import StudyCard from "./StudyCard";
import { data } from "../../data/StudyCardData";

import "../../styles/Studies.css";

const Studies = () => {
    const [active, setActive] = useState("FirstCard");

    return (
        <section className="studiesSection bigContainer">
            <div className="subTitle">
                <h2 id="studiesTitle">Estudios</h2>
                <div className="line"></div>
            </div>
            <div className="studiesContainer">
                <div className="studiesButtonContainer">
                    <button
                        className={
                            active === "FirstCard"
                                ? "studiesButton studiesActiveButton"
                                : "studiesButton"
                        }
                        onClick={(e) => setActive("FirstCard")}
                    >
                        UTN
                    </button>
                    <button
                        className={
                            active === "SecondCard"
                                ? "studiesButton studiesActiveButton"
                                : "studiesButton"
                        }
                        onClick={(e) => setActive("SecondCard")}
                    >
                        CODER
                    </button>
                    <button
                        className={
                            active === "ThirdCard"
                                ? "studiesButton studiesActiveButton"
                                : "studiesButton"
                        }
                        onClick={(e) => setActive("ThirdCard")}
                    >
                        CODER
                    </button>
                    <button
                        className={
                            active === "FourthCard"
                                ? "studiesButton studiesActiveButton"
                                : "studiesButton"
                        }
                        onClick={(e) => setActive("FourthCard")}
                    >
                        THE HOUSE
                    </button>
                </div>
                <div className="studiesInfoContainer">
                    {active === "FirstCard" && (
                        <StudyCard data={data} index={0} />
                    )}
                    {active === "SecondCard" && (
                        <StudyCard data={data} index={1} />
                    )}
                    {active === "ThirdCard" && (
                        <StudyCard data={data} index={2} />
                    )}
                    {active === "FourthCard" && (
                        <StudyCard data={data} index={3} />
                    )}
                </div>
            </div>
        </section>
    );
};

export default Studies;
