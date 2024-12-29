import { Link } from 'react-router-dom'

export function BiteShare() {
  return (
    <div className="mt-10 flex justify-between">
      <div className="w-[540px]">
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
  )
}
