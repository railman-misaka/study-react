import Link from "next/link";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">index</Link>
      <Link href="/about">about</Link>
    </header>
  );
}
