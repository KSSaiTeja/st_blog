import Head from "next/head";

const posts = [
  { title: "React Testing", excerpt: "Learn React Testing" },
  { title: "React With Tailwind", excerpt: "Learn React with Tailwind" },
];

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8 bg-gray-300">
      <Head>
        <title>K S Sai Teja&apos;s | Blog</title>
        <link rel="icon" href="/public/favicon.ico"></link>
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {posts.map((posts, index) => (
          <div>
            {posts.title}
            {posts.excerpt}
          </div>
        ))}
      </div>
    </div>
  );
}
