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
import TodoList from "../Images/MiniProject/TodoList.png"
import { Radio } from "lucide-react";
import { Code } from "lucide-react";

const details = [{
    url: "https://emoji-interpreter-neogcamp.netlify.app/",
    image: emoji,
    projectTitle: "Emoji Enterpretor",
    technology: "React, JavaScript, HTMl5, CSS3",
    src:"https://github.com/Siddheshbhosale/Emoji-interpreter-neogcamp"
},
{
    url: "https://my-todo-list-webpage.netlify.app",
    image: TodoList,
    projectTitle: "Todo List",
    technology: "JavaScript, HTMl5, CSS3",
    src:"https://github.com/Siddheshbhosale/MY_Todo_List"
},
{
    url: "https://osent-5173.csb.app",
    image: stockPF,
    projectTitle: "Stock P & L Calculator",
    technology: "React, JavaScript, HTMl5, CSS3",
    src:"https://github.com/Siddheshbhosale/Stock-P-L-calculator-NeogCamp"
},
{
    url: "https://its-books-recommendation.netlify.app/",
    image: bookRecommendation,
    projectTitle: "Book Recommendation",
    technology: "React, JavaScript, HTMl5, CSS3",
    src:"https://github.com/Siddheshbhosale/Book-recommendation-Neogcamp"
},
{
    url: "https://zjt9h-5173.csb.app",
    image: LuckyBirthday,
    projectTitle: "Is your Birthday Lucky?",
    technology: "React, JavaScript, HTMl5, CSS3",
    src:"https://github.com/Siddheshbhosale/Is-Your-Birthday-Lucky-NeogCamp"
},
{
    url: "https://have-fun-with-triangle.netlify.app/",
    image: triangle,
    projectTitle: "Fun With Triangles",
    technology: "React, JavaScript, HTMl5, CSS3",
    src:"https://github.com/Siddheshbhosale/Fun-with-Triangle-NeogCamp"
},
{
    url: "https://wb56n.csb.app/",
    image: birthdayPalindrome,
    projectTitle: "Birthday Palindrome",
    technology: "React, JavaScript, HTMl5, CSS3",
    src:"https://github.com/Siddheshbhosale/Is-Your-Birthday-Palindrome"
},
{
    url: "https://cash-manager-neog.netlify.app/",
    image: cashManager,
    projectTitle: "Cash Register Manager",
    technology: "React, JavaScript, HTMl5, CSS3",
    src:"https://github.com/Siddheshbhosale/Cash-manager-NeogCamp"
},
{
    url: "https://x2zo3.csb.app/",
    image: pirateLanguage,
    projectTitle: "Pirate language Translator",
    technology: "React, JavaScript, HTMl5, CSS3",
    src:"https://github.com/Siddheshbhosale/Pirate-translator-NeogCamp"
},
{
    url: "https://replit.com/@Siddheshbhosale/CLI-App-neog?embed=1&output=1#index.js",
    image: CLIApp,
    projectTitle: "CLI App",
    technology: "React, JavaScript, HTMl5, CSS3",
    src:"https://replit.com/@Siddheshbhosale/CLI-App-neog?embed=1&output=1#index.js"
},
{
    url: "https://replit.com/@Siddheshbhosale/CLI-Quiz?embed=1&output=1#index.js",
    image: CLIQuiz,
    projectTitle: "CLI Quiz App",
    technology: "React, JavaScript, HTMl5, CSS3",
    src:"https://github.com/Siddheshbhosale/CLI-Quiz-NeogCamp"
}];

const MiniProjectCard = (props) => {
    return (
        <a target="_black" href={props.url} style={{ textDecoration: 'none' }}>
            <div className="card" style={{ backgroundColor: "#1c1b23", gap: "0px" }}>
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
                    {/* <a target="_black" href="https://github.com/nwaliaez/discord-clone" style={{ textDecoration: 'none' }}>
                        <div className="card" style={{ backgroundColor: "#1c1b23" }}>
                            <img alt="spotify" style={{ aspectRatio: "16/9" }} src={emoji} />
                            <div style={{ display: 'flex', flexDirection: "column", padding: "0.5rem 1rem", height: "6rem" }}>
                                <div style={{ display: "flex", fontWeight: "bold", color: "white" }}>Emoji Enterpretor</div>
                                <div style={{ display: 'flex', fontSize: "0.75rem", color: "#4f4f52" }}>React, JavaScript, HTMl, CSS</div>
                            </div>
                        </div>
                    </a> */}
                </div>
            </div>
        </>
    )
}

export default MiniProject;

