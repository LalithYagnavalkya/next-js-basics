import React from "react";
import Link from "next/link";

const news = () => {
  return (
    <div>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href={"/news/LalithYagnavlkya"}>NextJs is great Framework</Link>
        </li>
        <li>Not that great though</li>
      </ul>
    </div>
  );
};

export default news;
