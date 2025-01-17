import { useState } from "react";
import './Home.css';
import Navbar from "./Navbar";
import photo from '../Images/photo1.png';
import Menu from "../component/Menu";
import MegaProject from "../component/MegaProject";
import TechnologyDetails from "../component/TechnologyDetails";
import MiniProject from "../component/MiniProject";
import Experience from "../component/Experience";

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="HomeComponent">
                <div className="menu">
                    <Menu />
                </div>
                <div className="content">
                    <section id="Home-scroll" className="profile">
                        <div className="bg-effect">
                            <img className="profile-image" height="120px" width="120px" src={photo} alt="Description" />
                            <div className="profile-info">
                                <div>
                                    <div className="profile-name">Siddhesh Bhosale</div>
                                    <div className="profile-profile" >Profile
                                        <div className="linkein-icon">
                                            <a target="_blank" style={{ width: '24px', height: '24px' }} href="https://www.linkedin.com/in/siddheshbhosale" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0431c7" stroke-width="2" strokeLinecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
                                        </div>
                                    </div>
                                </div>

                                <a target="_blank" style={{ width: "fit-content", textDecoration: 'none', color: "inherit" }} href="https://www.linkedin.com/in/siddheshbhosale" >
                                    <div className="profile-contact">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0431c7" stroke-width="2" strokeLinecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                        <div>LinkedIn</div>
                                    </div>
                                </a>


                            </div>
                        </div>
                    </section>
                    <section className="work-details">
                        <Experience />
                        <MegaProject />
                        <TechnologyDetails />
                        <MiniProject />
                        <div>{/* extra space */}</div>
                    </section>
                    <section className="footer">
                       <a href="https://github.com/Siddheshbhosale"> <i class="fa fa-github"></i></a>
                       <a href="https://www.linkedin.com/in/siddheshbhosale/"><i class="fa fa-linkedin"></i></a>
                       <a href="mailto:bhosalesiddhesh9@gmail.com"><i class="fa fa-envelope"></i></a>
                       <a href="8087337545"><i class="fa fa-phone"></i></a>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Home