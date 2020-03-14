/* eslint-disable react/forbid-prop-types */
import React from "react"
import { Link } from "react-scroll"
import Fade from "react-reveal/Fade"
import Zoom from "react-reveal/Zoom"

import Layout from "../layout"
import { Button, NavSlider, OptImage } from "../components"
import { Form } from "../containers"
import { ProjectCard, TrophyCard } from "../cards"

import {
  backendLogos,
  frontendLogos,
  cloudLogos,
  databaseLogos,
  testingLogos,
  devopsLogos,
  toolsLogos
} from "../constants/techLogos"

import trophyData from "../constants/trophies"
import offersData from "../constants/offerList"
import projectsDataCopy from "../locale/copy.json"

import styles from "./index.module.css"

const renderHero = () => {
  return (
    <section className={styles.homeContainer}>
      <div className={styles.hero}>
        <h1 className={styles.titleStart}>
          Confident in making things <span>work</span>
        </h1>
        <h2>
          We are a software development house from Warsaw helping users and
          businesses thrive by providing them with top notch software solutions.
          You tell us what, we take care of the how.
        </h2>
        <div className={styles.ctaButtons}>
          <Link
            className={styles.Link}
            activeClass="active"
            to="projects"
            spy
            smooth
            offset={0}
            duration={500}
          >
            <Button label="Discover our work" type="primary" />
          </Link>
          <Link
            className={styles.Link}
            activeClass="active"
            to="contact"
            spy
            smooth
            offset={100}
            duration={500}
          >
            <Button label="Reach out" type="secondary" />
          </Link>
        </div>
      </div>
      <div className={styles.trapezoid} />
    </section>
  )
}

const renderAboutUs = () => {
  return (
    <Fade ssrFadeout bottom>
      <section className={styles.aboutSection} id="about">
        <h1 className={styles.aboutUsTitle}>Who are we?</h1>

        <div className={styles.aboutContainer}>
          <Fade ssrFadeout left>
            <div className={styles.aboutTextWrapper}>
              <h2>
                We are crafting unique software solutions. We transform a set of
                business requirements into a working, living product under a
                realistic timeline.
              </h2>
              <p>
                We are a fully remote company based in Poland, Europe. We are
                opened for onsite cooperating, consultations, trainings and
                integrations. However at the moment, we prefer to work remotely.
                We are based in GMT +1, but we are not scared to work with
                someone from different time zones. We can adjust the working
                hours based on the mutual agreements. We are always accessible,
                communicate a lot, and love automating slack channels.
              </p>
            </div>
          </Fade>
          <Fade ssrFadeout right>
            <div className={styles.aboutUsMediaBox}>
              <OptImage
                className={styles.developerFace}
                imageKey="koppany.webp"
                alt="Our lead developer"
              />
              <div className={styles.decorativeCircle}>
                <p>
                  Koppany Kondricz <br />
                  lead developer
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className={styles.listicleWrapper}>
          <Fade ssrFadeout bottom>
            <h2>
              Stuff
              <br /> we are
              <br /> good at
            </h2>
          </Fade>

          <ul>
            {offersData.map(i => (
              <Fade ssrFadeout bottom delay={100}>
                <li key={i.id}>{i.content}</li>
              </Fade>
            ))}
          </ul>
        </div>
      </section>
    </Fade>
  )
}

