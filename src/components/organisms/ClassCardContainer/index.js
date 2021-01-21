import React, { useState } from "react";
import { SmallCaps } from "components/atoms";
import { ClassCard } from "components/molecules";
import utilities from "theme/utilities.module.scss";
import styles from "./styles.module.scss";

const ClassCardContainer = ({ items, title, subtitle }) => {
    const [currentTag, setTag] = useState(0);

    const color = ["#eb5757", "#f2994a", "#f2c94c", "#219653", "#9b51e0"];

    const tags = [...new Set(items.map((item) => item.tag)), "All"];

    return (
        <div className={`section`}>
            <div className={`row`}>
                <div className={`col ${utilities.textCenter}`}>
                    <SmallCaps>{subtitle}</SmallCaps>
                </div>
            </div>
            <div>
                {items.filter((item) => (tags[currentTag] === "All" ? true : item.tag === tags[currentTag])).length}
            </div>
            <div className={`row`}>
                <h2 className={`col ${utilities.textCenter}`}>{title}</h2>
            </div>
            <div className={`row`}>
                {tags.map((tag, i) => (
                    <h4
                        className={`col ${utilities.textCenter} ${styles.tag}`}
                        onClick={() => setTag(i)}
                        style={{ borderBottomColor: color[i] }}
                    >
                        {tag}
                    </h4>
                ))}
            </div>
            <div className={`row align-content-stretch`}>
                {items
                    .filter((item) => (tags[currentTag] === "All" ? true : item.tag === tags[currentTag]))
                    .map((item, i) => (
                        <div className={`col-md-3 pb-5`}>
                            <ClassCard
                                title={item.title}
                                date={item.date}
                                time={item.time}
                                description={item.description}
                                price={item.price}
                                tag={item.tag}
                                teacherName={item.teacherName}
                                teacherLink={item.teacherLink}
                                backgroundColor={color[currentTag]}
                            />
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default ClassCardContainer;
