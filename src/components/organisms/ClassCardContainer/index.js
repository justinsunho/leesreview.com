import React, { useState } from "react";
import TitleSelector from "./TitleSelector";
import { ClassCard, SectionWrapper } from "components/molecules";
import { colorArray } from "utilities/colorArray";
import utilities from "theme/utilities.module.scss";

const ClassCardContainer = ({ items, title, subtitle }) => {
    const tags = [...new Set(items.map((item) => item.node.frontmatter.tag)), "All"];

    const [currentTag, setTag] = useState(tags.length - 1);

    return (
        <SectionWrapper subtitle={subtitle} title={title}>
            <div className={`row`}>
                {tags.map((tag, i) => (
                    <TitleSelector
                        className={`col ${utilities.textCenter}`}
                        title={tag}
                        color={colorArray[i]}
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
                                backgroundColor={colorArray[tags.indexOf(item.node.frontmatter.tag)]}
                            />
                        </div>
                    ))}
            </div>
        </SectionWrapper>
    );
};

export default ClassCardContainer;
