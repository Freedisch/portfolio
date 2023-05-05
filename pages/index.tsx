/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
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
    <div className="w-full max-w-3xl mx-auto mb-28 px-4">
      <div className="mt-4 sm:pl-[15%] text-sm w-fit sm:w-full flex flex-col sm:flex-row gap-5 sm:gap-0 justify-between">
        <a className="linkstyle flex gap-2 items-center" href="/#experience">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="20"
            viewBox="0 0 10 20"
            fill="none"
          >
            <g clip-path="url(#clip0_361_2396)">
              <path
                d="M1.4 9.4V10.8H7V12.186L6.986 12.2H5.6V13.6H7V12.2H8.4V10.8H9.8V9.4H8.4V8H7V6.6H5.6V8H6.986L7 8.014V9.4H1.4Z"
                fill="black"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_361_2396">
                <rect width="10" height="20" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
          <div className="flex flex-grow gap-2 justify-between items-center">
            <div>/experience</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
              ></path>
            </svg>
          </div>
        </a>
        <a className="linkstyle flex gap-2 items-center" href="/#projects">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="20"
            viewBox="0 0 10 20"
            fill="none"
          >
            <g clip-path="url(#clip0_361_2396)">
              <path
                d="M1.4 9.4V10.8H7V12.186L6.986 12.2H5.6V13.6H7V12.2H8.4V10.8H9.8V9.4H8.4V8H7V6.6H5.6V8H6.986L7 8.014V9.4H1.4Z"
                fill="black"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_361_2396">
                <rect width="10" height="20" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
          <div className="flex flex-grow gap-2 justify-between items-center">
            <div>/projects</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
              ></path>
            </svg>
          </div>
        </a>
        <a
          className="linkstyle flex gap-2 items-center"
          href="https://dev.to/freedisch"
          rel="noreferrer"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="20"
            viewBox="0 0 10 20"
            fill="none"
          >
            <g clip-path="url(#clip0_361_2396)">
              <path
                d="M1.4 9.4V10.8H7V12.186L6.986 12.2H5.6V13.6H7V12.2H8.4V10.8H9.8V9.4H8.4V8H7V6.6H5.6V8H6.986L7 8.014V9.4H1.4Z"
                fill="black"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_361_2396">
                <rect width="10" height="20" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
          <div className="flex flex-grow gap-2 justify-between items-center">
            <div>/blog</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
              ></path>
            </svg>
          </div>
        </a>
        <a
          className="linkstyle flex gap-2 items-center"
          href="https://docs.google.com/document/d/18mb8frpX6eRtiIqM0KYOIP_7dmXexF1vJM4tcXFudeA/edit?usp=sharing"
          rel="noreferrer"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="20"
            viewBox="0 0 10 20"
            fill="none"
          >
            <g clip-path="url(#clip0_361_2396)">
              <path
                d="M1.4 9.4V10.8H7V12.186L6.986 12.2H5.6V13.6H7V12.2H8.4V10.8H9.8V9.4H8.4V8H7V6.6H5.6V8H6.986L7 8.014V9.4H1.4Z"
                fill="black"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_361_2396">
                <rect width="10" height="20" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
          <div className="flex flex-grow gap-2 justify-between items-center">
            <div>/resume</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              ></path>
            </svg>
          </div>
        </a>
      </div>

      <main>
        <div className="mt-14">
          <section className="mt-7">
            <h1 className="text-3xl font-black my-0">
              Hi 👋! I am Freedisch Thibaut Batale,
            </h1>
            <div className="text-sm">
              <p className="my-5">
                an undergraduate student at African Leadership University with a
                major in <b>Software Enginnering</b>
              </p>
              <p className="my-5">
                I build and unintentionally break things (which I eventually fix
                🙂). I have keen interests in software development, system
                design and love contributing to Open Source.
              </p>
            </div>
            <div className="mt-7 grid grid-cols-2 w-fit xs:w-full xs:flex xs:justify-end gap-6 items-center text-sm">
              <div>
                <a href="mailto:freeproduc@gmail.com">
                  <div className="linkstyle leading-dot">
                    <div className="flex items-center justify-between gap-2">
                      Email
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
              <a
                href="https://www.linkedin.com/in/thibaut-freedisch-batale-905843208"
                target="_blank"
                rel="noreferrer"
              >
                <div className="linkstyle leading-dot">
                  <div className="flex items-center justify-between gap-2">
                    LinkedIn
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </div>
                </div>
              </a>
              <a
                href="https://github.com/freedisch/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="linkstyle leading-dot">
                  <div className="flex items-center justify-between gap-2">
                    GitHub
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </div>
                </div>
              </a>
              <a
                href="https://twitter.com/freedisch9/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="linkstyle leading-dot">
                  <div className="flex items-center justify-between gap-2">
                    Twitter
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </section>

          <div id="experience">
            <h2 className="mt-8 mb-4 text-2xl font-bold">Experience</h2>
            <div>
              <div className="content-card my-5 px-4 py-5 border-2 border-blue-500 shadow-lg hover:border-purple-500 hover:shadow-2xl">
                <div className="text-lg font-bold mb-1">
                  Software Development Intern
                </div>
                <a
                  href="https://jp.mercari.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="linkstyle flex text-black text-sm w-fit mb-1 space-x-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                    ></path>
                  </svg>
                  <div>Mercari, Inc</div>
                </a>
                <div className="flex flex-col-reverse sm:flex-row sm:justify-between text-sm text-gray-500">
                  <div className=" flex items-center space-x-2 mb-1">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="w-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                        ></path>
                      </svg>
                    </div>
                    <div>May 2022 - Sept 2022</div>
                  </div>
                  <a
                    className="linkstyle w-fit flex space-x-2 items-center mb-1"
                    href="https://engineering.mercari.com/en/blog/entry/20220930-building-secure-apps-using-web-workers/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="w-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        ></path>
                      </svg>
                    </div>
                    <div>Blog on building secure web apps</div>
                  </a>
                </div>
                <div className="text-sm mt-2 text-gray-600">
                  <p className="my-1">
                    - Worked on the authentication module to secure the access
                    tokens from various attacks using Web Workers. 👮‍♂️
                  </p>
                  <p className="my-1">
                    - Refactored the social auth with Apple &amp; Google to make
                    them more snappy &amp; performant. 🎉
                  </p>
                  <p className="my-1">
                    - Built internal workflows and spinnaker pipelines to enable
                    custom domain in local env. (with TLS). It enabled us to
                    test some products in the local development environment and
                    improve developers' productivity 🙂.
                  </p>
                </div>
              </div>

              <div className="content-card my-5 px-4 py-5 border-2 border-blue-500 shadow-lg hover:border-purple-500 hover:shadow-2xl">
                <div className="text-lg font-bold mb-1">
                  Software Development Intern
                </div>
                <a
                  href="https://jp.mercari.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="linkstyle flex text-black text-sm w-fit mb-1 space-x-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                    ></path>
                  </svg>
                  <div>Mercari, Inc</div>
                </a>
                <div className="flex flex-col-reverse sm:flex-row sm:justify-between text-sm text-gray-500">
                  <div className=" flex items-center space-x-2 mb-1">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="w-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                        ></path>
                      </svg>
                    </div>
                    <div>May 2022 - Sept 2022</div>
                  </div>
                  <a
                    className="linkstyle w-fit flex space-x-2 items-center mb-1"
                    href="https://engineering.mercari.com/en/blog/entry/20220930-building-secure-apps-using-web-workers/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="w-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        ></path>
                      </svg>
                    </div>
                    <div>Blog on building secure web apps</div>
                  </a>
                </div>
                <div className="text-sm mt-2 text-gray-600">
                  <p className="my-1">
                    - Worked on the authentication module to secure the access
                    tokens from various attacks using Web Workers. 👮‍♂️
                  </p>
                  <p className="my-1">
                    - Refactored the social auth with Apple &amp; Google to make
                    them more snappy &amp; performant. 🎉
                  </p>
                  <p className="my-1">
                    - Built internal workflows and spinnaker pipelines to enable
                    custom domain in local env. (with TLS). It enabled us to
                    test some products in the local development environment and
                    improve developers' productivity 🙂.
                  </p>
                </div>
              </div>

              <div className="content-card my-5 px-4 py-5 border-2 border-blue-500 shadow-lg hover:border-purple-500 hover:shadow-2xl">
                <div className="text-lg font-bold mb-1">
                  Software Development Intern
                </div>
                <a
                  href="https://jp.mercari.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="linkstyle flex text-black text-sm w-fit mb-1 space-x-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                    ></path>
                  </svg>
                  <div>Mercari, Inc</div>
                </a>
                <div className="flex flex-col-reverse sm:flex-row sm:justify-between text-sm text-gray-500">
                  <div className=" flex items-center space-x-2 mb-1">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="w-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                        ></path>
                      </svg>
                    </div>
                    <div>May 2022 - Sept 2022</div>
                  </div>
                  <a
                    className="linkstyle w-fit flex space-x-2 items-center mb-1"
                    href="https://engineering.mercari.com/en/blog/entry/20220930-building-secure-apps-using-web-workers/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="w-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        ></path>
                      </svg>
                    </div>
                    <div>Blog on building secure web apps</div>
                  </a>
                </div>
                <div className="text-sm mt-2 text-gray-600">
                  <p className="my-1">
                    - Worked on the authentication module to secure the access
                    tokens from various attacks using Web Workers. 👮‍♂️
                  </p>
                  <p className="my-1">
                    - Refactored the social auth with Apple &amp; Google to make
                    them more snappy &amp; performant. 🎉
                  </p>
                  <p className="my-1">
                    - Built internal workflows and spinnaker pipelines to enable
                    custom domain in local env. (with TLS). It enabled us to
                    test some products in the local development environment and
                    improve developers' productivity 🙂.
                  </p>
                </div>
              </div>

              <div className="content-card my-5 px-4 py-5 border-2 border-blue-500 shadow-lg hover:border-purple-500 hover:shadow-2xl">
                <div className="text-lg font-bold mb-1">
                  Software Development Intern
                </div>
                <a
                  href="https://jp.mercari.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="linkstyle flex text-black text-sm w-fit mb-1 space-x-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                    ></path>
                  </svg>
                  <div>Mercari, Inc</div>
                </a>
                <div className="flex flex-col-reverse sm:flex-row sm:justify-between text-sm text-gray-500">
                  <div className=" flex items-center space-x-2 mb-1">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="w-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                        ></path>
                      </svg>
                    </div>
                    <div>May 2022 - Sept 2022</div>
                  </div>
                  <a
                    className="linkstyle w-fit flex space-x-2 items-center mb-1"
                    href="https://engineering.mercari.com/en/blog/entry/20220930-building-secure-apps-using-web-workers/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="w-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        ></path>
                      </svg>
                    </div>
                    <div>Blog on building secure web apps</div>
                  </a>
                </div>
                <div className="text-sm mt-2 text-gray-600">
                  <p className="my-1">
                    - Worked on the authentication module to secure the access
                    tokens from various attacks using Web Workers. 👮‍♂️
                  </p>
                  <p className="my-1">
                    - Refactored the social auth with Apple &amp; Google to make
                    them more snappy &amp; performant. 🎉
                  </p>
                  <p className="my-1">
                    - Built internal workflows and spinnaker pipelines to enable
                    custom domain in local env. (with TLS). It enabled us to
                    test some products in the local development environment and
                    improve developers' productivity 🙂.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="projects">
            <h2 className="mt-8 mb-4 text-2xl font-bold">Projects</h2>
            <div>
              <section className="content-card group my-5 sm:grid grid-cols-8 items-center order-2 border-blue-500 shadow-lg hover:border-purple-500 hover:shadow-2xl">
                <div className="col-span-3 h-full w-full prose-img:my-0">
                  <Image
                    alt="SigmaFit"
                    src={testimage}
                    width="1400"
                    height="800"
                    decoding="async"
                    data-nimg="future"
                    className="sm:grayscale sm:group-hover:grayscale-0 border object-cover h-full"
                    loading="lazy"
                  />
                </div>

                <div className="col-span-5 px-4 py-5">
                  <a
                    href="https://subhamx.hashnode.dev/planetscale-hackathon-sigmafit-workout-tracking-app"
                    target="_blank"
                    className="mb-1 text-lg text-gray-600 hover:text-blue-700 font-bold"
                    rel="noreferrer"
                  >
                    <span className="border-b border-dashed hover:border-solid border-b-gray-300">
                      SigmaFit
                    </span>
                  </a>
                  <div className="text-sm mt-1">Next.js｜Node.js</div>
                  <div className="text-sm text-gray-600">
                    <p className="last:mb-0 my-1">
                      - It makes workout tracking very easy. And helps people
                      with personalized insights to improve your fitness
                      journey.
                    </p>
                    <p className="last:mb-0 my-1">
                      - Built as part of planetscale hackathon on hashnode; Used
                      expressjs, Planetscale, and Next.js to build a robust
                      platform.
                    </p>
                  </div>
                </div>
              </section>

              <section className="content-card group my-5 sm:grid grid-cols-8 items-center order-2 border-blue-500 shadow-lg hover:border-purple-500 hover:shadow-2xl">
                <div className="col-span-3 h-full w-full prose-img:my-0">
                  <Image
                    alt="SigmaFit"
                    src={testimage}
                    width="1400"
                    height="800"
                    decoding="async"
                    data-nimg="future"
                    className="sm:grayscale sm:group-hover:grayscale-0 border object-cover h-full"
                    loading="lazy"
                  />
                </div>

                <div className="col-span-5 px-4 py-5">
                  <a
                    href="https://subhamx.hashnode.dev/planetscale-hackathon-sigmafit-workout-tracking-app"
                    target="_blank"
                    className="mb-1 text-lg text-gray-600 hover:text-blue-700 font-bold"
                    rel="noreferrer"
                  >
                    <span className="border-b border-dashed hover:border-solid border-b-gray-300">
                      SigmaFit
                    </span>
                  </a>
                  <div className="text-sm mt-1">Next.js｜Node.js</div>
                  <div className="text-sm text-gray-600">
                    <p className="last:mb-0 my-1">
                      - It makes workout tracking very easy. And helps people
                      with personalized insights to improve your fitness
                      journey.
                    </p>
                    <p className="last:mb-0 my-1">
                      - Built as part of planetscale hackathon on hashnode; Used
                      expressjs, Planetscale, and Next.js to build a robust
                      platform.
                    </p>
                  </div>
                </div>
              </section>

              <section className="content-card group my-5 sm:grid grid-cols-8 items-center order-2 border-blue-500 shadow-lg hover:border-purple-500 hover:shadow-2xl">
                <div className="col-span-3 h-full w-full prose-img:my-0">
                  <Image
                    alt="SigmaFit"
                    src={testimage}
                    width="1400"
                    height="800"
                    decoding="async"
                    data-nimg="future"
                    className="sm:grayscale sm:group-hover:grayscale-0 border object-cover h-full"
                    loading="lazy"
                  />
                </div>

                <div className="col-span-5 px-4 py-5">
                  <a
                    href="https://subhamx.hashnode.dev/planetscale-hackathon-sigmafit-workout-tracking-app"
                    target="_blank"
                    className="mb-1 text-lg text-gray-600 hover:text-blue-700 font-bold"
                    rel="noreferrer"
                  >
                    <span className="border-b border-dashed hover:border-solid border-b-gray-300">
                      SigmaFit
                    </span>
                  </a>
                  <div className="text-sm mt-1">Next.js｜Node.js</div>
                  <div className="text-sm text-gray-600">
                    <p className="last:mb-0 my-1">
                      - It makes workout tracking very easy. And helps people
                      with personalized insights to improve your fitness
                      journey.
                    </p>
                    <p className="last:mb-0 my-1">
                      - Built as part of planetscale hackathon on hashnode; Used
                      expressjs, Planetscale, and Next.js to build a robust
                      platform.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
