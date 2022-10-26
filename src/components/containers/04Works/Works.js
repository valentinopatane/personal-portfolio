import React from "react";
import "../../styles/Works.css";
import WorksCard from "./WorksCard";
import { data } from "../../data/WorksCardData";
import { secondaryData } from "../../data/WorkSecondaryData";
import WorkSecondary from "./Secondaries/WorkSecondary";
const Works = () => {
    return (
        <section className="workSection bigContainer" id="work">
            <article className="mainWorks">
                <div className="subTitle">
                    <h2 id="worksTitle">Trabajos y Proyectos</h2>
                    <div className="line"></div>
                </div>
                {data.map((card) => {
                    return (
                        <WorksCard
                            key={card.title}
                            card={card}
                            id={data.indexOf(card) + 1}
                        />
                    );
                })}
            </article>
            <article>
                <WorkSecondary data={secondaryData} />
            </article>
        </section>
    );
};

export default Works;
