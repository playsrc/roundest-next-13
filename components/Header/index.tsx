import styles from "./styles.module.css";

export default function Header({ text }: { text: string }) {
  return (
    <header className={styles.header}>
      <h1>{text}</h1>
    </header>
  );
}
