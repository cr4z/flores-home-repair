import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "/../../public/img/logo-bright.png";

import styles from "../../styles/Navbar.module.css";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link href="/">
          <a>
            <Image src={logo} priority layout="fill" alt="" />
          </a>
        </Link>
      </div>

      <ul className={styles.rhombusContainer}>
        <li className={router.asPath == "/" ? styles.selected : ""}>
          <Link href="/">
            <a className={styles.rhombus}>
              <span className={styles.link}>Home</span>
            </a>
          </Link>
        </li>
        <li className={router.asPath == "/about" ? styles.selected : ""}>
          <Link href="/about">
            <a className={styles.rhombus}>
              <span className={styles.link}>About</span>
            </a>
          </Link>
        </li>
        <li className={router.asPath == "/gallery" ? styles.selected : ""}>
          <Link href="/gallery">
            <a className={styles.rhombus}>
              <span className={styles.link}>Gallery</span>
            </a>
          </Link>
        </li>
        <li className={router.asPath == "/about#contact" ? styles.selected : ""}>
          <Link href="/about#contact">
            <a className={styles.rhombus}>
              <span className={styles.contactLink}>Contact</span>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
