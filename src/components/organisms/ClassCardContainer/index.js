import React, { useState } from "react";
import { a, useSpring } from "react-spring";
import TitleSelector from "./TitleSelector";
import { SmallCaps } from "components/atoms";
import { ClassCard, SectionWrapper } from "components/molecules";
import utilities from "theme/utilities.module.scss";
import styles from "./styles.module.scss";

const ClassCardContainer = ({ items, title, subtitle }) => {
    const tags = [...new Set(items.map((item) => item.node.frontmatter.tag)), "All"];

    const [currentTag, setTag] = useState(tags.length - 1);

    const color = ["#eb5757", "#f2994a", "#f2c94c", "#219653", "#2f80ed", "#9b51e0", "#333"];
    const [spring, setSpring] = useSpring(() => ({
        borderBottom: "1px solid #eaeaea",
    }));

    return (
        <SectionWrapper subtitle={subtitle} title={title}>
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
                            items.filter((item) =>
                                tags[currentTag] === "All" ? true : item.node.frontmatter.tag === tags[currentTag]
                            ).length
                        }
                    </b>
                </div>
            </div>
            <div className={`row align-content-stretch`}>
                {items
                    .filter((item) =>
                        tags[currentTag] === "All" ? true : item.node.frontmatter.tag === tags[currentTag]
                    )
                    .map((item, i) => (
                        <div className={`col-lg-3 col-md-6 col-sm-12 pb-5`} key={item.node.frontmatter.title}>
                            <ClassCard
                                title={item.node.frontmatter.title}
                                date={item.node.frontmatter.date}
                                time={item.node.frontmatter.time}
                                description={item.node.html}
                                price={item.node.frontmatter.price}
                                tag={item.node.frontmatter.tag}
                                teacherName={item.node.frontmatter.teacherName}
                                teacherLink={item.node.frontmatter.teacherLink}
                                backgroundColor={color[tags.indexOf(item.node.frontmatter.tag)]}
                            />
                        </div>
                    ))}
            </div>
        </SectionWrapper>
    );
};

export default ClassCardContainer;
