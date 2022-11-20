import React, { Component } from "react";
import './Project.css';
import icon from '../icons/img.png';
import image_jpeg from '../icons/img.jpeg';
import image_gif from '../icons/img.gif';
import shot_gif from '../icons/shot_1.gif';
import shot1_gif from '../icons/shot_2.gif';
import shot3_gif from '../icons/shot_3.gif';
import shot_wb from '../icons/img.webp';
import img2 from '../icons/img2.png';
import img3 from '../icons/img3.jpeg';



export default class Project extends Component {

    render() {

        return (
            <div>
<div className="project-title">Projects</div>
                <div className="pin-container">
                    

                    <div className="card card_large">
                        <img className="img" src={ shot3_gif }  />
                    </div>
                    
                    <div className="card card_small">
                    <img className="img" src={ img2 }  />
                    </div>
                    <div className="card card_meduim">
                    <img className="img" src={ shot_wb }  />
                    </div>
                    <div className="card card_large">
                    <img className="img" src={ img3 }  />
                    </div>

                    <div className="card card_meduim">
                    <img className="img" src={ image_jpeg }  />
                    </div>

                    <div className="card card_large">
                    <img className="img" src={ shot_gif }  />
                    </div>

                    <div className="card card_small">
                    <img className="img" src={ shot1_gif }  />
                    </div>

                    <div className="card card_large">
                    <img className="img" src={ image_gif }  />
                    </div>
                    <div className="card card_small">
                    <img className="img" src={ icon }  />
                    </div>
                    <div className="card card_meduim">
                    <img className="img" src={ icon }  />
                    </div>
                    <div className="card card_large"></div>
                    <div className="card card_small"></div>
                    <div className="card card_meduim"></div>
                    <div className="card card_small"></div>
                    <div className="card card_meduim"></div>
                    <div className="card card_large"></div>
                    <div className="card card_small"></div>
                    <div className="card card_meduim"></div>
                    <div className="card card_large"></div>
                    <div className="card card_small"></div>
                    <div className="card card_meduim"></div>
                    <div className="card card_large"></div>
                    <div className="card card_small"></div>
                </div>
            </div>
            
        );
    }

}