import React from "react";
import { Cpu } from 'lucide-react';
import { Home } from 'lucide-react';
import { FolderOpenDot } from 'lucide-react';
import { SwatchBook } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Github } from 'lucide-react';
import leetcode from "../Images/Logo/LeetCode_Logo.png";
import codechef from "../Images/Logo/codechef-Logo.png";
import experience from '../Images/Logo/experience.png';

const Menu = ({MenuOpenClose}) => {
    const scrollTo = (Element) => {
        const homeElement = document.getElementById(Element);
        if (homeElement) {
            homeElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>

            <div className="menu-content">
                <div className="menu-item" onClick={() => { if(MenuOpenClose)MenuOpenClose(); scrollTo("Home-scroll") }}>
                    <Home />
                    Home
                </div>


                <div className="menu-item" onClick={() => { if(MenuOpenClose)MenuOpenClose(); scrollTo("mega-project-scroll") }}>
                    <FolderOpenDot />
                    Mega project
                </div>

                <div className="menu-item" onClick={() => { if(MenuOpenClose)MenuOpenClose(); scrollTo("experience-scroll") }}>
                    <div style={{width:"24px",height:"24px",textAlign:"center"}}><img color="#8b8a91" width="20px" src={experience} alt="" /></div>
                    Experience
                </div>

                <div className="menu-item" onClick={() => { if(MenuOpenClose)MenuOpenClose(); scrollTo("tech-scroll") }} >
                    <Cpu />
                    Technology
                </div>


                <div className="menu-item" onClick={() => { if(MenuOpenClose)MenuOpenClose(); scrollTo("mini-project-scroll") }} >
                    <SwatchBook />
                    Mini Project
                </div>

                <div style={{ paddingTop: '10px' }}>Profiles</div>


                <div className="menu-item">
                    <Linkedin color="#0277b5" />
                    LinkedIn
                </div>
                <div className="menu-item">
                    <Github color="#2a9d8f" />
                    Github
                </div>
                <div className="menu-item">
                    <img  width="24" height="24" src={leetcode}></img>
                     Leetcode
                </div>
                <div className="menu-item">
                    <img  width="24" height="24" src={codechef}></img>
                    Codechef
                </div>

            </div>
        </>
    )
}

export default Menu;