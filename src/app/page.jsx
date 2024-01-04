import Image from "next/image";
import styles from "./page.module.css";
import Hero from "/public/images/hero.svg";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.col}>
        <h1 className={styles.title}>
          Illuminate Your Life & Intelligent Devices
        </h1>
        <p className={styles.decription}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, velit
          fugiat? Porro laudantium officiis vero? Lorem ipsum dolor, sit amet
          consectetur
        </p>
        <button className={styles.button}>Button</button>
      </div>

      <div className={styles.col}>
        <Image className={styles.img} src={Hero} alt="SIDSHOP" />
      </div>
    </div>
  );
}
// #81c784
