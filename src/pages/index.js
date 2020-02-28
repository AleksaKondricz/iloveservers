import React, { Fragment } from "react"
import {Link, animateScroll as scroll} from 'react-scroll';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import {
  Header,
  ProjectCard,
  TrophyCard,
  Form,
  Footer,
  Button,
  NavSlider
} from "../components/"

import {
backendLogos, frontendLogos, cloudLogos,
databaseLogos, testingLogos, devopsLogos,
toolsLogos, methodology
} from "../constants/techLogos"

import styles from "./index.module.css"

import trophyData from "../constants/trophies";
import copy from '../locale/copy.json';

const aboutUsList = [
  { id: 1, content: "  System architecture" },
  { id: 2, content: "  UI/UX\n\design" },
  { id: 3, content: " Web / Mobile frontends" },
  { id: 4, content: " Frontend and Backend logic" },
  { id: 5, content: " Hosting, deployment" },
  { id: 6, content: " Guidelines and documentation" },
  { id: 7, content: " Testing and future maintenance" },
]

const HomePage = () => {
  
  return (
    <Fragment>
      <Header />
      <section className={styles.homeContainer}>
        <div className={styles.hero}>
          <h1 className={styles.titleStart}>Confident in making things <span>work</span></h1>
          <h2>We are a software development house from Warsaw helping users and businesses thrive by providing them with top notch software solutions. You tell us what, we take care of the how.</h2>
          <div className={styles.ctaButtons}>
              <Link   
                 className={styles.Link}
                 activeClass="active"
                 to="projects"
                 spy={true}
                 smooth={true}
                 offset={0}
                 duration= {500}>
                   <Button label='Discover our work' type='primary'/>
              </Link>
              <Link
                      className={styles.Link}
                      activeClass="active"
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={100}
                      duration= {500}>
              
              <Button label='Reach out' type='secondary'/>
              </Link>
          </div>
        </div>
        <div className={styles.trapezoid}></div>
      </section>
      <Fade bottom duration={800}>
      <section  className={styles.aboutSection} id="about"> 
      <h1 className={styles.aboutUsTitle}>Who are we?</h1>
      
      <div className={styles.aboutContainer}>   
      <Fade >    
        <div className={styles.aboutTextWrapper}>
          <h2>
            We are crafting unique software solutions. We transform a set of
            business requirements into a working, living product under a
            realistic timeline.
          </h2>
          {/*<p>
            For a fully delivered solution we consider a combination of the
            milestones below:
          </p>
          <ul>
            {aboutUsList.map(i => (
              <li key={i.id}>{i.content}</li>
            ))}
          </ul>*/}
            <p>
            We are a fully remote company based in Poland, Europe. We are opened for onsite cooperating, consultations, trainings and integrations. However at the moment, we prefer to work remotely. We are based in GMT +1, but we are not scared to work with someone from different time zones. We can adjust the working hours based on the mutual agreements. We are always accessible, communicate a lot, and love automating slack channels.
          </p>
        </div>
        </Fade>
        <Fade>

        <div className={styles.aboutUsMediaBox}>
          <img src='images/koppany.jpg' alt='Our lead developer'/>
          <div className={styles.decorativeCircle}><p>Koppany Kondricz <br/>lead developer</p></div>
          </div>
        </Fade>
    
    
          </div>
          <div className={styles.listicleWrapper}>
            <Fade bottom  >
              <h2>Stuff<br/> we are<br/> good at</h2>
              </Fade>
            
              <ul>
            {aboutUsList.map(i => (
                <Fade bottom delay={100}><li key={i.id}>{i.content}</li></Fade>
            ))}
          </ul>
          </div>
        

      </section>
      </Fade>
     
      <section className={styles.technologiesContainer} id="technologies">
            <Fade left> <h1><mark>Tech</mark>nologies</h1></Fade>
     <Fade right>
        <div className={styles.shortIntro}>
          <p>
            We have a recommended set of technologies, what can achieve a really
            fast MVP, but able to scale well both horizontally and vertically.
            Our stack is based on javascript, and considered to be very
            progressive. We love new stuff, but we understand the importance of
            legacy systems as well. We learn fast, adapt easily, and happy to
            face challenging technologies outside of our comfort zone.
          </p>
        </div>
        </Fade>
        <div className={styles.gridsWrapper}>
          <div className={styles.gridRow}>
          <Fade left>
            <div>
              <h4>Frontend Technologies</h4>
              <div className={styles.logosGrid}>
                {frontendLogos.map(l => (
                
                    <a href={l.httpUrl}><img className={styles.techLogo} src={l.url} alt="Technology logo" /></a>
               
                ))}
              </div>
            </div>
            </Fade>
            <Fade bottom>
            <div>
           
              <h4>Backend Technologies</h4>
              <div className={styles.logosGrid}>
                {backendLogos.map(l => (
            
                    <a href={l.httpUrl}><img className={styles.techLogo} src={l.url} alt="Technology logo" /></a>
                 
                ))}
              </div>

            </div>
            </Fade>
            <Fade right>
          
            <div>
              <h4>Cloud Solutions & Hosting</h4>
              <div className={styles.logosGrid}>
                {cloudLogos.map(l => (
                 
                    <a href={l.httpUrl}><img className={styles.techLogo} src={l.url} alt="Technology logo" /></a>
            
                ))}
              </div>
            
          </div>
          </Fade>
          </div>
        
        <div className={styles.gridRowMiddle}>
    <Fade left>
      <div>
            <h4>Testing</h4>
            <div className={styles.logosGridMiddle}>
              {testingLogos.map(l => (
         
                  <a href={l.httpUrl}><img className={styles.techLogo} src={l.url} alt="Technology logo" /></a>
              
              ))}
            </div>
          </div>
          </Fade>
          <Fade bottom>
          <div>
            <h4>Databases</h4>
            <div className={styles.logosGridMiddle}>
              {databaseLogos.map(l => (
            
                  <a href={l.httpUrl}><img className={styles.techLogo} src={l.url} alt="Technology logo" /></a>
              
              ))}
            </div>
          </div>
          </Fade>
          <Fade right>
            <div>
          <h4>DevOps</h4>
          <div className={styles.logosGridMiddle}>
            {devopsLogos.map(l => (
            
                <a href={l.httpUrl}><img className={styles.techLogo} src={l.url} alt="Technology logo" /></a>
              
            ))}
          
        </div>
      </div>
      </Fade>
      </div>
      <div className={styles.gridRowLast}>
      <Zoom clear>
      <div>
          <h4 className={styles.toolsTitle}>Tools</h4>
          <div className={styles.logosGridLast}>
            {toolsLogos.map(l => (
             
                <a href={l.httpUrl}><img className={styles.techLogo} src={l.url} alt="Technology logo" /></a>
            
            ))}
          </div>
        </div>
        </Zoom>
        </div>
 <Zoom clear>
        <div className={styles.methodology}>
          <h4 className={styles.methodologyTitle}>Methodology</h4>
          <div className={styles.methodologyContent}>
            <img className={styles.methodsHorizontal} src='methodology/sum1.svg'  alt='Infographic representing methogologies we are practicing in our company'/>
            <img className={styles.methodsVertical} src='images/methodologyMob.svg' alt='Infographic representing methogologies we are practicing in our company'/>
          </div>
        </div>
        </Zoom>
        </div>
     
      </section>
  

      <section className={styles.projectsSection} id="projects">
      <Fade bottom  ><h1><mark>Pro</mark>jects</h1></Fade>
        <Fade bottom  ><p className={styles.projectsIntro}>
          Besides building many classical products such as SPA-s, e-commerce
          sites, REST API-s, here are our most recent projects. For more references,
          code samples or consultations, please contact us.
        </p></Fade>
     <Fade bottom  >
           <div className={styles.projectsContainer}>
         <NavSlider previous='<' next='>' elements={copy.projects.map(project => ({id:project.id, node: <ProjectCard {...project}/>}))}/>
         
        </div>
        </Fade>
       
      </section>
  
      <Fade bottom  >
      <section className={styles.achievementsContainer} id="achievements">
       <Fade left  ><h1><mark>Achieve</mark>ments</h1></Fade> 
       <Zoom clear  > <div className={styles.achievementsList}>
          {trophyData.map(trophy => (<TrophyCard  {...trophy}  />))}
        </div>
        </Zoom>
      </section>
      </Fade>
      
    <Fade bottom>
      <section className={styles.contactContainer} id="contact">
      <img src="images/teamwork.jpg" alt="Coding together" />
      <Zoom clear>
        <div className={styles.formWrapper}>
        <div className={styles.contactUsInfo}>
          
          <h2>Contact Us</h2>
          <p>
            We got you interest? Don't haste to contact us and get a free
            consultation about your project. <br/>Looking forward in working with you
          </p>
        </div>
          <Form />
        </div>
        </Zoom>
            </section>  
            </Fade>
      <Footer />
    </Fragment>
  )
}

export default HomePage
