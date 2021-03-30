import React, { useState } from "react";
import { a, useTransition } from "react-spring";
import TitleSelector from "./TitleSelector";
import { ClassCard, SectionWrapper } from "components/molecules";
import { colorArray } from "utilities/colorArray";
import { expandedStyle, collapsed, expandButton } from "./styles.module.scss";

const ClassCardContainer = ({ id, items, title, subtitle, backgroundClassName }) => {
    const tags = [...new Set(items.map((item) => item.node.frontmatter.tag)), "All"];

    const [currentTag, setTag] = useState(0);
    const [expanded, setExpanded] = useState(0);

    const transitions = useTransition(
        items.filter((item) => (tags[currentTag] === "All" ? true : item.node.frontmatter.tag === tags[currentTag])),
        (item) => item.node.id,
        {
            unique: false,
            from: { opacity: 0, transform: "translateY(-10px)" },
            enter: { opacity: 1, transform: "translateY(0px)" },
            update: { opacity: 1, transform: "translateY(0px)" },
            leave: { opacity: 0, transform: "translateY(-10px)" },
            reset: true,
        }
    );

    return (
        <SectionWrapper subtitle={subtitle} title={title} backgroundClassName={backgroundClassName} id={id && id}>
            <div className={`row align-items-center justify-content-center`}>
                <div>Filter: </div>
                {tags.map((tag, i) => (
                    <TitleSelector
                        key={i}
                        className={`text-center`}
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
            <div className={`row align-content-stretch ${expanded ? expandedStyle : collapsed}`}>
                {transitions.map(({ item, key, props }) => (
                    <a.div className={`col-lg-3 col-md-6 col-sm-12 pb-md-5`} key={key} style={props}>
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
                    </a.div>
                ))}
            </div>
            <div className={`row d-md-none d-flex`}>
                <div className={`col`}>
                    <div
                        className={`${expandButton}`}
                        onClick={() => {
                            setExpanded(!expanded);
                        }}
                        onKeyDown={(e) => e.key === 13 && setExpanded(!expanded)}
                        role={"button"}
                        tabIndex={0}
                    >
                        {expanded ? "Collapse" : "Show More"}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default ClassCardContainer;
