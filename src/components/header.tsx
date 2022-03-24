import Image from "next/image";
import styles from "../../styles/Header.module.css";

type Props = { text: string; staticImg: StaticImageData };
export default function Header({ text, staticImg }: Props) {
  return (
    <header className={styles.header + " noselect"}>
      <div className={styles.textBox}>
        <h1>Flores Home Repair</h1>
        <h2>{text}</h2>
      </div>
      {staticImg && <Image src={staticImg} priority quality={50} layout="fill" alt="" />}
    </header>
  );
}
