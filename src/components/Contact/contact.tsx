
import style from "./contact.module.css";
import { ReactNode } from "react";

interface ContactProps {
  icon: ReactNode
  link: string
  title: string
}

export default function Contact ({icon, link, title}: ContactProps) {
  return <section className={style.wrapper}>
      {icon}
      <a className={style.link} href={link} target="_blank">
        {title}
      </a>
    </section>

}