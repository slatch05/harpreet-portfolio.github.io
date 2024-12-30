import { Link } from 'react-router-dom'
import { Footer } from '../Footer/Footer'

export function GameHub() {
  return (
    <div>
      <div className="mt-20 flex justify-between">
        <div className="w-[28rem]">
          <Link
            to="/projects"
            className="mt-7 w-fit rounded-full border border-solid border-black px-2 py-1 text-center text-lg uppercase transition-all duration-300 ease-in-out hover:bg-black hover:text-white"
          >
            back to projects
          </Link>
          <p className="mt-10 text-4xl">Game Hub</p>
          <hr className="border-t-1 my-5 border-black"></hr>
          <span className="text-xs font-light text-zinc-500">Remote</span>
          <p className="font-light uppercase">Personal project, 2024</p>
          <hr className="border-t-1 my-5 border-black"></hr>
          <span className="text-xs font-light text-zinc-500">
            FrontEnd, BackEnd, UI/UX, 2024
          </span>
          <p className="font-light uppercase">Harpreet Singh Slatch</p>
          <hr className="border-t-1 my-5 border-black"></hr>
          <span className="text-xs font-light text-zinc-500">Copyright</span>
          <p className="font-light uppercase">© All Rights Reserved</p>
          <hr className="border-t-1 my-5 border-black"></hr>

          {/* <a
            href="#"
            className="mt-7 w-fit rounded-full border border-solid border-black px-2 py-1 text-center text-lg uppercase transition-all duration-300 ease-in-out hover:bg-black hover:text-white"
          >
            Live website
          </a>
          <a
            href="#"
            className="ml-3 mt-7 w-fit rounded-full border border-solid border-black px-2 py-1 text-center text-lg uppercase transition-all duration-300 ease-in-out hover:bg-black hover:text-white"
          >
            View code
          </a> */}
          <div className="flex items-center gap-2">
            <p className=" w-fit rounded-full bg-[rgb(255,47,1)] px-2 py-1 text-lg text-white">
              Under construction
            </p>
            <p className="text-xl">Exciting things are on the way!</p>
          </div>

          <p className="mt-44 text-xs font-light text-zinc-500">
            Scroll to explore
          </p>
        </div>
        <div>
          <img
            className="w-[60rem]"
            src="public/image/game-hub/gameHub.png"
            alt="BiteShare-HomePage"
          />
        </div>
      </div>
      <div className="grid h-screen place-items-center font-light">
        <div className="mt-52 text-6xl 2xl:text-6xl">
          Game Hub is a web application offering a collection of amazing
          mini-games designed for simple, engaging, and entertaining
          experiences. It’s your go-to platform for fun and relaxation!
        </div>
        <div className="mb-48 ml-96 w-[46rem] uppercase">
          I’m passionate about game development, and this personal project
          reflects that enthusiasm. The goal was to create a minimalist,
          user-friendly website to host a variety of engaging mini-games while
          also providing a platform for gaming enthusiasts to purchase
          high-quality gaming mice and keyboards. <br /> <br />
          Built using TypeScript, React, Node.js, Express, and SQLite3, this web
          app seamlessly integrates a responsive frontend, robust backend logic,
          and efficient data management. Designed to provide a smooth and
          immersive user experience, it showcases my skills in combining modern
          web technologies with a focus on simplicity and functionality. <br />{' '}
          <br /> This project is not just about games—it’s about crafting a
          platform that brings joy, connection, and the tools gamers need for an
          enhanced gaming experience.
        </div>
      </div>
      <div className="m-[4rem] bg-violet-50">
        <div className="mt-10 flex h-screen flex-col items-center justify-center">
          <img
            className="w-[67rem] rounded-xl"
            src="public/image/game-hub/gameHub3.png"
            alt="request-page"
          />
        </div>
        <div className="flex h-screen flex-col items-center justify-center">
          <img
            className="w-[67rem] rounded-xl"
            src="public/image/game-hub/gameHub4.png"
            alt="request-page"
          />
        </div>
      </div>
      <div className="m-[4rem] bg-sky-50">
        <div className="mt-10 flex h-screen flex-col items-center justify-center">
          <img
            className="w-[67rem] rounded-xl "
            src="public/image/game-hub/gameHub2.png"
            alt="request-page"
          />
        </div>
        <div className="flex h-screen flex-col items-center justify-center">
          <img
            className="w-[67rem] rounded-xl "
            src="public/image/game-hub/gameHub5.png"
            alt="request-page"
          />
        </div>
      </div>
      <div className="text-right">
        <a
          href="#top"
          className="mt-7 w-fit rounded-full border border-solid border-black px-2 py-1 text-center text-lg uppercase transition-all duration-300 ease-in-out hover:bg-black hover:text-white"
        >
          back to top
        </a>
      </div>
      <Footer />
    </div>
  )
}
