import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next JS ChatGPT Starter</title>
      </Head>
      <div className="grid h-screen grid-cols-[260px_1fr]">
            <div>Sidebar</div>
            <div>Chat Window</div>
      </div>
    </>
  );
}
