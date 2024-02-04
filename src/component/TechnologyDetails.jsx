import React from "react";

const TechnologyDetails = () => {
    return (
        <>
            <div id="tech-scroll" style={{ display:'grid',gap:'1rem'}}>
                <div style={{ fontSize: "1.25rem" }}>Technologies I Know</div>
                <div className="tech">
                    <div className="tech-block">
                        <div className="tech-title">Frontend</div>
                        <div className="tech-name-group">
                            <div className="tech-name" >
                                <img className="tech-image" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" />
                                React.js
                            </div>
                            <div className="tech-name" style={{ border: '1px solid rgba(59, 130, 246, 0.6)' }}>
                                <img width="18px" height="18px" style={{ borderRadius: "3px" }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"/>
                                JavaScript.js
                            </div>
                            <div className="tech-name" style={{ border: '1px solid rgba(239,68,68,.6)' }}>
                                <img className="tech-image" src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" />
                                Redux
                            </div>
                            <div className="tech-name" style={{ border: '1px solid rgba(234,179,8,.6)' }}>
                                Tailwind CSS
                            </div>
                            <div className="tech-name" >
                                <img className="tech-image" width="20px" height="20px" src="https://www.w3.org/html/logo/badge/html5-badge-h-solo.png"  />
                                HTML
                            </div>
                            <div className="tech-name" style={{ border: '1px solid hsla(220,9%,46%,.6)' }}>
                                <img className="tech-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png"/>
                                CSS
                            </div>
                        </div>
                    </div>
                    <div className="tech-block">
                        <div className="tech-title">Backend</div>
                        <div className="tech-name-group">
                            <div className="tech-name" style={{ border: '1px solid hsla(220,9%,46%,.6)' }}>
                                <img className="tech-image" src="https://nodejs.org/static/images/logo.svg"  />Node.js</div>
                            <div className="tech-name">
                                <img width="18px" height="18px" style={{ borderRadius: "3px" }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAMFBMVEX////q6uqgoaEZGhtzc3SSk5Ourq5hYmLHx8f09PVOTk+7u7vf39+DhITT09M3ODgiPZ4kAAAAxElEQVR4Ac2OMQgBARSGv6sDQfbSKaWsHsgV6vZS9lK3F9lL2ctsvcmm7GWfyF5XNhvTbef+yT7x1ft7/f3/6/HHOC3r1gnmQLhGamYjDj5U7ALk7UbD4tp4T2EA4EnDFeGMxQygdQWqEwp+OQsBkXrlAU76nAA4Y2mlB2drotVMDMHN5mtMwbMYVeQjNsEKkaJcm3wv10fcl4Dr8zgSnQB2L/RYKdrKA3LW0etun6yFCMwsyTK6qzrFu733xbQOeAk/4gMf6S1GJRc9sQAAAABJRU5ErkJggg==" />
                                Express.js
                            </div>
                            <div className="tech-name" style={{ border: '1px solid rgba(234,179,8,.6)' }}>Mocha Chai</div>
                            <div className="tech-name" style={{ border: '1px solid rgba(59, 130, 246, 0.6)' }}>
                                <img className="tech-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/768px-Typescript_logo_2020.svg.png?20221110153201"/>
                                TypeScript</div>
                        </div>
                    </div>
                    <div className="tech-block">
                        <div className="tech-title">Database</div>
                        <div className="tech-name-group">
                            <div className="tech-name" style={{ border: '1px solid hsla(220,9%,46%,.6)' }}>
                                MySql</div>
                            <div className="tech-name">
                                Mongodb
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TechnologyDetails;