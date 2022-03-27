import React from 'react'
import "./Project.css"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import faasos from "../../images/faasos.gif"
import ubuy from "../../images/ubuy.gif";
import twitter from "../../images/twitter.gif";
 

import { FaCss3Alt, FaReact, FaNode, FaHtml5, } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { DiMongodb, DiFirebase } from "react-icons/di";
import { SiRedux, SiMaterialui } from "react-icons/si";
import { green } from '@material-ui/core/colors';
import { SiExpress } from "react-icons/si"


  
const useStyles = makeStyles((theme) => ({ 
    root: {
        flexGrow: 1,
      }, 
      paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
      btn: {
          backgroundColor:"#3498db"
      }

}))




function Project() { 
  const classes = useStyles();

    return (
      <div id="projects" className="project">
        <h1 className="project_header">Projects</h1>
        <br />
        <br></br>
        <div className={classes.root}>
          <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid
              item
              xl={6}
              lg={6}
              md={6}
              sm={12}
              xs={12}
              className="projectdiv"
            >
              <Paper>
                <div className="container">
                  <div className="content">
                    <div className="content-overlay"></div>
                    <img src={twitter} alt="whatsapp" className="wa_img" />
                    <div class="content-details fadeIn-top">
                      <h3>twitter.com</h3>
                      <p>Social media website</p>
                    </div>
                  </div>

                  <div className="gitlive">
                    <a
                      href="https://github.com/gopimudumal99/Twitter_Clone"
                      target="_blank"
                    >
                      {" "}
                      <Button
                        className={classes.btn}
                        variant="contained"
                        style={{ fontSize: "14px" }}
                      >
                        GitHub
                      </Button>
                    </a>
                    <div style={{ width: "20px" }} />
                    <a
                      href="https://twitter-project-work.netlify.app/"
                      target="_blank"
                    >
                      {" "}
                      <Button
                        className={classes.btn}
                        variant="contained"
                        style={{ fontSize: "14px" }}
                      >
                        Live
                      </Button>
                    </a>
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid
              item
              xl={6}
              lg={6}
              md={6}
              sm={12}
              xs={12}
              className="projectdiv"
            >
              <Paper>
                <div className="container1">
                  <div className="content1">
                    <h4>twitter.com</h4>
                    <p>
                      A simple Twitter Clone application created using React and
                      firebase to mimic the basic design and functionality of
                      the official Twitter app.
                    </p>
                    <p>Project duration: 5 days</p>
                    <p>
                      TechStack: React js, Material UI, Express.js,
                      firebase,Redux
                    </p>
                    <p>Team: 5 members</p>
                  </div>
                  <div>
                    <FaReact
                      style={{
                        color: "#475569",
                        fontSize: "40px",
                        margin: "5px",
                      }}
                    />
                    <DiFirebase
                      style={{
                        color: "#475569",
                        fontSize: "40px",
                        margin: "5px",
                      }}
                    />
                    <SiMaterialui
                      style={{
                        color: "#475569",
                        fontSize: "40px",
                        margin: "5px",
                      }}
                    />
                    <SiRedux
                      style={{
                        color: "#475569",
                        fontSize: "40px",
                        margin: "5px",
                      }}
                    />
                  </div>
                </div>
              </Paper>
            </Grid>

            <Grid
              item
              xl={6}
              lg={6}
              md={6}
              sm={12}
              xs={12}
              className="projectdiv"
            >
              <Paper>
                <div className="container">
                  <div className="content">
                    <div className="content-overlay"></div>
                    <img src={faasos} alt="shine" className="shine_img" />
                    <div class="content-details fadeIn-top">
                      <h3>Faasos.com</h3>
                      <p>Food Delivery Website</p>
                    </div>
                  </div>

                  <div className="gitlive">
                    <a
                      href="https://github.com/gopimudumal99/faasos-masai-clone"
                      target="_blank"
                    >
                      {" "}
                      <Button
                        className={classes.btn}
                        variant="contained"
                        style={{ fontSize: "14px" }}
                      >
                        GitHub
                      </Button>
                    </a>
                    <div style={{ width: "20px" }} />
                    <a
                      href="https://faasos-masai-clone.herokuapp.com"
                      target="_blank"
                    >
                      <Button
                        className={classes.btn}
                        variant="contained"
                        style={{ fontSize: "14px" }}
                      >
                        Live
                      </Button>
                    </a>
                  </div>
                </div>
              </Paper>
            </Grid>

            <Grid
              item
              xl={6}
              lg={6}
              md={6}
              sm={12}
              xs={12}
              className="projectdiv"
            >
              <Paper>
                <div className="container1">
                  <div className="content1">
                    <h4>Faasos.com</h4>
                    <p>
                      Faasos delivers all types of foods from breakfast to lunch
                      to dinner all from your local restaurants even let you
                      customize each order.
                    </p>
                    <p>Project duration: 5 days</p>
                    <p>TechStack: Node.js, MongoDB, Express, Html, Css,</p>
                    <p>Team: 4 members</p>
                  </div>
                  <div>
                    <FaNode style={{ color: "#475569", fontSize: "40px" }} />
                    <DiMongodb style={{ color: "#475569", fontSize: "40px" }} />
                    {/* <SiExpress style={{ color: "#475569", fontSize: "40px" }} /> */}
                    <FaHtml5
                      style={{
                        color: "#475569",
                        fontSize: "40px",
                        margin: "5px",
                      }}
                    />
                    <FaCss3Alt
                      style={{
                        color: "#475569",
                        fontSize: "40px",
                        margin: "5px",
                      }}
                    />
                  </div>
                </div>
              </Paper>
            </Grid>

            {/* <Grid item xl={6} lg={6} md={6} sm={12} xs={12} className="projectdiv">
                   <Paper>
                     <div className="container1">
                      <div className="content1">
                      <h4>Shine.com</h4>
                          <p>A website which allows applicant and recruiter to make their account. On 
                              portal recruiter can post a job and applicant can apply for a job.
                          </p>
                          <p>
                              Project duration: 4 days
                          </p>
                          <p>
                             TechStack: React, Redux, Firebase 
                          </p>
                          <p>
                             Team: 4 members 
                          </p>


                        </div>
                        <div>
                         <FaReact style={{color:"#475569", fontSize:"40px"}}/>
                         <SiRedux style={{color:"#475569", fontSize:"40px"}}/>
                         <DiFirebase style={{color:"#475569", fontSize:"40px"}}/> 
                       </div>
                      </div>                                    
                   </Paper>
               </Grid>
               




               <Grid item  xl={6} lg={6} md={6} sm={12} xs={12} className="projectdiv">
                   <Paper>     
                   <div className="container">
                      <div className="content">
                      <div className="content-overlay"></div>
                          <img className="ss_img" src={shine} alt="shopperstop"/>
                          <div class="content-details fadeIn-top">
                            <h3>Shine.com</h3>
                            <p>Online Job Portal</p>
                           
                          </div>
                      </div>
                     
                      <div className="gitlive">
                                <a href="https://github.com/Shubhamsharma585/Shine-masai"
                                target="_blank"
                                >  <Button className={classes.btn}  variant="contained" style={{fontSize:"14px"}}>GitHub</Button>
                                </a> 
                            <div style={{width:"20px"}} />
                            <a href="https://shine-masai.vercel.app/"
                            target="_blank"
                            >  <Button className={classes.btn}  variant="contained" style={{fontSize:"14px"}}>Live</Button>
                                </a> 
                            </div>

                      </div>        
                   </Paper>
               </Grid> */}

            <Grid
              item
              xl={6}
              lg={6}
              md={6}
              sm={12}
              xs={12}
              className="projectdiv"
            >
              <Paper>
                <div className="container">
                  <div className="content">
                    <div className="content-overlay"></div>
                    <img src={ubuy} alt="whatsapp" className="wa_img" />
                    <div class="content-details fadeIn-top">
                      <h3>Ubuy.com</h3>
                      <p>Ecommerce Website</p>
                    </div>
                  </div>

                  <div className="gitlive">
                    <a
                      href="https://github.com/gopimudumal99/Ubuy"
                      target="_blank"
                    >
                      {" "}
                      <Button
                        className={classes.btn}
                        variant="contained"
                        style={{ fontSize: "14px" }}
                      >
                        GitHub
                      </Button>
                    </a>
                    <div style={{ width: "20px" }} />
                    <a href="https://ubuyclone.netlify.app/" target="_blank">
                      {" "}
                      <Button
                        className={classes.btn}
                        variant="contained"
                        style={{ fontSize: "14px" }}
                      >
                        Live
                      </Button>
                    </a>
                  </div>
                </div>
              </Paper>
            </Grid>

            <Grid
              item
              xl={6}
              lg={6}
              md={6}
              sm={12}
              xs={12}
              className="projectdiv"
            >
              <Paper>
                <div className="container1">
                  <div className="content1">
                    <h4>Ubuy.com</h4>
                    <p>
                      Ubuy is a popular cross border shopping e-commerce company
                      that offers some of the best international brands which
                      you can buy from the website.
                    </p>
                    <p>Project duration: 4 days</p>
                    <p>TechStack: HTML, CSS, JavaScript</p>
                    <p>Team: 5 members</p>
                  </div>
                  <div>
                    <FaHtml5
                      style={{
                        color: "#475569",
                        fontSize: "40px",
                        margin: "5px",
                      }}
                    />
                    <FaCss3Alt
                      style={{
                        color: "#475569",
                        fontSize: "40px",
                        margin: "5px",
                      }}
                    />
                    <IoLogoJavascript
                      style={{
                        color: "#475569",
                        fontSize: "40px",
                        margin: "5px",
                      }}
                    />
                  </div>
                </div>
              </Paper>
            </Grid>

            {/* <FaReact style={{color:"#475569", fontSize:"40px"}}/>
                         <DiFirebase style={{color:"#475569", fontSize:"40px"}}/> 
                         <SiMaterialUi style={{color:"#475569", fontSize:"40px"}}/> */}

            {/* 
               <Grid item  xl={6} lg={6} md={6} sm={12} xs={12} className="projectdiv">
                   <Paper>
                   <div className="container1">
                      <div className="content1">
                      <h4>HubSpot.com</h4>
                          <p>A website where user can register themselves and navigate through 
                            the services hubspot provide.
                          </p>
                          <p>
                              Project duration: 4 days
                          </p>
                          <p>
                             TechStack: HTML, CSS, JavaScript.
                          </p>
                          <p>
                             Team: 4 members 
                          </p>
           
                      </div>
                      <div>
                        <FaHtml5 style={{color:"#475569", fontSize:"40px", margin:"5px"}}/>
                        <FaCss3Alt style={{color:"#475569", fontSize:"40px", margin:"5px"}}/> 
                        <IoLogoJavascript style={{color:"#475569", fontSize:"40px", margin:"5px"}}/>
                       </div>
                      </div>     
                   </Paper>
               </Grid> */}

            {/* <Grid item  xl={6} lg={6} md={6} sm={12} xs={12} className="projectdiv">
                   <Paper>
                   <div className="container">
                      <div className="content">
                          <div className="content-overlay"></div>
                          <img src={hs} alt="hubspot" className="hs_img"/>
                          <div class="content-details fadeIn-top">
                            <h3>HubSpot.com</h3> 
                            <p>Internet Marketing Company</p>
                           
                          </div>
                      </div>
                      <div className="gitlive">
                                <a href="https://github.com/Shubhamsharma585/HubSpot_Clone"
                                target="_blank"
                                >  <Button size="large" className={classes.btn}  variant="contained" style={{fontSize:"14px"}}>GitHub</Button>
                                </a> 
                            <div style={{width:"20px"}} />
                                <a href="https://hubspot-clone.herokuapp.com/"
                                target="_blank"
                                >  <Button size="large" className={classes.btn} variant="contained" style={{fontSize:"14px"}}>Live</Button>
                                </a> 
                        </div>
            
                      </div>     
                   </Paper>
               </Grid> */}
          </Grid>
        </div>
      </div>
    ); 
}

export default Project
