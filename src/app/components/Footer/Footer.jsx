import styles from "./Footer.module.css";
import Image from "next/image";
import { social_media } from "./data";

console.log(social_media);

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>© SIDSHOP. All Rights reserverd</div>
      <div className={styles.social}>
        {social_media.map((media) => (
          <Image
            key={media.id}
            src={`/images/icons/${media.media}.png`}
            width={20}
            height={20}
            className={styles.icon}
            alt={`SIDSHOP ${media.media} link`}
          />
        ))}
      </div>
    </div>
  );
};

export default Footer;
