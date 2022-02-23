import * as React from "react";
import "./Skills2.css";
import { Icon } from "@iconify/react";
import { Paper } from "@mui/material";


export default function Skills2() {
 
  return (
    <>
    
        <header className="contact_header" >
            <hr />
            <Icon icon="la:pencil-ruler" color="#5987b6" width="50" height="50" />
            <h3>Skills</h3>
            <hr />
        </header>
    <div className="sticker_container" >
        <Paper elevation={3} className="sticker_paper" >
            <div className="snote">
                <ul>
                <li>
                    <a href="/">
                    <h2>Frontend Development</h2><hr />
                    <div className="icon_container">
                        <Icon icon="logos:html-5" width="60" height="60" className="icon" />
                        <div className="hide">HTML 5</div>
                    </div>
                    <div className="icon_container">
                        <Icon icon="logos:css-3" width="60" height="60" className="icon"/>
                        <div className="hide">CSS 3</div>
                    </div>
                    <div className="icon_container">
                        <Icon icon="logos:javascript" width="60" height="60" className="icon"/>
                        <div className="hide">JavaScript</div>
                    </div>
                    <div className="icon_container">
                        <Icon icon="logos:react" width="60" height="60" className="icon"/>
                        <div className="hide">React JS</div>
                    </div>
                    <div className="icon_container">
                        <Icon icon="logos:bootstrap" width="60" height="60" className="icon"/>
                        <div className="hide">Bootstrap</div>
                    </div>
                    <div className="icon_container">
                        <Icon icon="logos:material-ui" width="60" height="60" className="icon"/>
                        <div className="hide">Material UI</div>
                    </div>
                    </a>
                </li>
                <li>
                    <a href="/">
                    <h2>Wireframe, Design and Agile</h2><hr />
                    <div className="icon_container">
                        <Icon icon="cib:adobe-xd" color="#470137" width="55" height="55" className="icon" />
                        <div className="hide">Adobe XD</div>
                    </div>
                    <div className="icon_container">
                        <Icon icon="vscode-icons:file-type-photoshop" width="60" height="60" className="icon"/>
                        <div className="hide">Photoshop</div>
                    </div>
                    <div className="icon_container">
                        <Icon icon="logos:trello" width="60" height="60" className="icon"/>
                        <div className="hide">Trello</div>
                    </div>
                    </a>
                </li>
                <li>
                    <a href="/">
                    <h2>Development Tools and Architecture</h2><hr />
                    <div className="icon_container">
                        <Icon icon="logos:github-octocat" width="60" height="60" className="icon"/>
                        <div className="hide">Github</div>
                    </div>
                    <div className="icon_container">
                        <Icon icon="dashicons:rest-api" width="60" height="60" className="icon" />
                        <div className="hide">RestAPI</div>
                    </div>

                    </a>
                </li>
                
                </ul>
            </div>
        </Paper>
    </div>  
    </>
  );
}

