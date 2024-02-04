import React from "react";
import VoiceTube from "../Images/MegaProject/VoiceTube.jpg"

const MegaProject = () => {
    return (
        // <>
            <div id="mega-project-scroll" className="mega-project">
                <div style={{ fontSize: "1.25rem" }}>Full Stack Projects</div>
                <div className="mega-project-grid">
                    <a target="_black" href="https://voicetube.netlify.app/" style={{ textDecoration: 'none' }}>
                        <div className="card">
                            <img style={{border:"1px solid black",aspectRatio:"16/9"}} alt="spotify" src={VoiceTube} />
                            <div style={{ display: 'flex', flexDirection: "column", padding: "0.5rem 1rem", height: '6rem' }}>
                                <div style={{ display: "flex", fontWeight: "bold" }}>VoiceTube</div>
                                <div style={{ display: 'flex', fontSize: "0.75rem" }}>React.js, JavaScript, TailwindCSS, Node.js, Express.js,Firebase, MongoDB</div>
                            </div>
                        </div>
                    </a>
                    <a target="_black" href="https://github.com/nwaliaez/discord-clone" style={{ textDecoration: 'none' }}>
                        <div className="card">
                            <img alt="spotify" src="https://ez-snippet.vercel.app/_next/image?url=%2Fprojects%2Fdiscord-clone.jpeg&w=1920&q=75" />
                            <div style={{ display: 'flex', flexDirection: "column", padding: "0.5rem 1rem", height: '6rem' }}>
                                <div style={{ display: "flex", fontWeight: "bold" }}>Discord Clone</div>
                                <div style={{ display: 'flex', fontSize: "0.75rem" }}>Next.js 13, React Hook Form, Zustand, Shadcn, Typescript</div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        // </>
    )
}

export default MegaProject;