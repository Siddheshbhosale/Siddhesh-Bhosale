import { useState } from "react";
import './Home.css';
import Navbar from "./Navbar";

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
                        <div className="menu-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder-open-dot"><path d="m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2" /><circle cx="14" cy="15" r="1" /></svg>
                            main project
                        </div>
                        <div className="menu-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scroll"><path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4" /><path d="M19 17V5a2 2 0 0 0-2-2H4" /></svg>
                            Blogs
                        </div>
                        <div className="menu-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder-dot"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" /><circle cx="12" cy="13" r="1" /></svg>
                            Min Project
                        </div>
                        {/* <div style={{width:"2rem"}}>
                        hello2 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eligendi nam iusto similique perferendis nesciunt impedit, illo accusamus ipsa tempora deleniti soluta repudiandae vel officiis neque possimus. Dolores, nobis recusandae!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ex minus voluptate rem fuga ab, hic illo voluptas! Velit soluta laborum excepturi nihil sit officiis accusamus omnis provident, harum voluptatibus?
                        </div> */}
                    </div>
                </div>

                <div className="content">

                    <section className="profile">
                        <div className="bg-effect">
                            <div className="profile-image">
                            </div>
                            <div className="profile-info">
                                <div>
                                    <div className="profile-name">Siddhesh Bhosale</div>
                                    <div>Profile</div>
                                </div>
                                <div className="profile-contact">Linkedin</div>
                            </div>
                        </div>
                    </section>


                    <section className="work-details">
                        <div className="mega-project">
                            <div style={{fontSize:"1.25rem"}}>Full Stack Projects</div>
                            <div className="mega-project-grid">
                                <a target="_black" href="https://github.com/nwaliaez/discord-clone" style={{ textDecoration: 'none' }}>
                                    <div  className="card">
                                        <img alt="spotify" src="https://ez-snippet.vercel.app/_next/image?url=%2Fprojects%2Fdiscord-clone.jpeg&w=1920&q=75" />
                                        <div style={{ display: 'flex', flexDirection: "column", padding: "0.5rem 1rem", height:'6rem'}}>
                                            <div style={{display:"flex", fontWeight:"bold"}}>Discord Clone</div>
                                            <div style={{display: 'flex',fontSize: "0.75rem"}}>Next.js 13, React Hook Form, Zustand, Shadcn, Typescript</div>
                                        </div>
                                    </div>
                                </a>
                                <a target="_black" href="https://github.com/nwaliaez/discord-clone" style={{ textDecoration: 'none' }}>
                                    <div  className="card">
                                        <img alt="spotify" src="https://ez-snippet.vercel.app/_next/image?url=%2Fprojects%2Fdiscord-clone.jpeg&w=1920&q=75" />
                                        <div style={{ display: 'flex', flexDirection: "column", padding: "0.5rem 1rem", height:'6rem'}}>
                                            <div style={{display:"flex", fontWeight:"bold"}}>Discord Clone</div>
                                            <div style={{display: 'flex',fontSize: "0.75rem"}}>Next.js 13, React Hook Form, Zustand, Shadcn, Typescript</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                         <div >{/*style={{padding:'0px', display:'grid',gap:'2rem'}} */}
                            <div style={{fontSize:"1.25rem"}}>Technologies I know</div>
                            <div className="tech">
                                <div className="tech-block">
                                    <div className="tech-title">Frontend</div>
                                    <div className="tech-name-group">
                                        <div className="tech-name">
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
                                        <div className="tech-name">Node.js</div>
                                        <div className="tech-name">Express.js</div>
                                        <div className="tech-name">Mocha chai</div>
                                        <div className="tech-name">Typescript</div>
                                        {/* <div className="tech-name">CSS</div> */}
                                    </div>
                                </div>
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