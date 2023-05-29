import React from "react"
import style from "./Home.module.scss"
import { SlSocialLinkedin } from "react-icons/sl"
import { SlSocialGithub } from "react-icons/sl"
import { IconContext } from "react-icons"

const Home: React.FC = () => {
    return <div >
        <div className={style.homewrapper}>
            <img className={style.firstart} src="../nicolearantes.png" alt="girl in front of a computer doing a surprised face"></img>
            <div className={style.titleText}>
                <h1 className={style.title}>Nicole Arantes</h1>
                <h3 className={style.subtitle}>Software Engineer </h3>
                <div className={style.socialMedia}>
                    <IconContext.Provider value={{ className: style.icons }}>
                    <SlSocialLinkedin />
                    <SlSocialGithub />
                    </IconContext.Provider>
                </div>
            </div>
        </div>
        <div className={style.introduction}>
            <div className={style.video}></div>
            <div className={style.textWrapper}>
                <h2>I'm Nic,</h2>
                <p>a Brazilian Software Engineer based in Berlin.
                    I've been working as a Software Engineer for about 2 years with focus on
                    web development using React,
                    Typescript among other technologies.
                </p>
                <div className={style.imagesWrapper}>
                    <div className={style.introductionPictures}></div>
                    <div className={style.introductionPictures}></div>
                    <div className={style.introductionPictures}></div>
                </div>
            </div>
        </div>
        <div className={style.contactWrapper}>
            <h2>HEY,I JUST MET YOU</h2>
            <p>Please feel free to reach me through my LinkedIn
                either if you are a recruiter or if you just started to study programming and have questions, I try to reply to all messages.</p>
        </div>
        <div className={style.footer}>
            <h6>Everything in this site was made with HEART by Nicole Arantes</h6>
        </div>
    </div>
}

export default Home