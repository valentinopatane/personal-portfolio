import React from "react";
import "../../styles/Studies.css";

const StudyCard = ({ index, data }) => {
    return (
        <div className="studiesInfoData">
            {data[index].map((item) => (
                <div key={item.title}>
                    <h4>{item.title}</h4>
                    <p>{item.date}</p>
                    <ul>
                        {item.list.map((listItem) => (
                            <li key={listItem.bullet}>{listItem.bullet}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default StudyCard;
