import Image from "next/image";
import Head from "next/head";
import metadata from "../data/metadata";
import Nav from "./Nav";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";

const Container = (props) => {
  const router = useRouter();

  const [check] = useState(router.pathname === "/blog/[slug]");

  // console.log("props : ", router.pathname === "/blog/[slug]");
  const meta = {
    title: metadata.title,
    description: metadata.description,
    author: metadata.author,
    ...props.customMeta,
  };

  return (
    <div>
      <div className={`w-full flex flex-col items-center`}>
        <Head>
          <title>{meta.title}</title>
          <meta content={meta.description} name="description" />
          <meta property="og:site_name" content={meta.author} />
        </Head>

        <header
          className={`absolute w-full flex flex-row justify-between items-center my-1 shadow-md h-16 `}
        >
          <Link href={"/"} passHref>
            <a>
              <div
                className={`flex flex-row items-center ml-6 xl:ml-96 md:ml-44`}
              >
                {/* <Image
                  src={`/logo.png`}
                  alt="로고"
                  width={45}
                  height={45}
                  objectFit={`cover`}
                  className={`rounded-full`}
                /> */}
                <span className={`mx-2 font-sans font-black font text-lg`}>
                  {metadata.title}
                </span>
              </div>
            </a>
          </Link>
          <Nav />
        </header>
        <main
          className={`w-full md:max-w-3xl max-w-xs mt-16 ${
            check && "dark:invert"
          }`}
        >
          {props.children}
        </main>
      </div>
      <footer className="w-full h-24  grid items-center text-center text-stone-600">
        <p className="dark:text-white">© 2022. Unsung. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Container;
