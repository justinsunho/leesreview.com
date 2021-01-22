import React, { useState } from "react";
import { a, useSpring } from "react-spring";
import TitleSelector from "./TitleSelector";
import { SmallCaps } from "components/atoms";
import { ClassCard } from "components/molecules";
import utilities from "theme/utilities.module.scss";
import styles from "./styles.module.scss";

const ClassCardContainer = ({ items, title, subtitle }) => {
    const tags = [...new Set(items.map((item) => item.tag)), "All"];

    const [currentTag, setTag] = useState(tags.length - 1);

    const color = ["#eb5757", "#f2994a", "#f2c94c", "#219653", "#2f80ed", "#9b51e0", "#333"];
    const [spring, setSpring] = useSpring(() => ({
        borderBottom: "1px solid #eaeaea",
    }));

    return (
        <div className={`section`}>
            <div className={`row`}>
                <div className={`col ${utilities.textCenter}`}>
                    <SmallCaps>{subtitle}</SmallCaps>
                </div>
            </div>
            <div className={`row`}>
                <h2 className={`col ${utilities.textCenter}`}>{title}</h2>
            </div>
            <div className={`row`}>
                {tags.map((tag, i) => (
                    <TitleSelector
                        className={`col ${utilities.textCenter}`}
                        title={tag}
                        color={color[i]}
                        onClick={setTag}
                        index={i}
                        currentTag={currentTag}
                    />
                ))}
            </div>
            <div className={`row pb-3`}>
                <div className={`col`}>
                    <b>
                        Total Classes:{" "}
                        {
                            items.filter((item) => (tags[currentTag] === "All" ? true : item.tag === tags[currentTag]))
                                .length
                        }
                    </b>
                </div>
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
                                backgroundColor={color[tags.indexOf(item.tag)]}
                            />
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default ClassCardContainer;
