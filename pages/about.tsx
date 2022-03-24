import React, { useEffect, useRef } from "react";
import ContactBox from "../src/components/contactBox";
import Layout from "../src/components/layout";

import styles from "../styles/About.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalculator,
  faHandsHelping,
  faPhoneAlt,
  faSearch,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import Header from "../src/components/header";

import img from "../public/img/pexels-cleyder-duque-3637789.jpg";

export default function Gallery() {
  const size = "2x";

  const ctaRef = useRef<HTMLDivElement>(null);

  function scrollToCallToAction() {
    if (ctaRef.current) {
      ctaRef.current.scrollIntoView();
    }
  }

  const router = useRouter();
  useEffect(() => {
    if (router.asPath == "/about#contact") scrollToCallToAction();
  }, [router.asPath]);

  return (
    <Layout title="About">
      <Header text="A little bit about us and our team" staticImg={img} />
      <main>
        <div className={styles.greenish}>
          <div className="row">
            <h2>
              We create <em>visions</em>
            </h2>
            <p>
              As a team of perfectionists, we work on projects like we work on our own homes. Nobody
              wants to spend money on a poor-quality result. FHR protects your investment by
              building projects with a team of qualified professionals: with some of our members
              having experience in construction for more than 30 years, servicing thousands of
              customers. We&apos;ll help you create your vision down to the last detail, and
              we&apos;re with you every step of the process.
            </p>
          </div>
        </div>

        <div className={styles.infographic}>
          <div className={styles.left}>
            <div className={styles.arrow}></div>
            <div className={styles.arrow}></div>
            <div className={styles.arrow}></div>
            <div className={styles.arrow}></div>
            <div className={styles.arrow}></div>
          </div>
          <div className={styles.right}>
            <h2 className={styles.title}>Our process</h2>
            <ul className={styles.ul}>
              <li>
                <span>
                  <FontAwesomeIcon icon={faPhoneAlt} size={size} />
                  <h3>Contact</h3>
                </span>
                <p>
                  Call/email us with your project idea, including as many or as little details
                  necessary.
                </p>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={faCalculator} size={size} />
                  <h3>Estimate</h3>
                </span>
                <p>
                  We&apos;ll either give you an estimate over the phone or drive out (at no charge
                  to you) to survey the work site.
                </p>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={faHandsHelping} size={size} />
                  <h3>Commit</h3>
                </span>
                <p>
                  Once you&apos;re ready for us to begin building the project, we&apos;ll get to
                  work.
                </p>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={faTools} size={size} />
                  <h3>Construct</h3>
                </span>
                <p>
                  We&apos;ll work on the project while communicating with you the entire time to
                  make sure it meets all requirements
                </p>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={faSearch} size={size} />
                  <h3>Review</h3>
                </span>
                <p>
                  Take time to assess the quality of your project. If anything&apos;s off, let us
                  know and we&apos;ll fix it.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <ContactBox ctaRef={ctaRef} />
      </main>
    </Layout>
  );
}
