import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const details = () => {
  const router = useRouter();
  console.log(router.query.newsId);
  return (
    <div>
      <Head>
        <title>{router.query.newsId}</title>
        <meta name="keywords" content="web development, programming" />
      </Head>
      details
    </div>
  );
};

export default details;
