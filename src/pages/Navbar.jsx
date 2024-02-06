import { useState } from "react";
import './Navbar.css'
import Menu from "../component/Menu";
const Navbar = () => {
    const [isMenuOpen, setisMenuOpen] = useState(true);
    const isMenuOpenfunction =() =>{
        setisMenuOpen(!isMenuOpen);
    }

    return (
        <div className="nav-container">
            <div style={{ display: "flex", alignItems: "center" }}>
                <div className="nav-circle" style={{ backgroundColor: "#2bd576" }}></div>
                <div className="nav-circle" style={{ backgroundColor: "#2bd576" }}></div>
                <div className="nav-circle" style={{ backgroundColor: "#2bd576" }}></div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
                <div>
                    <button disabled="" className="contact-button">
                        Contact Me
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" stroke-linejoin="round" class="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    </button>

                </div>
                <div className="hamburger-mobile-view" onClick={() => { isMenuOpenfunction() }}>
                    <i class="fa fa-bars" ></i>
                </div>
                <div className={`nav-menu ${isMenuOpen ? 'menu-mobile-view' : ''}`}>
                    <div className="nav-xmark" onClick={() =>{isMenuOpenfunction()}} style={{fontSize:"2rem"}} >
                        <i className="fa fa-times" style={{ color: '#508b84' }}></i>
                    </div>

                    <Menu MenuOpenClose = {isMenuOpenfunction}/>
                    {/* <div className="menu-content">
                        <div className="menu-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" stroke-linejoin="round" class="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                            Home
                        </div>
                        <div className="menu-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" stroke-linejoin="round" class="lucide lucide-folder-open-dot"><path d="m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2" /><circle cx="14" cy="15" r="1" /></svg>
                            Main project
                        </div>
                        <div className="menu-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" stroke-linejoin="round" class="lucide lucide-scroll"><path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4" /><path d="M19 17V5a2 2 0 0 0-2-2H4" /></svg>
                            Blogs
                        </div>
                        <div className="menu-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" stroke-linejoin="round" class="lucide lucide-folder-dot"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" /><circle cx="12" cy="13" r="1" /></svg>
                            Min Project
                        </div> */}
                        {/* <div style={{width:"2rem"}}>
                        hello2 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eligendi nam iusto similique perferendis nesciunt impedit, illo accusamus ipsa tempora deleniti soluta repudiandae vel officiis neque possimus. Dolores, nobis recusandae!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ex minus voluptate rem fuga ab, hic illo voluptas! Velit soluta laborum excepturi nihil sit officiis accusamus omnis provident, harum voluptatibus?
                        </div> */}
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default Navbar;