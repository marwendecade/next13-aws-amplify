// pages/index.js
import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react";

export default function Home({ formattedDate }) {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('/api/items').then((response) => response.json()).then((response) => {
      setItems(response.items)
    })
  }, [

  ])

  return (
    <>
      <h1>Static page</h1>
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
      <div style={{padding:'2rem'}}>

      <p>Data fetched from the API:</p>
      <ul>
        {items.map(({title}) => <li key={title}>{title}</li> )}
      </ul>
      </div>
      <Image src="/bg.jpeg" width={400} height={100} />
    </>
  );
}

export async function getStaticProps() {
  const buildDate = Date.now();
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "long",
  }).format(buildDate);

  return { props: { formattedDate } };
}
