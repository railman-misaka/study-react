import React from "react";
import styles from "../app/page.module.css";

export function Headline(props: {
  children?: React.ReactNode;
  title?: string;
  page?: string;
  number?: number;
  array?: (string | number)[];
  obj?: { foo: string; bar: string };
  boolean?: boolean;
  comp?: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <div>
      <h1 className={styles.title}>{props.page} Page</h1>

      <p className={styles.description}>
        Get Started by editing {props.children}
      </p>
    </div>
  );
}
