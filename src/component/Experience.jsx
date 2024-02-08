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
    },
    // {
    //     company: "KITCOEK Web-Team",
    //     content: [
    //         "Working on the college official website as a front end devel-oper",
    //         "Designed and develop UI screens using Figma",
    //     ],
    //     showMoreContent: [
    //         "Developed the front-end of the website using technologies like ReactJS, Tailwind CSS, HTML"
    //     ],
    //     technology: ["Figma", "Tailwind CSS", "Next.js"]
    // }
    ,{
        company: "KITCOEK Web-Team",
        content: [
            "Spearheaded the design and development of user interfaces for the college's official website using Figma, ensuring a visually appealing and user-friendly experience.",
            "Implemented the front-end of the website by leveraging advanced technologies, including ReactJS, Tailwind CSS, and HTML, resulting in a seamless and responsive user interface.",
        ],
        showMoreContent: [
            "Played a key role in enhancing the overall aesthetic and functionality of the college's online presence through the meticulous design and development of UI screens and front-end components",
        ],
        technology: ["Figma", "Tailwind CSS", "Next.js"]
    }
];
// Spearheaded the design and development of user interfaces for the college's official website using Figma, ensuring a visually appealing and user-friendly experience.

// Implemented the front-end of the website by leveraging advanced technologies, including ReactJS, Tailwind CSS, and HTML, resulting in a seamless and responsive user interface.

// Played a key role in enhancing the overall aesthetic and functionality of the college's online presence through the meticulous design and development of UI screens and front-end components.

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
                <div onClick={() => { setshowMore(!showMore) }} className="experience-line-spacing" style={{ color: "#5d5df1", cursor: "pointer" }}>
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