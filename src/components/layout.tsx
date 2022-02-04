import React, { useEffect } from "react";
import Image from "next/image";
import styles from "../../styles/Layout.module.css";

import Navbar from "./navbar";
import Head from "next/head";

type Props = {
  children: any;
  title: string;
};
export default function Layout({ children, title }: Props) {
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="description"
          content="Flores Home Repair is a Hill Country owned business with a history of working with
          customers to create projects that are built to the highest specifications."
        />
        <title>{title + " - Flores Home Repair"}</title>
      </Head>
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
            <a href="mailto:fhomerepair@gmail.com">fhomerepair@gmail.com</a>
            <span>Number 1: 830-201-2788</span>
            <span>Number 2: 817-449-0763</span>
          </div>
          <div>
            <h4>Asset attributions:</h4>
            <span>
              Photo by <a href="https://www.pexels.com/@rquiros">Rodolfo Quirós</a>{" "}
            </span>
            <span>
              Photo by <a href="https://www.pexels.com/@cleyder-duque-1585619">Cleyder Duque</a>
            </span>
            <span>
              Photo by <a href="https://www.lexphotography.com/">Lex Photography</a>
            </span>
            <span>
              Favicon from{" "}
              <a href="https://www.flaticon.com/" title="wrench icons">
                Flaticon.com
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
