import Image from "next/image";
import React, { ReactElement, useState } from "react";
import Layout from "../src/components/layout";
import PictureModal from "../src/components/modal";

import { allImages } from "../src/images";

import styles from "../styles/Gallery.module.css";
import stylesHeader from "../styles/Header.module.css";

export default function Gallery() {
  const cells: ReactElement[] = [];

  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalImg, setModalImg] = useState<any>(null);

  for (let [key, value] of Object.entries(allImages)) {
    cells.push(
      <div key={key} className={styles.cell}>
        <Image
          onClick={() => {
            setModalImg(value);
            setShowModal(true);
          }}
          quality={50}
          objectFit="cover"
          layout="fill"
          src={value?.src}
          alt="example of our work"
        />
      </div>
    );
  }

  return (
    <Layout title="Gallery">
      <header className={stylesHeader.header + " noselect"}>
        <div className={stylesHeader.textBox}>
          <h1>Flores Home Repair</h1>
          <h2>Pictures taken from some of our projects</h2>
        </div>
        <Image
          src={"/../public/img/pexels-cleyder-duque-3637789.jpg"}
          priority
          objectFit="cover"
          quality={100}
          layout="fill"
          alt=""
        />
      </header>

      <PictureModal
        showModal={showModal}
        setShowModal={setShowModal}
        modalImg={modalImg}
      ></PictureModal>

      <div className={styles.grid}>{cells}</div>
    </Layout>
  );
}
