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

const details = [{
    url: "https://emoji-interpreter-neogcamp.netlify.app/",
    image: emoji,
    projectTitle: "Emoji Enterpretor",
    technology: "React, JavaScript, HTMl5, CSS3"
},
{
    url: "https://osent.csb.app/",
    image: stockPF,
    projectTitle: "Stock P & L Calculator",
    technology: "React, JavaScript, HTMl5, CSS3"
},
{
    url: "https://its-books-recommendation.netlify.app/",
    image: bookRecommendation,
    projectTitle: "Book Recommendation",
    technology: "React, JavaScript, HTMl5, CSS3"
},
{
    url: "https://ifjgz.csb.app/.app/",
    image: LuckyBirthday,
    projectTitle: "Is your Birthday Lucky?",
    technology: "React, JavaScript, HTMl5, CSS3"
},
{
    url: "https://have-fun-with-triangle.netlify.app/",
    image: triangle,
    projectTitle: "Fun With Triangles",
    technology: "React, JavaScript, HTMl5, CSS3"
},
{
    url: "https://wb56n.csb.app/",
    image: birthdayPalindrome,
    projectTitle: "Birthday Palindrome",
    technology: "React, JavaScript, HTMl5, CSS3"
},
{
    url: "https://cash-manager-neog.netlify.app/",
    image: cashManager,
    projectTitle: "Cash Register Manager",
    technology: "React, JavaScript, HTMl5, CSS3"
},
{
    url: "https://x2zo3.csb.app/",
    image: pirateLanguage,
    projectTitle: "Pirate language Translator",
    technology: "React, JavaScript, HTMl5, CSS3"
},
{
    url: "https://replit.com/@Siddheshbhosale/CLI-App-neog?embed=1&output=1#index.js",
    image: CLIApp,
    projectTitle: "CLI App",
    technology: "React, JavaScript, HTMl5, CSS3"
},
{
    url: "https://replit.com/@Siddheshbhosale/CLI-Quiz?embed=1&output=1#index.js",
    image: CLIQuiz,
    projectTitle: "CLI Quiz App",
    technology: "React, JavaScript, HTMl5, CSS3"
}];

const MiniProjectCard = (props) => {
    return (
        <a target="_black" href={props.url} style={{ textDecoration: 'none' }}>
            <div className="card" style={{ backgroundColor: "#1c1b23", gap: "0px" }}>
                <img alt="spotify" style={{ aspectRatio: "16/9" }} src={props.image} />
                {/* <div class="progress-bar">
                                <div style={{ backgroundColor: "#2bd576", height: "100%", width: "70%", overflow: "hidden" }}></div>
                </div> */}
            </div>
            <div style={{ display: 'flex', flexDirection: "column", padding: "0.5rem 1rem", backgroundColor: "#1c1b23", borderRadius: '5px', height: '5rem' }}>
                <div style={{ display: "flex", fontWeight: "bold", color: "white", paddingBottom: "0.25rem" }}>{props.projectTitle}</div>
                <div style={{ display: 'flex', fontSize: "0.75rem", color: "#4f4f52" }}>{props.technology}</div>
            </div>
        </a>
    );
}

const MiniProject = () => {
    return (
        <>
            <div className="mini-project">
                <div id="mini-project-scroll" style={{ fontSize: "1.25rem" }}>Mini Project</div>
                <div className="mega-project-grid">
                    {
                        details.map((detail) => <MiniProjectCard {...detail} />)
                    }
                    <a target="_black" href="https://github.com/nwaliaez/discord-clone" style={{ textDecoration: 'none' }}>
                        <div className="card" style={{ backgroundColor: "#1c1b23" }}>
                            <img alt="spotify" style={{ aspectRatio: "16/9" }} src={emoji} />
                            <div style={{ display: 'flex', flexDirection: "column", padding: "0.5rem 1rem", height: "6rem" }}>
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

