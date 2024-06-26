import Link from "next/link";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>{"_vancouver.dev"}</h1>

        <p className={styles.text}>
          In the heart of Vancouver,there is a thriving tech community that
          pulsates with innovation and creativity. Their collective is not just
          a group but a vibrant ecosystem where developers and tech enthusiasts
          converge, sharing their passions and expertise. Through a rich
          tapestry of online interactions and in-person gatherings, they foster
          a supportive environment where ideas flourish and collaborations
          thrive.
        </p>

        <div className={styles.buttonCntr}>
          <Link className={styles.button} href="https://lu.ma/vancouver.dev">
            EVENTS
          </Link>

          <Link className={styles.button} href="https://lu.ma/app4vandev">
            APPLY TO JOIN
          </Link>
        </div>
      </div>
      <p className={styles.footer}>
       Serif Saleh x Kelindi
      </p>
    </main>
  );
}
