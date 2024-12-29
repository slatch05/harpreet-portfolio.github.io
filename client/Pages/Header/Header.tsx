import { Link } from 'react-router-dom'
import { Time } from '../../ui/time'

export function Header() {
  return (
    <div>
      <div className="flex justify-between font-montreal">
        <div className="max-w-60">
          <span className="text-[0.800rem]  text-gray-600">
            Harpreet Singh Slatch
          </span>

          <p className="uppercase">Full stack developer </p>
        </div>
        <div className="max-w-60">
          <span className="text-[0.800rem]  text-gray-600">Location</span>
          <Time />
        </div>
        <div className="max-w-60">
          <span className="text-[0.800rem]  text-gray-600">Sitemap</span>
          <div className="uppercase">
            <Link to="/" className="group relative mr-1">
              Index,
              <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="about" className="group relative mr-1">
              About,
              <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="projects" className="group relative mr-1">
              Projects,
              <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="contact" className="group relative">
              Contact
              <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
        </div>
        <div className="max-w-60">
          <span className="text-[0.800rem] text-gray-600">
            Let&apos;s connect
          </span>
          <div className="uppercase">
            <a
              href="https://sg.docs.wps.com/l/cIOaDnq-fAualvrsG?utm_source=wps_office_mac&utm_medium=comp_border_bar&utm_content=link&v=v2"
              className="group relative mr-1"
            >
              Resume,
              <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="https://github.com/slatch05"
              className="group relative mr-1"
            >
              Github,
              <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="https://www.linkedin.com/in/harpreet-singh-slatch-894b94168/"
              className="group relative mr-1"
            >
              LinkedIn,
              <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a href="mailto:blue_slatch@icloud.com" className="group relative">
              Email
              <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </div>
      </div>
      {/* <hr className="border-t-1 my-5 border-black"></hr> */}
    </div>
  )
}
