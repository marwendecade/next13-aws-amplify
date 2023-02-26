// pages/ssr.js
import Link from "next/link";

export default function SSR({ formattedDate }) {
  return (
    <>
      <h1>SSG</h1>
      <p>
        This page is server-side rendered. It was rendered on {formattedDate}.
      </p>
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

export async function getServerSideProps() {
  const renderDate = Date.now();
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "long",
  }).format(renderDate);
  console.log(
    `SSR ran on ${formattedDate}. This will be logged in CloudWatch.`
  );
  return { props: { formattedDate } };
}
