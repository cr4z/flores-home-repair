import styles from "../../styles/Showcase.module.css";

import Image from "next/image";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/a11y";
import "swiper/css/pagination";
import { Navigation, Pagination, A11y } from "swiper";
import { Dispatch, ReactElement, SetStateAction, useState } from "react";

// import images
import { displayImages } from "../images";
import PictureModal from "./modal";
import Link from "next/link";

export default function Showcase(): ReactElement {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalImg, setModalImg] = useState<any>(null);

  return (
    <>
      <PictureModal
        showModal={showModal}
        setShowModal={setShowModal}
        modalImg={modalImg}
      ></PictureModal>

      <div className={styles.showcase + " noselect"}>
        <div className={styles.showcaseBx}>
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={15}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              700: {
                slidesPerView: 3,
              },
            }}
          >
            {GetSwiperSlides(setShowModal, setModalImg)}
          </Swiper>
          <div
            style={{
              padding: "1rem 0 0 2rem",
              width: "fit-content",
              marginLeft: "auto",
              display: "flex",
              marginBottom: "2rem",
            }}
          >
            <Link href="/gallery">
              <a className="button">See our full gallery {">"}</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

function GetSwiperSlides(
  setShowDialog: Dispatch<SetStateAction<boolean>>,
  setModalImg: Dispatch<SetStateAction<StaticImageData>>
): ReactElement {
  const slides: ReactElement[] = [];

  for (let [key, value] of Object.entries(displayImages)) {
    slides.push(
      <SwiperSlide
        onClick={() => {
          setShowDialog(true);
          setModalImg(value);
        }}
      >
        <div className={styles.showcaseItem} key={key}>
          <Image
            priority
            quality={75}
            layout="fill"
            objectFit="cover"
            src={value}
            alt="example of our work"
          />
        </div>
      </SwiperSlide>
    );
  }

  return <>{slides}</>;
}
