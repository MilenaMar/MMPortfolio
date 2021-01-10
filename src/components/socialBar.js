import React from 'react';
import LinkedIn from "../../static/Linked.png"
import Github from "../../static/github.png"



const Social = () => {
    return (
        <div >
        <ul>
            <li>
             <a href="https://www.linkedin.com/in/milena-martinez-caceres/" 
             target="_blank" rel="noreferrer"> 
             <img src={LinkedIn} alt="LinkedIn Icon"/>
             </a>
            </li> 
            <li>
                <a href="https://github.com/MilenaMar"
                 target="_blank" rel="noreferrer">
                  <img src={Github} alt ="Github icon"/>
                  </a>
            </li>
        </ul>
        </div>
    )
}

export default Social;
