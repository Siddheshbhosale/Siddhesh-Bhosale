import { useState } from "react";
import './Home.css';
import Navbar from "./Navbar";
import photo from '../photo.jpg';

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="HomeComponent">
                <div className="menu">
                    <div className="menu-content">
                        <div className="menu-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                            Home
                        </div>

                        <a href="#mega-project-scroll" style={{ textDecoration: "none", color: "inherit" }}>
                            <div className="menu-item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder-open-dot"><path d="m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2" /><circle cx="14" cy="15" r="1" /></svg>
                                Mega project
                            </div>
                        </a>

                        <a href="#tech-scroll" style={{ textDecoration: "none", color: "inherit" }}><div className="menu-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scroll"><path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4" /><path d="M19 17V5a2 2 0 0 0-2-2H4" /></svg>
                            Technology</div>
                        </a>

                        <a href='#mini-project-scroll' style={{ textDecoration: "none", color: "inherit" }}>
                            <div className="menu-item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder-dot"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" /><circle cx="12" cy="13" r="1" /></svg>
                                Mini Project
                            </div>
                        </a>
                        
                        <div style={{ paddingTop: '10px' }}>Profiles</div>
                        <div className="menu-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0277b5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            Linked In
                        </div>
                        <div className="menu-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2a9d8f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                            Github
                        </div>
                        <div className="menu-item">
                            <svg fill="#ffffff" width="24" height="24" viewBox="-0.96 -0.96 25.92 25.92" role="img" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.336"></g><g id="SVGRepo_iconCarrier"><title>LeetCode icon</title><path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z"></path></g></svg>
                            Leetcode
                        </div>
                        <div className="menu-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder-dot"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" /><circle cx="12" cy="13" r="1" /></svg>
                            codechef
                        </div>

                    </div>
                </div>

                <div className="content">

                    <section className="profile">
                        <div className="bg-effect">
                            <img className="profile-image" height="120px" width="120px" src={photo} alt="Description" />
                            <div className="profile-info">
                                <div>
                                    <div className="profile-name">Siddhesh Bhosale</div>
                                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"5px 0"}}>Profile        
                                        <div className="linkein-icon">
                                            <a target="_blank"  style={{ width: '24px', height: '24px' }} href="https://www.linkedin.com/in/siddheshbhosale" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0431c7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="profile-contact"><a target="_blank"  style={{ width: '24px', height: '24px', paddingRight:"20px" }} href="https://www.linkedin.com/in/siddheshbhosale" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0431c7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a> Linkedin</div>
                            </div>
                        </div>
                    </section>


                    <section className="work-details">
                        <div id="mega-project-scroll" className="mega-project">
                            <div style={{  fontSize:  "1.25rem"  }}>Full Stack Projects</div>
                            <div className="mega-project-grid">
                                <a target="_black" href="https://github.com/nwaliaez/discord-clone" style={{ textDecoration: 'none' }}>
                                    <div className="card">
                                        <img alt="spotify" src="https://ez-snippet.vercel.app/_next/image?url=%2Fprojects%2Fdiscord-clone.jpeg&w=1920&q=75" />
                                        <div style={{ display: 'flex', flexDirection: "column", padding: "0.5rem 1rem", height: '6rem' }}>
                                            <div style={{ display: "flex", fontWeight: "bold" }}>Discord Clone</div>
                                            <div style={{ display: 'flex', fontSize: "0.75rem" }}>Next.js 13, React Hook Form, Zustand, Shadcn, Typescript</div>
                                        </div>
                                    </div>
                                </a>
                                <a target="_black" href="https://github.com/nwaliaez/discord-clone" style={{ textDecoration: 'none' }}>
                                    <div className="card">
                                        <img alt="spotify" src="https://ez-snippet.vercel.app/_next/image?url=%2Fprojects%2Fdiscord-clone.jpeg&w=1920&q=75" />
                                        <div style={{ display: 'flex', flexDirection: "column", padding: "0.5rem 1rem", height:  '6rem'  }}>
                                            <div style={{  display:  "flex", fontWeight:  "bold"  }}>Discord Clone</div>
                                            <div style={{  display: 'flex',  fontSize: "0.75rem"  }}>Next.js 13, React Hook Form, Zustand, Shadcn, Typescript</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div >{/*style={{padding:'0px', display:'grid',gap:'2rem'}} */}
                            <div id="tech-scroll" style={{ fontSize: "1.25rem" }}>Technologies I know</div>
                            <div className="tech">
                                <div className="tech-block">
                                    <div className="tech-title">Frontend</div>
                                    <div className="tech-name-group">
                                        <div className="tech-name" style={{ border: '1px solid rgba(59, 130, 246, 0.6)' }}>
                                            <img width="20px" height="20px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" />
                                            React.js
                                        </div>
                                        <div className="tech-name" style={{border: '1px solid rgba(59, 130, 246, 0.6)'}}>JavaScript.js</div>
                                        <div className="tech-name" style={{border: '1px solid rgba(234,179,8,.6)'}}>Tailwind CSS</div>
                                        <div className="tech-name" style={{border: '1px solid rgba(239,68,68,.6)'}}>HTML</div>
                                        <div className="tech-name" style={{border: '1px solid hsla(220,9%,46%,.6)'}}>CSS</div>
                                    </div>
                                </div>
                                <div className="tech-block">
                                    <div className="tech-title">Backend</div>
                                    <div className="tech-name-group">
                                        <div className="tech-name" style={{ border: '1px solid hsla(220,9%,46%,.6)' }}>Node.js</div>
                                        <div className="tech-name">Express.js</div>
                                        <div className="tech-name">Mocha chai</div>
                                        <div className="tech-name">Typescript</div>
                                        {/* <div className="tech-name">CSS</div> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mini-project">
                            <div id="mini-project-scroll" style={{ fontSize: "1.25rem" }}>Mini Project</div>
                            <div className="mega-project-grid">
                                <a target="_black" href="https://github.com/nwaliaez/discord-clone" style={{ textDecoration: 'none' }}>
                                    <div className="card" style={{ backgroundColor: "#1c1b23",gap:"0px" }}>
                                        <img alt="spotify" src="https://ez-snippet.vercel.app/_next/image?url=%2Fprojects%2Fdiscord-clone.jpeg&w=1920&q=75" />
                                        <div class="progress-bar">
                                            <div style={{backgroundColor:"#2bd576",height:"100%",overflow:"hidden"}}></div>
                                        </div>
                                    </div>
                                        <div style={{ display: 'flex', flexDirection: "column", padding: "0.5rem 1rem",backgroundColor: "#1c1b23" }}>
                                            <div style={{ display: "flex", fontWeight: "bold", color: "white" }}>Discord Clone</div>
                                            <div style={{ display: 'flex', fontSize: "0.75rem", color: "#4f4f52" }}>Next.js 13, React Hook Form, Zustand, Shadcn, Typescript</div>
                                        </div>
                                 
                                </a>
                                <a target="_black" href="https://github.com/nwaliaez/discord-clone" style={{ textDecoration: 'none' }}>
                                    <div className="card" style={{ backgroundColor: "#1c1b23" }}>
                                        <img alt="spotify" src="https://ez-snippet.vercel.app/_next/image?url=%2Fprojects%2Fdiscord-clone.jpeg&w=1920&q=75" />
                                        <div style={{ display: 'flex', flexDirection: "column", padding: "0.5rem 1rem" }}>
                                            <div style={{ display: "flex", fontWeight: "bold", color: "white" }}>Discord Clone</div>
                                            <div style={{ display: 'flex', fontSize: "0.75rem", color: "#4f4f52" }}>Next.js 13, React Hook Form, Zustand, Shadcn, Typescript</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </section>
                    {/* <div style={{ width: "2rem" }}>
                        hello2
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eligendi nam iusto similique perferendis nesciunt impedit, illo accusamus ipsa tempora deleniti soluta repudiandae vel officiis neque possimus. Dolores, nobis recusandae!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ex minus voluptate rem fuga ab, hic illo voluptas! Velit soluta laborum excepturi nihil sit officiis accusamus omnis provident, harum voluptatibus?
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Home