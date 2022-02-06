import React, { LegacyRef } from "react";

import styles from "../../styles/ContactBox.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

import { numbers } from "../numbers";

interface IProps {
  ctaRef?: LegacyRef<HTMLDivElement>;
}
export default function ContactBox({ ctaRef }: IProps) {
  return (
    <div className={styles.ctaBx} ref={ctaRef}>
      <div className={styles.cta}>
        <h1>Let&apos;s Get In Touch</h1>
        <p>
          Time and cost is everything. FHR protects your investment by delivering quality results.
          Let&apos;s get started today.
        </p>
        <div className={styles.bothContactOptions}>
          <div className={styles.contactOption}>
            <div>
              <FontAwesomeIcon icon={faEnvelope} size="3x" />
              <div className={styles.label}>Email us</div>
            </div>
            <div className={styles.lower}>
              <div className={styles.highlight}>
                <a href="mailto:fhomerepair@gmail.com">fhomerepair@gmail.com</a>
              </div>
            </div>
          </div>

          <div className={styles.contactOption}>
            <div>
              <FontAwesomeIcon icon={faPhoneAlt} size="3x" />
              <div className={styles.label}>Call us</div>
            </div>
            <div className={styles.lower}>
              <div className={styles.numbers}>
                <a className={styles.highlight} href={`tel:${numbers.telOne}`}>
                  {numbers.one}
                </a>
                <span className={styles.orText}>or</span>
                <a className={styles.highlight} href={`tel:${numbers.telTwo}`}>
                  {numbers.two}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
