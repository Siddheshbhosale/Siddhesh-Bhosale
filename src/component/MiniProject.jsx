import React from "react";
import emoji from "../Images/MiniProject/emoji.JPG";
import stockPF from "../Images/MiniProject/stock-profit-loss.PNG";
import bookRecommendation from "../Images/MiniProject/book-recommendation.JPG";
import LuckyBirthday from "../Images/MiniProject/Lucky-birthday.JPG";
import triangle from "../Images/MiniProject/triangle.JPG";
import birthdayPalindrome from "../Images/MiniProject/birthday-palindrome.JPG";
import cashManager from "../Images/MiniProject/cash-manager.JPG";
import pirateLanguage from "../Images/MiniProject/pirate-language.JPG";
import CLIApp from "../Images/MiniProject/CLI-App.JPG";
import CLIQuiz from "../Images/MiniProject/CLI-Quiz.JPG";

const MiniProject = () => {
    return (
        <>
            <div className="mini-project">
                <div id="mini-project-scroll" style={{ fontSize: "1.25rem" }}>Mini Project</div>
                <div className="mega-project-grid">

                    <a target="_black" href="https://emoji-interpreter-neogcamp.netlify.app/" style={{ textDecoration: 'none' }}>
                        <div className="card" style={{ backgroundColor: "#1c1b23", gap: "0px" }}>
                            <img alt="spotify" style={{aspectRatio:"16/9" }} src={emoji} />
                            {/* <div class="progress-bar">
                                <div style={{ backgroundColor: "#2bd576", height: "100%", width: "70%", overflow: "hidden" }}></div>
                            </div> */}
                        </div>
                        <div style={{ display: 'flex', flexDirection: "column", padding: "0.5rem 1rem", backgroundColor: "#1c1b23", borderRadius: '5px', height:'5rem'}}>
                            <div style={{ display: "flex", fontWeight: "bold", color: "white" }}>Emoji Enterpretor</div>
                            <div style={{ display: 'flex', fontSize: "0.75rem", color: "#4f4f52" }}>React, JavaScript, HTMl, CSS</div>
                        </div>
                    </a>

                    <a target="_black" href="https://osent.csb.app/" style={{ textDecoration: 'none' }}>
                        <div className="card" style={{ backgroundColor: "#1c1b23", gap: "0px" }}>
                            <img alt="spotify" style={{aspectRatio:"16/9" }} src={stockPF} />
                            {/* <div class="progress-bar">
                                <div style={{ backgroundColor: "#2bd576", height: "100%", width: "70%", overflow: "hidden" }}></div>
                            </div> */}
                        </div>
                        <div style={{ display: 'flex', flexDirection: "column", padding: "0.5rem 1rem", backgroundColor: "#1c1b23", borderRadius: '5px', height:'5rem'}}>
                            <div style={{ display: "flex", fontWeight: "bold", color: "white" }}>Stock P & L Calculator</div>
                            <div style={{ display: 'flex', fontSize: "0.75rem", color: "#4f4f52" }}>React, JavaScript, HTMl, CSS</div>
                        </div>
                    </a>

                    <a target="_black" href="https://its-books-recommendation.netlify.app/" style={{ textDecoration: 'none' }}>
                        <div className="card" style={{ backgroundColor: "#1c1b23", gap: "0px" }}>
                            <img alt="spotify" style={{aspectRatio:"16/9" }} src={bookRecommendation} />
                            {/* <div class="progress-bar">
                                <div style={{ backgroundColor: "#2bd576", height: "100%", width: "70%", overflow: "hidden" }}></div>
                            </div> */}
                        </div>
                        <div style={{ display: 'flex', flexDirection: "column", padding: "0.5rem 1rem", backgroundColor: "#1c1b23", borderRadius: '5px', height:'5rem'}}>
                            <div style={{ display: "flex", fontWeight: "bold", color: "white" }}>Book Recommendation</div>
                            <div style={{ display: 'flex', fontSize: "0.75rem", color: "#4f4f52" }}>React, JavaScript, HTMl5, CSS3</div>
                        </div>
                    </a>

                    <a target="_black" href="https://ifjgz.csb.app/.app/" style={{ textDecoration: 'none' }}>
                        <div className="card" style={{ backgroundColor: "#1c1b23", gap: "0px" }}>
                            <img alt="spotify" style={{aspectRatio:"16/9" }} src={LuckyBirthday} />
                            {/* <div class="progress-bar">
                                <div style={{ backgroundColor: "#2bd576", height: "100%", width: "70%", overflow: "hidden" }}></div>
                            </div> */}
                        </div>
                        <div style={{ display: 'flex', flexDirection: "column", padding: "0.5rem 1rem", backgroundColor: "#1c1b23", borderRadius: '5px', height:'5rem'}}>
                            <div style={{ display: "flex", fontWeight: "bold", color: "white" }}>Is your Birthday Lucky?</div>
                            <div style={{ display: 'flex', fontSize: "0.75rem", color: "#4f4f52" }}>React, JavaScript, HTMl5, CSS3</div>
                        </div>
                    </a>

                    <a target="_black" href="https://have-fun-with-triangle.netlify.app/" style={{ textDecoration: 'none' }}>
                        <div className="card" style={{ backgroundColor: "#1c1b23", gap: "0px" }}>
                            <img alt="spotify" style={{aspectRatio:"16/9" }} src={triangle} />
                            {/* <div class="progress-bar">
                                <div style={{ backgroundColor: "#2bd576", height: "100%", width: "70%", overflow: "hidden" }}></div>
                            </div> */}
                        </div>
                        <div style={{ display: 'flex', flexDirection: "column", padding: "0.5rem 1rem", backgroundColor: "#1c1b23", borderRadius: '5px', height:'5rem'}}>
                            <div style={{ display: "flex", fontWeight: "bold", color: "white" }}>Fun With Triangles</div>
                            <div style={{ display: 'flex', fontSize: "0.75rem", color: "#4f4f52" }}>React, JavaScript, HTMl5, CSS3</div>
                        </div>
                    </a>    

                    <a target="_black" href="https://wb56n.csb.app/" style={{ textDecoration: 'none' }}>
                        <div className="card" style={{ backgroundColor: "#1c1b23", gap: "0px" }}>
                            <img alt="spotify" style={{aspectRatio:"16/9" }} src={birthdayPalindrome} />
                            {/* <div class="progress-bar">
                                <div style={{ backgroundColor: "#2bd576", height: "100%", width: "70%", overflow: "hidden" }}></div>
                            </div> */}
                        </div>
                        <div style={{ display: 'flex', flexDirection: "column", padding: "0.5rem 1rem", backgroundColor: "#1c1b23", borderRadius: '5px', height:'5rem'}}>
                            <div style={{ display: "flex", fontWeight: "bold", color: "white" }}>Birthdate Palindrome</div>
                            <div style={{ display: 'flex', fontSize: "0.75rem", color: "#4f4f52" }}>React, JavaScript, HTMl5, CSS3</div>
                        </div>
                    </a>

                    <a target="_black" href="https://cash-manager-neog.netlify.app/" style={{ textDecoration: 'none' }}>
                        <div className="card" style={{ backgroundColor: "#1c1b23", gap: "0px" }}>
                            <img alt="spotify" style={{aspectRatio:"16/9" }} src={cashManager} />
                            {/* <div class="progress-bar">
                                <div style={{ backgroundColor: "#2bd576", height: "100%", width: "70%", overflow: "hidden" }}></div>
                            </div> */}
                        </div>
                        <div style={{ display: 'flex', flexDirection: "column", padding: "0.5rem 1rem", backgroundColor: "#1c1b23", borderRadius: '5px', height:'5rem'}}>
                            <div style={{ display: "flex", fontWeight: "bold", color: "white" }}>Cash Register Manager</div>
                            <div style={{ display: 'flex', fontSize: "0.75rem", color: "#4f4f52" }}>React, JavaScript, HTMl5, CSS3</div>
                        </div>
                    </a>   

                    <a target="_black" href="https://x2zo3.csb.app/" style={{ textDecoration: 'none' }}>
                        <div className="card" style={{ backgroundColor: "#1c1b23", gap: "0px" }}>
                            <img alt="spotify" style={{aspectRatio:"16/9" }} src={pirateLanguage} />
                            {/* <div class="progress-bar">
                                <div style={{ backgroundColor: "#2bd576", height: "100%", width: "70%", overflow: "hidden" }}></div>
                            </div> */}
                        </div>
                        <div style={{ display: 'flex', flexDirection: "column", padding: "0.5rem 1rem", backgroundColor: "#1c1b23", borderRadius: '5px', height:'5rem'}}>
                            <div style={{ display: "flex", fontWeight: "bold", color: "white" }}>Pirate language Translator</div>
                            <div style={{ display: 'flex', fontSize: "0.75rem", color: "#4f4f52" }}>React, JavaScript, HTMl5, CSS3</div>
                        </div>
                    </a> 

                    <a target="_black" href="https://replit.com/@Siddheshbhosale/CLI-App-neog?embed=1&output=1#index.js" style={{ textDecoration: 'none' }}>
                        <div className="card" style={{ backgroundColor: "#1c1b23", gap: "0px" }}>
                            <img alt="spotify" style={{aspectRatio:"16/9" }} src={CLIApp} />
                            {/* <div class="progress-bar">
                                <div style={{ backgroundColor: "#2bd576", height: "100%", width: "70%", overflow: "hidden" }}></div>
                            </div> */}
                        </div>
                        <div style={{ display: 'flex', flexDirection: "column", padding: "0.5rem 1rem", backgroundColor: "#1c1b23", borderRadius: '5px', height:'5rem'}}>
                            <div style={{ display: "flex", fontWeight: "bold", color: "white" }}>CLI App</div>
                            <div style={{ display: 'flex', fontSize: "0.75rem", color: "#4f4f52" }}>React, JavaScript, HTMl5, CSS3</div>
                        </div>
                    </a>  
                    
                    <a target="_black" href="https://replit.com/@Siddheshbhosale/CLI-Quiz?embed=1&output=1#index.js" style={{ textDecoration: 'none' }}>
                        <div className="card" style={{ backgroundColor: "#1c1b23", gap: "0px" }}>
                            <img alt="spotify" style={{aspectRatio:"16/9" }} src={CLIQuiz} />
                            {/* <div class="progress-bar">
                                <div style={{ backgroundColor: "#2bd576", height: "100%", width: "70%", overflow: "hidden" }}></div>
                            </div> */}
                        </div>
                        <div style={{ display: 'flex', flexDirection: "column", padding: "0.5rem 1rem", backgroundColor: "#1c1b23", borderRadius: '5px', height:'5rem'}}>
                            <div style={{ display: "flex", fontWeight: "bold", color: "white" }}>CLI Quiz App</div>
                            <div style={{ display: 'flex', fontSize: "0.75rem", color: "#4f4f52" }}>React, JavaScript, HTMl5, CSS3</div>
                        </div>
                    </a>  

                    <a target="_black" href="https://github.com/nwaliaez/discord-clone" style={{ textDecoration: 'none' }}>
                        <div className="card" style={{ backgroundColor: "#1c1b23" }}>
                                <img alt="spotify" style={{aspectRatio:"16/9" }} src={emoji} />                            
                                <div style={{ display: 'flex', flexDirection: "column", padding: "0.5rem 1rem",height:"6rem" }}>
                                <div style={{ display: "flex", fontWeight: "bold", color: "white" }}>Emoji Enterpretor</div>
                                <div style={{ display: 'flex', fontSize: "0.75rem", color: "#4f4f52" }}>React, JavaScript, HTMl, CSS</div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}

export default MiniProject;

