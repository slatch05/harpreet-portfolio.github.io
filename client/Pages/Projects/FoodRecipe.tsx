import { Link } from 'react-router-dom'
import { Footer } from '../Footer/Footer'

export function FoodRecipe() {
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
          <p className="mt-10 text-4xl">Food Recipe</p>
          <hr className="border-t-1 my-5 border-black"></hr>
          <span className="text-xs font-light text-zinc-500">Dev Academy</span>
          <p className="font-light uppercase">Group project, 2024</p>
          <hr className="border-t-1 my-5 border-black"></hr>
          <span className="text-xs font-light text-zinc-500">
            BackEnd, UI/UX, 2024
          </span>
          <p className="font-light uppercase">Harpreet Singh Slatch</p>
          <hr className="border-t-1 my-5 border-black"></hr>
          <span className="text-xs font-light text-zinc-500">Copyright</span>
          <p className="font-light uppercase">© All Rights Reserved</p>
          <hr className="border-t-1 my-5 border-black"></hr>

          <a
            href="https://github.com/slatch05/food-Recipes"
            className="ml-3 mt-7 w-fit rounded-full border border-solid border-black px-2 py-1 text-center text-lg uppercase transition-all duration-300 ease-in-out hover:bg-black hover:text-white"
          >
            View code
          </a>

          <p className="mt-44 text-xs font-light text-zinc-500">
            Scroll to explore
          </p>
        </div>
        <div>
          <img
            className="w-[60rem] border-4 border-teal-100"
            src="public/image/food/food1.png"
            alt="BiteShare-HomePage"
          />
        </div>
      </div>
      <div className="grid h-screen place-items-center font-light">
        <div className="mt-52 text-5xl 2xl:text-6xl">
          A food recipe website that helps users discover their favorite recipes
          from a wide variety of cuisines. The platform makes it simple and
          enjoyable to find and try the dishes you love.
        </div>
        <div className="mb-48 ml-96 w-[46rem] uppercase">
          This project, completed as a Friday group collaboration by Harpreet,
          Nikki, and Gurwinder in just half a day, aimed to create a simple and
          user-friendly platform. Built using TypeScript, React, Node.js, and
          SQLite3, the web app combines a responsive frontend, efficient
          backend, and lightweight database management. The primary goal was to
          design a website where users can effortlessly search for and discover
          their favorite dishes from various cuisines. Despite the short
          timeframe, the team focused on creating an intuitive and engaging
          interface, showcasing their ability to deliver a functional and
          polished product in a limited timeframe.
        </div>
      </div>
      <div className="m-[4rem] bg-violet-50">
        <div className="mt-10 flex h-screen flex-col items-center justify-center">
          <img
            className="w-[67rem]"
            src="public/image/food/food2.png"
            alt="japFood-page"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            className="w-[67rem]"
            src="public/image/food/food3.png"
            alt="japFood-page"
          />
        </div>
        <div className="flex h-screen flex-col items-center justify-center">
          <img
            className="w-[67rem]"
            src="public/image/food/food4.png"
            alt="japFood-page"
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
