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
      <Header text="Stone, Fencing, Remodeling, Framing, Patio" staticImg={img} />
      <main className={styles.main}>
        <section>
          <div className="row">
            <h2>Home Renovation Projects</h2>
            <p>
              Flores Home Repair is a home renovation service based out of Marble Falls that has a long history of working with customers to build
              projects to the highest specifications. Servicing Austin, the Texas Hill Country and surrounding areas. Just give us a call!
            </p>
          </div>
        </section>
        
        <section>
          <Showcase />
        </section>
        
        <section>
          <ContactBox />
        <section>
      </main>
    </Layout>
  );
};

export default Home;
