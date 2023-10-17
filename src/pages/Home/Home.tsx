import React from "react"
import style from "./Home.module.scss"
import {IconContext} from "react-icons"
import {FaGithubAlt, FaLinkedin} from "react-icons/fa";
import imageRight from "../static/firstEvent.jpg"
import imageLeft from "../static/firstInteraction.jpg"
import classNames from "classnames";

const Home: React.FC = () => {
    return (
        <div className={style.homeWrapper}>
            <div className={style.introWrapper}>
                <div className={style.textWrapper}>
                    <div className={style.text}>
                        <h2 className={style.title}>M</h2>

                        <p className={style.description}>My name is Nicole Arantes.
                            I work as a Software Engineer with focus on
                            web development using React,
                            Typescript among other technologies.
                            I also love art, sports and fashion.
                        </p>
                    </div>
                </div>

            </div>

            <div className={classNames("row", style.imgWrapper)}>
                <img className={classNames("col-xs-12 col-sm-6", style.introImg)} src={imageRight}
                     alt="myself wearing a black dress in an empty stagein front of some red letters written we are devs"/>
                <img className={classNames("col-xs-12 col-sm-6", style.introImg)} src={imageLeft}
                     alt="group of woman wearing an orange t-shite written dajngo girls"/>
            </div>

            <div className={style.contactWrapper}>
                <h2 className={style.contactTitle}>HEY, I JUST MET YOU</h2>
                <div className={style.contactText}>
                    <p>But please feel free to reach me out through my LinkedIn specially if you are a beginner and have
                        questions.
                        <p>I know it can be scary sometimes.</p>
                        And if you curious you can take a look into my Github where I have also some old and ugly code,
                        to
                        see how much I developed since I started and maybe that can help you too.
                    </p>
                    <p>Because in the end to be a developer is all about a constant process of evolution. You got
                        this!</p>
                    <p> With love,</p>
                    <p>Nicole Arantes</p>
                </div>
            </div>

            <div className={style.footer}>
                <h6>This site was made with ♥ by Nicole Arantes</h6>
                <div className={style.iconsWrapper}>
                    <IconContext.Provider value={{size: "1.5em", className: style.socialMedia}}>
                        <a href="https://www.linkedin.com/in/nicolearantes/" target="_blank"
                           rel="noreferrer">
                            <FaLinkedin title="icon of Linkedin"/>
                        </a>
                    </IconContext.Provider>

                    <IconContext.Provider value={{size: "1.5em", className: style.socialMedia}}>
                        <a href="https://github.com/nicolearantes" target="_blank" rel="noreferrer">
                            <FaGithubAlt title="icon of Github"/>
                        </a>
                    </IconContext.Provider>
                </div>
            </div>
        </div>
    )
}

export default Home
