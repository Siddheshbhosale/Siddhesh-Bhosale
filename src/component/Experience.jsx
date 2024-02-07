import React, { useRef, useState } from "react";

const experienceData = [
    {
        company: "Associate Software Engineer - Hoonartek",
        content: [
            "Built user interfaces using React.js and Material-UI.",
            "Optimizing UX and Slashed codebase by 50% via optimization & refactoring, boosting efficiency & maintainability.",
        ],
        showMoreContent: [
            "Streamlined data retrieval through efficient SQL queries.",
            "Modernized codebase to ES6 standards, future-proofing & streamlining development.",
        ],
        technology: ["React.js", "JavaScript", "Material UI"]
    },
    {
        company: "Software Engineer - Bentley Systems",
        content: [
            "Frontend Development: Developed a React.js and Node.js web app that increased user engagement by 25% by maximizing API data utilization.",
            "Backend Development: Implemented a dynamic request-handling feature in TypeScript backend, reducing response times.",
        ],
        showMoreContent: [
            "Unit Testing: Increased test coverage by 80% with comprehensive TypeScript unit tests using Jest, Chai, and other industry-standard libraries, improving code reliability and performance.",
            "Bug Resolution: Identified and resolved critical region-related bugs and actively participated in LDFlag-related work.",
        ],
        technology: ["React.js", "TypeScript", "Redux Toolkit"]
    }];

const ExperienceContent = (props) => {
    const [showMore, setshowMore] = useState(false);
    return (
        <div className="experience-content">
            <div style={{ color: "#fff" }}>{props.company}</div>
            <div className="experience-point">
                <ul>
                    {props.content.map((item, index) => (
                        <li key={index} className="experience-line-spacing">{item}</li>
                    ))}
                    {showMore && props.showMoreContent && props.showMoreContent.map((item, index) => (
                        <li key={index} className="experience-line-spacing">{item}</li>
                    ))}
                </ul>
                <div onClick={() => { setshowMore(!showMore) }} className="experience-line-spacing" style={{ color: "#5d5df1", cursor: "pointer"}}>
                    {props.showMoreContent ? (showMore ? "Show less..." : "Show more...") : ""}
                </div>
            {props.technology && <div className="tech-name-group">{
                    props.technology.map((tech) => {
                        return (
                            <div className="tech-name" style={{ border: '1px solid rgba(234,179,8,.6)' }}>
                                {tech}
                            </div>
                        )
                    })
                }
            </div>
            }
            </div>
            
        </div>
    );
}
const Experience = () => {
    return (
        <>
            <div id="experience-scroll" className="experience">
                <div className="experience-title">Experience</div>
                {
                    experienceData.map((content) => <ExperienceContent {...content} />)
                }
            </div>
        </>
    )
}

export default Experience;