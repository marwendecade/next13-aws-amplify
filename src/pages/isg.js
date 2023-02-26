// pages/index.js
import Image from "next/image";
import Link from "next/link";

export default function Home({ formattedDate }) {
  return (
    <>
      <h1>ISG</h1>
      <Image src="/next.svg" width={200} height={100} />
      <p>This page is static. It was built on {formattedDate}.</p>
      <p>
        <Link href="/ssr">
          SSR
        </Link>
        &nbsp;
        <Link href="/isg">
          ISG
        </Link>
        &nbsp;
        <Link href="/">
          SSG
        </Link>
      </p>
    </>
  );
}

export async function getStaticProps() {
  const buildDate = Date.now();
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "long",
  }).format(buildDate);

  return {
    revalidate: 60 * 2,
    props: { formattedDate }
  };
}
