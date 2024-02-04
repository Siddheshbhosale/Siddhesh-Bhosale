import React from "react";

const Experience = () => {
    return (
        <>
            <div id="experience-scroll" className="experience">
                <div className="experience-title">Experience</div>
                <div className="experience-content">
                    <div style={{ color: "#fff" }}>Associate Software Engineer - Hoonartek</div>
                    <div style={{ width: "100%", padding: "0 1rem", backgroundColor: "#1c1b23", paddingLeft: "2rem", borderRadius: "5px" }}>
                        <ul>
                            <li>Built user interfaces using React.js and Material-UI.</li>
                            <li>Optimizing UX and Slashed codebase by 50% via optimization & refactoring, boosting efficiency &
                                maintainability.</li>
                            <li>Streamlined data retrieval through efficient SQL queries.</li>
                            <li>Modernized codebase to ES6 standards, future-proofing & streamlining development.</li>
                        </ul>
                        <div style={{ color: "blue",cursor:"pointer" }}>Show more...</div>
                    </div>
                </div>
                <div className="experience-content">
                    <div style={{ color: "#fff" }}>Software Engineer - Bentley Systems</div>
                    <div style={{ width: "100%", padding: "0 1rem", backgroundColor: "#1c1b23", paddingLeft: "2rem" }}>
                        <ul>
                            <li>Frontend Development: Developed a React.js and Node.js web app that increased user
                                engagement by 25% by maximizing API data utilization.</li>
                            <li>Backend Development: Implemented a dynamic request-handling feature in TypeScript backend,
                                reducing response times.</li>
                            <li>Unit Testing: Increased test coverage by 80% with comprehensive TypeScript unit tests using Jest,
                                Chai, and other industry-standard libraries, improving code reliability and performance.</li>
                            <li>Bug Resolution: Identified and resolved critical region-related bugs and actively participated in
                                LDFlag-related work.</li>
                        </ul>
                        <div style={{ color: "blue",cursor:"pointer" }}>Show more...</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience; 