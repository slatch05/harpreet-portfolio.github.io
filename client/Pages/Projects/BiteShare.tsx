import { Link } from 'react-router-dom'

export function BiteShare() {
  return (
    <div>
      <div className="mt-10 flex min-h-screen justify-between">
        <div className="w-[500px]">
          <Link
            to="/projects"
            className="mt-7 w-fit rounded-full border border-solid border-black px-2 py-0.5 text-center uppercase transition-all duration-300 ease-in-out hover:bg-black hover:text-white"
          >
            back to projects
          </Link>
          <p className="mt-10 text-4xl">Bite-Share</p>
          <hr className="border-t-1 my-5 border-black"></hr>
          <span className="text-xs font-light text-zinc-500">Dev Academy</span>
          <p className="font-light uppercase">Group Project, 2024</p>
          <hr className="border-t-1 my-5 border-black"></hr>
          <span className="text-xs font-light text-zinc-500">
            FrontEnd Lead & UI/UX
          </span>
          <p className="font-light uppercase">Harpreet Singh Slatch</p>
          <hr className="border-t-1 my-5 border-black"></hr>
          <span className="text-xs font-light text-zinc-500">Copyright</span>
          <p className="font-light uppercase">© All Rights Reserved</p>
          <hr className="border-t-1 my-5 border-black"></hr>

          <a
            href="https://bite-share-pohutukawa24.devacademy.nz"
            className="mt-7 w-fit rounded-full border border-solid border-black px-2 py-0.5 text-center uppercase transition-all duration-300 ease-in-out hover:bg-black hover:text-white"
          >
            Live website
          </a>
          <a
            href="https://github.com/slatch05/bite-share"
            className="ml-3 mt-7 w-fit rounded-full border border-solid border-black px-2 py-0.5 text-center uppercase transition-all duration-300 ease-in-out hover:bg-black hover:text-white"
          >
            View code
          </a>
          <p className="mt-44 text-xs font-light text-zinc-500">
            Scroll to explore
          </p>
        </div>
        <div>
          <img
            className="w-[900px] border border-black"
            src="public/image/bite-share/biteShare1.png"
            alt="BiteShare-HomePage"
          />
        </div>
      </div>
      <div>
        <div className=" text-5xl 2xl:text-6xl">
          Bite-Share is a web application designed to strengthen community
          connections by connecting individuals or organizations willing to
          donate food with those in need.
        </div>
        <div className="ml-96 mt-20 w-7/12 text-justify font-light">
          This project was a collaborative effort by Henry, Gurwinder, and
          Harpreet, aimed at creating a minimalist and user-friendly website to
          facilitate food sharing within the community. It features a simple
          interface for sharing meals, a static messaging system for user
          communication, and essential CRUD operations to ensure seamless
          interactions. Built using TypeScript, React, Node.js, Express, and
          SQLite3, the web app combines a responsive frontend, efficient backend
          logic, and lightweight data management. By reducing food waste and
          providing a means to help those in need, this project underscores the
          team’s commitment to functionality, simplicity, and social impact.
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="mb-10 flex w-1/3 flex-row items-center justify-center p-5">
          <img
            className="mr-4 border-2 border-black bg-black"
            src="public/image/bite-share/give1.png"
            alt="give-page "
          />
          <img
            className="mr-4 border-2 border-black bg-black"
            src="public/image/bite-share/give2.png"
            alt="give-page "
          />
          <img
            className="mr-4 border-2 border-black bg-black"
            src="public/image/bite-share/give3.png"
            alt="give-page "
          />
        </div>
      </div>
      <div className="mt-5 flex items-center justify-center">
        <img
          className="w-3/4 border-2 border-black "
          src="public/image/bite-share/biteShare3.png"
          alt="request-page"
        />
      </div>
      <div className="mt-20 flex items-center justify-center">
        <img
          className="w-3/4 border-2 border-black "
          src="public/image/bite-share/biteShare4.png"
          alt="text-page"
        />
      </div>
      <div className="mb-10 mt-20 flex items-center justify-center">
        <div className="flex w-2/4 flex-row items-center justify-center p-5">
          <img
            className="mr-3 border-2 border-black"
            src="public/image/bite-share/biteShare5.png"
            alt="text-page"
          />

          <img
            className="mr-3 border-2 border-black"
            src="public/image/bite-share/biteShare6.png"
            alt="text-page"
          />
        </div>
      </div>
      <div className="mb-40">
        <a
          href="#top"
          className="mt-7 flex w-fit justify-end rounded-full border border-solid border-black px-2 py-1 text-center uppercase transition-all duration-300 ease-in-out hover:bg-black hover:text-white"
        >
          back to top
        </a>
      </div>
    </div>
  )
}
