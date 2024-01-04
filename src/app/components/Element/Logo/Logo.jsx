import Link from "next/link";

import styles from "./Logo.module.css";

import { Dancing_Script } from "next/font/google";
const logoFont = Dancing_Script({ subsets: ["latin"] });

const Logo = () => {
  return (
    <Link href={"/"} className={`${styles.logo} ${logoFont.className}`}>
      SIDSHOP
    </Link>
  );
};

export default Logo;
