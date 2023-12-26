import React from 'react'
import styles from '../app/page.module.css'

export default function Headline(props: { title?: string, page?: string }) {
  console.log(props.title);
  return (
    <div>
      <h1 className={styles.title}>{props.page} Page</h1>

      <p className={styles.description}>
        Get Started by editiong{' '}
        <code className={styles.code}>app/{props.page}.tsx</code>
      </p>
    </div>
  )
}
