import React from 'react'
import "../Home.css"
import ban from "../../images/ban.gif"
import Typical from 'react-typical'
import { Link } from 'react-scroll' 

 
function Home() {
   
    return (
        <div id="home_top" className="home_top">

          <div className="home_banner">

             <div >  
                 <img src={ban} className="home_image"/>
              </div>

              <div className="home_profile">
                <h1 className="home_tag">Full Stack Web Developer</h1>
                <h1 className="home_name"><strong>Gopi Mudumal</strong></h1>
                <Typical                
                   steps={[
                    'I Love Coding',
                    600,
                    'Frontend',
                    800,
                    'Backend', 
                    800,
                    'Data structures and algorithms',
                    800,
                  ]} 
                   loop={Infinity}
                   wrapper="p"
                   className="home_subtag"
                 />

                <Link  to="projects" spy={true} smooth={true}> <div className="home_getstarted">
                <p className="mywork">View my work</p>
                </div></Link>
              </div>
          </div>
        </div>
    )
}

export default Home
