import React, { useEffect } from "react";
import styles from "../../styles/Layout.module.css";

import Navbar from "./navbar";
import Head from "next/head";
import { numbers } from "../numbers";

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
          content="Flores Home Repair is a home renovation service based out of Marble Falls servicing Austin, the Texas Hill Country and surrounding areas. Just give us a call!"
        />
        <title>{title + " - Flores Home Repair"}</title>
      </Head>
      <Navbar />

      {children}

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div>
            <h3>Asset attributions:</h3>
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
          <div>
            <h3>Contact Flores Home Repair</h3>
            <span>
              Email: <a href="mailto:fhomerepair@gmail.com">fhomerepair@gmail.com</a>
            </span>
            <span>
              Phone 1: <a href={`tel:${numbers.telOne}`}>{numbers.one}</a>
            </span>
            <span>
              Phone 2: <a href={`tel:${numbers.telTwo}`}>{numbers.two}</a>
            </span>
          </div>
          <div>
            <h3>Website made by Steven Cruz</h3>
            <span>
              Need a professional, fast, and SEO-optimized website? Let&apos;s get in touch:{" "}
            </span>
            <a href="https://www.linkedin.com/in/sc-bennett/">
              https://www.linkedin.com/in/sc-bennett/
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
