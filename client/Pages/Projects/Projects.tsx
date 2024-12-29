import { Link } from 'react-router-dom'

export function Projects() {
  return (
    <div className="mt-10 min-h-screen">
      <h1 className="text-5xl">Selected projects (2024 - present)</h1>
      <div className="flex flex-row gap-10 font-light">
        <div className="mt-10 flex flex-col border border-black p-5">
          <img
            className="h-52 w-72 shadow-sm"
            src="public/image/game-hub/gameHub.png"
            alt="gamehub-homepage"
          />
          <span className="mt-2 text-sm font-extralight">
            FrontEnd, BackEnd, UI/UX, 2024
          </span>
          <span className=" uppercase">game hub</span>
          <Link
            className=" mt-7 w-fit rounded-full border border-solid border-black  px-2  text-center uppercase transition-all duration-300 ease-in-out hover:bg-black hover:text-white"
            to="/gamehub"
          >
            view case
          </Link>
        </div>
        <div className="mt-10 flex flex-col border border-black p-5">
          <img
            className="h-52 w-72 shadow-sm"
            src="public/image/bite-share/biteShare1.png"
            alt="biteshare-homepage"
          />
          <span className="mt-2 text-sm font-extralight">
            FrontEnd Lead, UI/UX, 2024
          </span>
          <span className=" uppercase">Bite share</span>
          <Link
            className=" mt-7 w-fit rounded-full border border-solid border-black  px-2  text-center uppercase transition-all duration-300 ease-in-out hover:bg-black hover:text-white"
            to="/biteshare"
          >
            view case
          </Link>
        </div>
        <div className="mt-10 flex flex-col border border-black p-5">
          <img
            className="h-52 w-72 shadow-sm"
            src="public/image/food/food1.png"
            alt="gamehub-homepage"
          />
          <span className="mt-2 text-sm font-extralight">
            FrontEnd, BackEnd, UI/UX, 2024
          </span>
          <span className=" uppercase">Food Recipe</span>
          <Link
            className=" mt-7 w-fit rounded-full border border-solid border-black  px-2  text-center uppercase transition-all duration-300 ease-in-out hover:bg-black hover:text-white"
            to="/foodrecipe"
          >
            view case
          </Link>
        </div>
      </div>
    </div>
  )
}
