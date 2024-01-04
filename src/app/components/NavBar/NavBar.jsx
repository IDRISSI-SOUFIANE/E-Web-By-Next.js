import Link from "next/link";
import styles from "./NavBar.module.css";
import { links } from "./data";
import Button from "../Element/Button/Button";
import Logo from "../Element/Logo/Logo";
import DarkModelToggle from "../DarkModelToggle/DarkModelToggle";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <Logo />

      <div className={styles.links}>
        <DarkModelToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}

        <Button />
      </div>
    </div>
  );
};

export default NavBar;
