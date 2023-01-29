import { client } from "libs/client";

export default function Home({ blogs }) {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <ul>
        {blogs.map((blog) => (
          <li className="mb-2" key={blog.id}>
            <a>{blog.title}</a>
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
