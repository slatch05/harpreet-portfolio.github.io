import { Link } from 'react-router-dom'

export function Projects() {
  return (
    <div className="mt-20">
      <h1 className="text-5xl font-light 2xl:text-[5rem]">
        Selected projects (2024 - present)
      </h1>
      <div>
        <div className="flex flex-row gap-10 font-light">
          <div className="mt-10 flex flex-col border border-black p-5">
            <img
              className="h-52 w-72 shadow-sm 2xl:h-[20rem] 2xl:w-[30rem]"
              src="public/image/game-hub/gameHub.png"
              alt="gamehub-homepage"
            />
            <span className="mt-2 text-sm font-extralight 2xl:text-base">
              FrontEnd, BackEnd, UI/UX, 2024
            </span>
            <span className="text-lg uppercase 2xl:text-2xl">game hub</span>
            <Link
              className=" mt-7 w-fit rounded-full border border-solid border-black  px-2 text-center uppercase transition-all duration-300 ease-in-out hover:bg-black hover:text-white 2xl:text-xl"
              to="/gamehub"
            >
              view case
            </Link>
          </div>
          <div className="mt-10 flex flex-col border border-black p-5">
            <img
              className="h-52 w-72 shadow-sm 2xl:h-[20rem] 2xl:w-[30rem]"
              src="public/image/bite-share/biteShare1.png"
              alt="biteshare-homepage"
            />
            <span className="mt-2 text-sm font-extralight 2xl:text-base">
              FrontEnd Lead, UI/UX, 2024
            </span>
            <span className="text-lg uppercase 2xl:text-2xl">Bite share</span>
            <Link
              className=" mt-7 w-fit rounded-full border border-solid border-black  px-2  text-center uppercase transition-all duration-300 ease-in-out hover:bg-black hover:text-white 2xl:text-xl"
              to="/biteshare"
            >
              view case
            </Link>
          </div>
          <div className="mt-10 flex flex-col border border-black p-5">
            <img
              className="h-52 w-72 shadow-sm 2xl:h-[20rem] 2xl:w-[30rem]"
              src="public/image/food/food1.png"
              alt="gamehub-homepage"
            />
            <span className="mt-2 text-sm font-extralight">
              FrontEnd, BackEnd, UI/UX, 2024
            </span>
            <span className="text-lg uppercase 2xl:text-2xl">Food Recipe</span>
            <Link
              className=" mt-7 w-fit rounded-full border border-solid border-black  px-2  text-center uppercase transition-all duration-300 ease-in-out hover:bg-black hover:text-white 2xl:text-xl"
              to="/foodrecipe"
            >
              view case
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
