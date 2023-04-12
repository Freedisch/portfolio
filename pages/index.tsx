// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
import Typewriter from "typewriter-effect";
import Header from "./components/Header";
import Link from "next/link";
import Image from "next/image";
import testimage from "../public/saitama.png";
export default function Home() {
  return (
    <body className="gap-5 flex p-5 flex-col md:flex-row antialiased lg:mt-32 md:mt-20 mb-40 max-w-[calc(65ch+150px)] mx-auto">
      <div className="shrink-0 md:w-[150px]">
        <div className="sticky top-5">
          <h1>
            <Link href="/">
              <Image
                className="w-10 h-10 rounded-xl"
                alt="Freedisch"
                width="460"
                height="460"
                src={testimage}
                loading="lazy"
                decoding="async"
              />
            </Link>
          </h1>
          <div className="font-medium -ml-2 mt-5 md:mt-8 flex md:flex-col">
            <Link href="/" className="flex group">
              <span className="group-hover:bg-zinc-100 rounded-lg px-2 h-8 items-center group-hover:text-black inline-flex text-black">
                home
              </span>
            </Link>
            <Link href="/" className="flex group">
              <span className="group-hover:bg-zinc-100 rounded-lg px-2 h-8 items-center group-hover:text-black inline-flex text-black">
                about
              </span>
            </Link>
            <Link href="/" className="flex group">
              <span className="group-hover:bg-zinc-100 rounded-lg px-2 h-8 items-center group-hover:text-black inline-flex text-black">
                project
              </span>
            </Link>
            <Link href="/" className="flex group">
              <span className="group-hover:bg-zinc-100 rounded-lg px-2 h-8 items-center group-hover:text-black inline-flex text-black">
                Writing
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-[65ch]">
        <h2 className="text-3xl font-extrabold">Blog</h2>
      </div>
      <div className="mt-5">
        <div className="flex flex-col">
          <h1 className="font-mono"> Hello, I`m</h1>
          <h2 className="font-bold text-5xl">
            <span className="text-sky-500">
              <Typewriter
                options={{
                  strings: [
                    "Thibaut Freedisch",
                    "Back-End engineer",
                    "Student",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h2>
          <p className="text-zinc-500 text-sm mt-3">
            Welcome to my portfolio, currently underdevelopment click
            <a
              className="text-sky-400"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            >
              {" "}
              here
            </a>{" "}
            while waiting
          </p>
        </div>
      </div>
    </body>
  );
}
