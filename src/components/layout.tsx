import React, { useEffect } from "react";
import Image from "next/image";
import styles from "../../styles/Layout.module.css";

import Navbar from "./navbar";

type Props = {
  children: any;
};
export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />

      {children}

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div>
            <h4>Website made by Steven Cruz</h4>
            <span>
              View more of my work at <a href="https://stevencruz.dev">stevencruz.dev</a>
            </span>
          </div>
          <div>
            <h4>Contact Flores Home Repair</h4>
            <a>fhomerepair@gmail.com</a>
            <span>Number 1: 830-201-2788</span>
            <span>Number 2: 817-449-0763</span>
          </div>
          <div>
            <h4>Pexels.com photo attributions:</h4>
            <span>Rodolfo Quirós</span>
            <span>Cleyder Duque</span>
            <span>Lex Photography</span>
          </div>
        </div>
      </footer>
    </>
  );
}
