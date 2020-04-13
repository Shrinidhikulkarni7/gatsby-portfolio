import React from "react"
import '../components/home.module.css'
import { Social, Nav } from "../components/"

export default () => {
    return (
        <div className="dark">
            <Nav page={1} />
            <img
             src="https://avatars0.githubusercontent.com/u/8757808?s=460&v=4" 
             alt="Shrinidhi Kulkarni"
             className="profile-image"
            />
            <h1>
                Hi, I'm Shrinidhi Kulkarni!
            </h1>
            <p>
                A technological enthusiast based in Bengaluru, IN, and trying to put a dent in the universe <br/>
                I love technology, soccer and watching movies. Get in touch with any of the below sources <br/>
                Loving DevOps as of now! :)
            </p> <br/> 
            <Social />
        </div>
    )
}
