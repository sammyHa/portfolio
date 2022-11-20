import React from "react";
import "./Button.css"
import { Component } from "react";
//const Button = () => <button className="signup-btn">Sign up</button>

class Button extends Component {

    componentDidMount () {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then(res => res.json())
            .then(data => console.log(data));
    }

    render() {
        return (
            
            <div className="btn-container">
                <button className="signup-btn">Sign up</button>
                <ul>

                </ul>
            </div>
        );
    }
}
export default Button