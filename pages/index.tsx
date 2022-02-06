import type { NextPage } from "next";

import styles from "../styles/Index.module.css";

import Showcase from "../src/components/showcase";

import ContactBox from "../src/components/contactBox";
import Layout from "../src/components/layout";
import Header from "../src/components/header";

import img from "../public/img/pexels-rodolfo-quirós-2219024.jpg";

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <Header text="Stone, Fencing, Remodeling, Framing, Pation" staticImg={img} />
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
