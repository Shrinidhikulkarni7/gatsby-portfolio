import React from 'react';
import { FaTwitter, FaGithub, FaMediumM, FaLinkedinIn, FaInstagram , FaStackOverflow, FaKeybase, FaUbuntu, FaFacebook  } from 'react-icons/fa'

export const Social = () => {
    return (
        <div className="social">
           
            <a
             target="_blank" 
             rel="noopener noreferrer" 
             href="https://github.com/shrinidhikulkarni7"
            >
                <FaGithub />
            </a>
            <a
             target="_blank" 
             rel="noopener noreferrer" 
             href="https://medium.com/@davidcesc"
            >
                <FaMediumM />
            </a>
            <a
             target="_blank" 
             rel="noopener noreferrer" 
             href="https://www.linkedin.com/in/shrinidhi-kulkarni-02353849/"
            >
                <FaLinkedinIn />
            </a>
            <a
             target="_blank" 
             rel="noopener noreferrer" 
             href="https://stackoverflow.com/users/9363493/shrinidhi-kulkarni"
            >
                <FaStackOverflow />
            </a> 
            <a
             target="_blank" 
             rel="noopener noreferrer" 
             href="https://twitter.com/chinnurkulkarni"
            >
                <FaTwitter />
            </a>
            <a
             target="_blank" 
             rel="noopener noreferrer" 
             href="https://www.instagram.com/_shrinidhi/"
            >
                <FaInstagram />
            </a>
           
            <a
             target="_blank" 
             rel="noopener noreferrer" 
             href="https://keybase.io/shrinidhi"
            >
                <FaKeybase />
            </a>
            <a
             target="_blank" 
             rel="noopener noreferrer" 
             href="https://askubuntu.com/users/475765/shrinidhi-kulkarni"
            >
                <FaUbuntu />
            </a>
            <a
             target="_blank" 
             rel="noopener noreferrer" 
             href="https://www.facebook.com/chinnu.kulkarni.9"
            >
                <FaFacebook />
            </a>
            
        </div>
    )
}