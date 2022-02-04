import type { NextPage } from "next";

import stylesHeader from "../styles/Header.module.css";
import styles from "../styles/Index.module.css";

import Showcase from "../src/components/showcase";

import Image from "next/image";
import ContactBox from "../src/components/contactBox";
import Layout from "../src/components/layout";

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <header className={stylesHeader.header + " noselect"}>
        <div className={stylesHeader.textBox}>
          <h1>Flores Home Repair</h1>
          <h2>Stone, Fencing, Remodeling, Framing, Patio</h2>
        </div>
        <Image
          src={"/../public/img/pexels-rodolfo-quirós-2219024.jpg"}
          priority
          quality={50}
          layout="fill"
          alt=""
        />
      </header>
      <main className={styles.main}>
        <div className="row">
          <h1>Home Renovation Projects</h1>
          <p>
            Flores Home Repair is a Hill Country owned business that has a long history of working
            with customers to build projects to the highest specifications. We service the Hill
            Country and adjacent areas.
          </p>
        </div>
        <Showcase />

        <ContactBox />
      </main>
    </Layout>
  );
};

export default Home;
