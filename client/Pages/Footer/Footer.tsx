import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <div>
      <div className="mt-20 flex h-[200px] justify-between">
        <div className="w-[24rem] text-pretty text-xl">
          I’m always ready for new projects and collaborations!
          <div className="mt-14">
            <a
              className="w-fit rounded-full border border-solid border-black px-2 py-1 text-center text-lg uppercase transition-all duration-300 ease-in-out hover:bg-black hover:text-white"
              href="mailto: blue_slatch@icloud.com"
            >
              BLUE_SLATCH@ICLOUD.COM
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-20">
          <div className="max-w-60">
            <span className="text-[0.800rem]  text-gray-600">Sitemap</span>
            <div className="uppercase">
              <Link to="/" className="group relative mr-1">
                Index,
                <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-[rgb(255,47,1)] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/about" className="group relative mr-1">
                About,
                <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-[rgb(255,47,1)] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/projects" className="group relative mr-1">
                Projects [3],
                <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-[rgb(255,47,1)] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/contact" className="group relative">
                Contact
                <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-[rgb(255,47,1)] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
            <hr className="border-t-1 my-5 border-black"></hr>
            <div className="max-w-60">
              <span className="text-[0.800rem]  text-gray-600">
                Harpreet Singh Slatch
              </span>

              <p className="uppercase">Full stack developer </p>
            </div>
          </div>
          <div className="max-w-60 ">
            <span className="text-[0.800rem] text-gray-600">
              Let&apos;s connect
            </span>
            <div className="uppercase">
              <a
                href="https://sg.docs.wps.com/l/cIOaDnq-fAualvrsG?utm_source=wps_office_mac&utm_medium=comp_border_bar&utm_content=link&v=v2"
                className="group relative mr-1"
              >
                Resume,
                <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-[rgb(255,47,1)] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="https://github.com/slatch05"
                className="group relative mr-1"
              >
                Github,
                <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-[rgb(255,47,1)] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="https://www.linkedin.com/in/harpreet-singh-slatch-894b94168/"
                className="group relative mr-1"
              >
                LinkedIn,
                <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-[rgb(255,47,1)] transition-all duration-300 group-hover:w-full"></span>
              </a>

              <a
                href="mailto:blue_slatch@icloud.com"
                className="group relative"
              >
                Email
                <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-[rgb(255,47,1)] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
            <hr className="border-t-1 my-5 border-black"></hr>
            <div>
              <span className="text-[0.800rem] text-gray-600">Copyright</span>
              <p className="uppercase">© All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
