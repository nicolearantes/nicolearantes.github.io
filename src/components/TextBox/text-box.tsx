import style from './text-box.module.css'

export default function TextBox() {
  return (
    <section className={style.wrapper}>
      <h4 className={style.title}> About me </h4>
      <p>
        Frontend engineer with 4+ years of experience building responsive, accessible web interfaces within
        cross-functional Agile teams. Skilled in React, TypeScript, and component-based architecture. Comfortable
        collaborating on product ideation, defining API contracts, and working across teams. Proactive communicator
        with a strong commitment to quality, maintainability, and team culture.
      </p>
      <h4 className={style.title}> My Skills </h4>
      <ul>
        <li>Programming languages: Typescript, Javascript, HTML, CSS, SCSS</li>
        <li>Frameworks and libraries: React, Next.js, Redux, Jest, Bootstrap, MUI</li>
        <li>Programing tools: Git, GitHub, NPM, NVM, VS Code, Webstorm, Jenkins, CodeceptJS, GitHubActions</li>
        <li>Design tools: Storybook, Figma, Zeplin, Canva</li>
        <li>Others: Scrum, Jira, Contentful, Confluence, Google Analytics, Slack, VWO, Firebase</li>
        <li>Languages: Portuguese (native), English (fluent), German (independent / B1)</li>
      </ul>
      <h4 className={style.title}> Relevant Experience Summary </h4>
      <h4> Junior Software Engineer — Gymondo</h4>
      <ul>
        <li>Served as the sole Frontend Engineer in a cross-functional team, delivering and maintaining features of the company’s main web application using React, TypeScript, Redux, and Contentful;</li>
        <li> Implemented responsive UIs aligned with Figma designs and the company’s design system (MUI), collaborating closely with designers and Backend Engineers on API contracts;</li>
        <li>Actively contributed to the Frontend Guild, reviewing PRs, supporting releases, and sharing knowledge through discussions and technical initiatives;</li>
        <li>Modernized and standardized codebases by upgrading dependencies, resolving conflicts, and building/documenting reusable design system components with Storybook;</li>
        <li>Improved product insights and team knowledge by simplifying over-engineered solutions, implementing tracking/A/B tests, and writing detailed documentation to reduce silos.</li>
      </ul>

      <h4> Software Engineering Intern — Gymondo</h4>
      <ul>
        <li>Collaborated with experienced developers across multiple frontend codebases (React with JavaScript/TypeScript, AngularJS, E2E testing);</li>
        <li>Developed promotional landing pages for influencer-led programs (e.g., Mai Shape, Healthy Inside Out, Total Body), balancing branding and performance;</li>
        <li>Contributed with new React components to various projects and fixed bugs under mentorship;</li>
        <li>Supported the development of a server-side rendered page using Next.js as part of a learning project;</li>
      </ul>
    </section>
  )
}