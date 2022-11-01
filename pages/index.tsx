import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <div className="grid items-center justify-center h-screen">
      <div className="">
        <h1 className="font-mono"> Hello, I'm</h1>
        <h1 className="font-bold text-5xl">
          <span className="text-lime-500">
            <Typewriter
              options={{
                strings: ["Thibaut Freedisch", "Back-End engineer", "Student"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h1>
        <p className="text-2xl p-5">
          Welcome to my portfolio, it's currently underdevelopment click
          <a
            className="text-purple-400"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          >
            {" "}
            here
          </a>{" "}
          while waiting
        </p>
      </div>
    </div>
  );
}
