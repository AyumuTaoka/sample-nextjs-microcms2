// pages/index.js
import Link from "next/link";
import { client } from "libs/client";

export default function Home({ blogs }) {
  return (
    <div>
      <h1>Next.js, Vercel, microCMS でブログサイトを作ってみた</h1>
      <ul>
        {blogs.map((blogs) => (
          <li key={blogs.id}>
            <Link href={`/blogs/${blogs.id}`}>{blogs.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blogs" });

  return {
    props: {
      blogs: data.contents,
    },
  };
};
