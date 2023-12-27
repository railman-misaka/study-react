import Image from "next/image";
import styles from "@/src/app/page.module.css";
import { Headline } from "@/src/components/Headline";

type Item = {
  href: string;
  title: string;
  discription: string;
};

const ITEMS: Item[] = [
  {
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    title: "Docs ->",
    discription: "Find in-depth information about Next.js features and API.",
  },
  {
    href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    title: "Learn ->",
    discription: "Learn about Next.js in an interactive course with quizzes!",
  },
  {
    href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    title: "Templates ->",
    discription: "Explore starter templates for Next.js.",
  },
  {
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    title: "Deploy ->",
    discription:
      "Instantly deploy your Next.js site to a shareable URL with Vercel.",
  },
];

export function Main(props: { page?: string }) {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.description}>
          <Headline
            page={props.page}
            number={1111}
            array={[1, 2, 3]}
            obj={{ foo: "foo", bar: "bar" }}
            // boolean={true}
            // 真偽値の場合以下のように省略できる
            boolean
          >
            comp={<code className={styles.code}>app/{props.page}.tsx</code>}
          </Headline>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        <div className={styles.grid}>
          {ITEMS.map((item) => {
            return (
              <a
                key={item.href} // ここにユニークな key プロパティを追加
                href={item.href}
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2>{item.title}</h2>
                <p>{item.discription}</p>
              </a>
            );
          })}
        </div>
      </main>
    </div>
  );
}
