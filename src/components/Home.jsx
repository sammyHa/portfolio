import React from "react"
import { Component } from "react"
import "./Home.css"
import icon from './icons/logo.png'

export class Home extends Component {

    render() {
        return (
            <>
            <div className="logo"> 

                <img src= {icon} />
                <p className="logo-text">.io</p>
            </div>
            <div className="home-container">
                
                <p className="title">
                    Hey I am  SAMIM HAKIMI
                </p> 
                <p className="description">
                I am a graphic & UX/UI Designer with solid knowlege of front end web developer.
                </p>
            </div>

        </>
        );

    }
}