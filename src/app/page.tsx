import styles from "./page.module.css";
import cn from "classnames";

export default function Home() {
  return (
    <div className={cn(styles.page, 'text-3xl font-bold underline')}>
      <p>Under Construction</p>
    </div>
  );
}
