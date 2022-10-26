import React from "react";
import "../../styles/Works.css";
import githubLogo from "../../img/github";
import externalLink from "../../img/external";
const WorksCard = ({ card, id }) => {
    return (
        <div className="workCards bigContainer">
            <div className="workCardContainer" key={card.previewLink}>
                <div
                    className="workCardImgContainer"
                    id={id === 2 ? "workCardImgContainerReverse" : ""}
                >
                    <a href={card.previewLink} target="_BLANK">
                        <img src={card.image} loading="lazy"></img>
                    </a>
                </div>
                <div
                    className="workCardInfoContainer"
                    id={id === 2 ? "workCardInfoContainerReverse" : ""}
                >
                    <div
                        className="workCardInfo"
                        id={id === 2 ? "workCardInfoReverse" : ""}
                    >
                        <h6>Proyecto Destacado</h6>
                        <h4>{card.title}</h4>
                        <p>{card.paragraph}</p>
                        <ul>
                            {card.list.map((listItem) => (
                                <li key={card.list.indexOf(listItem)}>
                                    {listItem.bullet}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div
                        className="workCardButtons"
                        id={id === 2 ? "workCardButtonsReverse" : ""}
                    >
                        <a href={card.githubLink} target="_BLANK">
                            {githubLogo}
                        </a>
                        <a href={card.previewLink} target="_BLANK">
                            {externalLink}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorksCard;
