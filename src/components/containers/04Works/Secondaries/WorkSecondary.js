import React, { useState } from "react";
import githubLogo from "../../../img/github";
import externalLink from "../../../img/external";
import folderIcon from "../../../img/folder.svg";
import "../../../styles/WorksSecondary.css";

const WorkSecondary = ({ data }) => {
    const [visible, setVisible] = useState(3);
    function showMore() {
        setVisible((oldValue) => oldValue + 3);
    }

    return (
        <div className="secondaryWorks bigContainer">
            <h4>Otros proyectos</h4>

            <div className="gridWorkContainer">
                {data.slice(0, visible).map((work) => (
                    <div className="gridWorkItem" key={work.previewLink}>
                        <div className="gridWorkButtons">
                            <img src={folderIcon}></img>
                            <div>
                                <a href={work.githubLink} target="_BLANK">
                                    {githubLogo}
                                </a>
                                <a href={work.previewLink} target="_BLANK">
                                    {externalLink}
                                </a>
                            </div>
                        </div>
                        <div className="gridWorkInfo">
                            <h5>{work.title}</h5>
                            <p>{work.paragraph}</p>
                            <ul>
                                {work.list.map((item) => (
                                    <li key={item.bullet}>{item.bullet}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
            {/* <button className="seeMore" onClick={() => showMore()}>
                Ver más
            </button> */}
        </div>
    );
};

export default WorkSecondary;
