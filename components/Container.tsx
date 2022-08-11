import Image from "next/image";
import Head from "next/head";
import metadata from "../data/metadata";
import Nav from "./Nav";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import Link from "next/link";
import Utterances from "./utterances";

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
    // <div>
    <Fragment>
      <div className={`w-full flex flex-col items-center shadow-md h-16`}>
        <Head>
          <title>{meta.title}</title>
          <meta content={meta.description} name="description" />
          <meta property="og:site_name" content={meta.author} />
        </Head>

        {/* <header
          className={`absolute w-full flex flex-row justify-between items-center my-1 shadow-md h-16 `}
        > */}
        <header
          className={`absolute w-full md:max-w-4xl max-w-[90%] flex items-center justify-between h-16`}
        >
          <Link href={"/"} passHref className="">
            <a>
              <div className={` `}>
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
        {check && <Utterances />}
        <footer className="w-full relative text-center text-stone-500">
          <p className="dark:text-white pt-10 pb-10">
            © 2022. Unsung. All rights reserved.
          </p>
        </footer>
      </div>
    </Fragment>
  );
};

export default Container;
