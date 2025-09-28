import Image from "next/image";
import { Kalnia_Glaze } from "next/font/google";
import cn from "classnames";
import { Computer } from "@react95/icons";
import { Earth } from "@react95/icons";
import { Drvspace7 } from "@react95/icons";
import TextBox from "@/components/TextBox/text-box";
import Contact from "@/components/Contact/contact";
import style from "./page.module.css";

const kalnia = Kalnia_Glaze({
  weight: "700",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={cn(style.page, "text-3xl font-bold underline")}>
        <header className={style.headerWrapper}>
          <h1 className={`${kalnia.className} ${style.title}`}>
            Nicole Arantes
          </h1>
          <h2 className={style.subtitle}>
            Frontend Engineer (website under construction)
          </h2>
        </header>
        <section className={style.midSection}>
          <div className={style.introduction}>
            <Image
              src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWEzc3Rwb3cza2tsdHV6ZXI0bjlteTYzdXNzNTFvcTk0Zm1nMnU4aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4btN49Z3G4r6dcP6Y8/giphy.gif"
              alt="a pixeled draw of a green dinossaur with blue feet blowing a big dark pink heart, and moving its feet and paws like its excited. The background is pink and there are 3 yellow stars shining in the top right corner, another one on the top left and one last one in the middle bottom   "
              width={200}
              height={200}
              unoptimized
            />
            <article className={style.article}>
              <h3>About me </h3>
              <p className={style.text}>
                I´m Nicole Arantes, but you can call me Nic. I´m a Brazilian
                Frontend developer based on Berlin. My hobbies include to run,
                to go to the gym, to read,to sew to dance and to spend time with
                friends and family. I give my all in every opportunity that life
                gives me to make my dreams come true, and I´m always looking for
                new challenges and ways to grow.
              </p>
            </article>
          </div>
          <div className={style.textBox}>
            <TextBox />
          <section className={style.websiteIntro}>
            <div className={style.aboutWebsite}>
              <h3 className={style.title}> About the website </h3>
              <p>
                This website was created inspired by the latest
                90s and 2000 websites aesthetic with Next.js. It´s under construction cause I
                plan to add new features, develop some quizz games and more. I
                hope you like it!
              </p>
            </div>
            <div>
              <h3 className={style.title}> Music of the day </h3>
              <section className={style.musicImage}>
                <iframe
                  src="https://open.spotify.com/embed/track/4PTG3Z6ehGkBFwjybzWkR8"
                  width="100%"
                  height="80"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                ></iframe>
                <Image
                  unoptimized
                  src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnZxcDhvdnBiNHpmMTdtM2MxbzF3NjNpcWQzZm0xMHBweXhwc292aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0MYt5jPR6QX5pnqM/giphy.gif"
                  alt="a pixeled draw of a green dinossaur with blue feet blowing a big dark pink heart, and moving its feet and paws like its excited. The background is pink and there are 3 yellow stars shining in the top right corner, another one on the top left and one last one in the middle bottom   "
                  width={300}
                  height={200}
                />
              </section>
            </div>
          </section>
          </div>
        </section>

        <div className={style.movingText}>
          <div className={style.textWrapper}>
            <Drvspace7 />
            <p> Thank you for visiting!</p>
            <Drvspace7 />
          </div>
        </div>
        <footer className={style.footer}>
          <Contact
            icon={<Computer />}
            link="https://www.linkedin.com/in/nicolearantes/"
            title="LinkedIn"
          />
          <Contact
            icon={<Earth />}
            link="https://www.github.com/nicolearantes"
            title="GitHub"
          />
        </footer>
    </div>
  );
}
