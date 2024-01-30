import { useState } from "react";
import './Navbar.css'
const Navbar = () => {
    const [isMenuOpen, setisMenuOpen] = useState(true);

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
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    </button>

                </div>
                <div className="hamburger-mobile-view" onClick={() => { setisMenuOpen(!isMenuOpen) }}>
                    <i class="fa fa-bars" ></i>
                </div>
                <div className={`nav-menu ${isMenuOpen ? 'menu-mobile-view' : ''}`}>
                    <div className="nav-xmark"onClick={() => setisMenuOpen(!isMenuOpen)} style={{fontSize:"2rem"}} >
                        <i className="fa fa-times" style={{ color: '#508b84' }}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;