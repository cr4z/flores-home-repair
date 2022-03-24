import Image from "next/image";
import React, { ReactElement, useState } from "react";
import Header from "../src/components/header";
import Layout from "../src/components/layout";
import PictureModal from "../src/components/modal";

import { allImages } from "../src/images";

import styles from "../styles/Gallery.module.css";
import img from "../public/img/pexels-lex-photography-1109541.jpg";

export default function Gallery() {
  const cells: ReactElement[] = [];

  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalImg, setModalImg] = useState<any>(null);

  for (let [key, value] of Object.entries(allImages)) {
    const alt = getAltFor(value?.src);
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
          alt={alt}
        />
      </div>
    );
  }

  return (
    <Layout title="Gallery">
      <Header text="Pictures taken from some of our projects" staticImg={img} />

      <PictureModal
        showModal={showModal}
        setShowModal={setShowModal}
        modalImg={modalImg}
      ></PictureModal>

      <main>
        <div className={styles.grid}>{cells}</div>
      </main>
    </Layout>
  );
}

function getAltFor(path: string): string {
  return path.substring(path.lastIndexOf("/") + 1).split(".")[0];
}