const renderTech = () => {
  return (
    <section className={styles.technologiesContainer} id="technologies">
      <Fade ssrFadeout left>
        {" "}
        <h1>
          <mark>Tech</mark>nologies
        </h1>
      </Fade>
      <Fade ssrFadeout right>
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
          <Fade ssrFadeout left>
            <div>
              <h4>Frontend Technologies</h4>
              <div className={styles.logosGrid}>
                {frontendLogos.map(l => (
                  <a key={l.httpUrl} href={l.httpUrl}>
                    <img
                      className={styles.techLogo}
                      src={l.url}
                      alt="Technology logo"
                    />
                  </a>
                ))}
              </div>
            </div>
          </Fade>
          <Fade ssrFadeout bottom>
            <div>
              <h4>Backend Technologies</h4>
              <div className={styles.logosGrid}>
                {backendLogos.map(l => (
                  <a key={l.httpUrl} href={l.httpUrl}>
                    <img
                      className={styles.techLogo}
                      src={l.url}
                      alt="Technology logo"
                    />
                  </a>
                ))}
              </div>
            </div>
          </Fade>
          <Fade ssrFadeout right>
            <div>
              <h4>Cloud Solutions & Hosting</h4>
              <div className={styles.logosGrid}>
                {cloudLogos.map(l => (
                  <a key={l.httpUrl} href={l.httpUrl}>
                    <img
                      className={styles.techLogo}
                      src={l.url}
                      alt="Technology logo"
                    />
                  </a>
                ))}
              </div>
            </div>
          </Fade>
        </div>

        <div className={styles.gridRowMiddle}>
          <Fade ssrFadeout left>
            <div>
              <h4>Testing</h4>
              <div className={styles.logosGridMiddle}>
                {testingLogos.map(l => (
                  <a key={l.httpUrl} href={l.httpUrl}>
                    <img
                      className={styles.techLogo}
                      src={l.url}
                      alt="Technology logo"
                    />
                  </a>
                ))}
              </div>
            </div>
          </Fade>
          <Fade ssrFadeout bottom>
            <div>
              <h4>Databases</h4>
              <div className={styles.logosGridMiddle}>
                {databaseLogos.map(l => (
                  <a key={l.httpUrl} href={l.httpUrl}>
                    <img
                      className={styles.techLogo}
                      src={l.url}
                      alt="Technology logo"
                    />
                  </a>
                ))}
              </div>
            </div>
          </Fade>
          <Fade ssrFadeout right>
            <div>
              <h4>DevOps</h4>
              <div className={styles.logosGridMiddle}>
                {devopsLogos.map(l => (
                  <a key={l.httpUrl} href={l.httpUrl}>
                    <img
                      className={styles.techLogo}
                      src={l.url}
                      alt="Technology logo"
                    />
                  </a>
                ))}
              </div>
            </div>
          </Fade>
        </div>
        <div className={styles.gridRowLast}>
          <Zoom ssrFadeout clear>
            <div>
              <h4 className={styles.toolsTitle}>Tools</h4>
              <div className={styles.logosGridLast}>
                {toolsLogos.map(l => (
                  <a key={l.httpUrl} href={l.httpUrl}>
                    <img
                      className={styles.techLogo}
                      src={l.url}
                      alt="Technology logo"
                    />
                  </a>
                ))}
              </div>
            </div>
          </Zoom>
        </div>
        <Zoom ssrFadeout clear>
          <div className={styles.methodology}>
            <h4 className={styles.methodologyTitle}>Methodology</h4>
            <div className={styles.methodologyContent}>
              <img
                className={styles.methodsHorizontal}
                src="methodology/sum1.svg"
                alt="Infographic representing methogologies we are practicing in our company"
              />
              <img
                className={styles.methodsVertical}
                src="images/methodologyMob.svg"
                alt="Infographic representing methogologies we are practicing in our company"
              />
            </div>
          </div>
        </Zoom>
      </div>
    </section>
  )
}

const renderProjects = () => {
  return (
    <section className={styles.projectsSection} id="projects">
      <Fade ssrFadeout bottom>
        <h1>
          <mark>Pro</mark>jects
        </h1>
      </Fade>
      <Fade ssrFadeout bottom>
        <p className={styles.projectsIntro}>
          Besides building many classical products such as SPA-s, e-commerce
          sites, REST API-s, here are our most recent projects. For more
          references, code samples or consultations, please contact us.
        </p>
      </Fade>
      <Fade ssrFadeout bottom>
        <div className={styles.projectsContainer}>
          <NavSlider
            previous="<"
            next=">"
            elements={projectsDataCopy.projects.map(project => ({
              id: project.id,
              node: <ProjectCard key={project.id} {...project} />
            }))}
          />
        </div>
      </Fade>
    </section>
  )
}

const renderAchievements = () => {
  return (
    <Fade ssrFadeout bottom>
      <section className={styles.achievementsContainer} id="achievements">
        <Fade ssrFadeout left>
          <h1>
            <mark>Achieve</mark>ments
          </h1>
        </Fade>
        <Zoom ssrFadeout clear>
          <div className={styles.achievementsList}>
            {trophyData.map(trophy => (
              <TrophyCard {...trophy} />
            ))}
          </div>
        </Zoom>
      </section>
    </Fade>
  )
}

const renderContact = () => {
  return (
    <section className={styles.contactContainer} id="contact">
      <OptImage
        className={styles.contactImage}
        imageKey="teamwork.webp"
        alt="Coding together"
      />
      <Zoom clear ssrFadeout>
        <div className={styles.formWrapper}>
          <div className={styles.contactUsInfo}>
            <h2>Contact Us</h2>
            <p>
              We got you interest? Do not haste to contact us and get a free
              consultation about your project. <br />
              Looking forward in working with you
            </p>
          </div>

          <Form />
        </div>
      </Zoom>
    </section>
  )
}

const HomePage = () => {
  return (
    <Layout>
      {renderHero()}
      {renderAboutUs()}
      {renderTech()}
      {renderProjects()}
      {renderAchievements()}
      {renderContact()}
    </Layout>
  )
}

export default HomePage
