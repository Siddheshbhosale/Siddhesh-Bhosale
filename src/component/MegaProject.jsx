import React from "react";
import VoiceTube from "../Images/MegaProject/VoiceTube.jpg"
import { Radio } from "lucide-react";
import { Code } from "lucide-react";
const details = [{
    image: VoiceTube,
    Url: "https://voicetube.netlify.app/",
    src: "",
    title: "VocieTube",
    technology: "React.js, JavaScript, TailwindCSS, Node.js, Express.js,Firebase, MongoDB"
},
{
    image: "https://ez-snippet.vercel.app/_next/image?url=%2Fprojects%2Fdiscord-clone.jpeg&w=1920&q=75",
    Url: "",
    title: "Discord Clone",
    technology: "Next.js 13, React Hook Form, Zustand, Shadcn, Typescript"
}
]
const MegaProjectCard = (props) => {
    return (
        // <a target="_black" href={props.Url} style={{ textDecoration: 'none' }}>
        <div className="card">
            <div className="card-image-parent">
                <div className="card-image" style={{ backgroundImage: `url(${props.image})` }} ></div>
                <div className="card-image-overlay">
                    <a target="_black" href={props.Url} style={{ textDecoration: 'none', color: "inherit" }}>
                        <div><Radio />Live</div>
                    </a>
                    <a target="_black" href={props.src} style={{ textDecoration: 'none', color: "inherit" }}>
                        <div><Code />Source</div>
                    </a>
                </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: "column", padding: "0.5rem 1rem", height: '6rem' }}>
                <div style={{ display: "flex", fontWeight: "bold" }}>{props.title}</div>
                <div style={{ display: 'flex', fontSize: "0.75rem" }}>{props.technology}</div>
            </div>
        </div>
        // </a>
    )
}
const MegaProject = () => {
    return (
        <div id="mega-project-scroll" className="mega-project">
            <div style={{ fontSize: "1.25rem" }}>Full Stack Projects</div>
            <div className="mega-project-grid">
                {
                    details.map((detail) =>
                        <MegaProjectCard {...detail} />
                    )
                }

                {/* <a target="_black" href="https://github.com/nwaliaez/discord-clone" style={{ textDecoration: 'none' }}>
                    <div className="card">
                        <img alt="spotify" src="https://ez-snippet.vercel.app/_next/image?url=%2Fprojects%2Fdiscord-clone.jpeg&w=1920&q=75" />
                        <div style={{ display: 'flex', flexDirection: "column", padding: "0.5rem 1rem", height: '6rem' }}>
                            <div style={{ display: "flex", fontWeight: "bold" }}>Discord Clone</div>
                            <div style={{ display: 'flex', fontSize: "0.75rem" }}>Next.js 13, React Hook Form, Zustand, Shadcn, Typescript</div>
                        </div>
                    </div>
                </a> */}
            </div>
        </div>
    )
}

export default MegaProject;