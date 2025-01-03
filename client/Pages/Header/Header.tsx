import { Link } from 'react-router-dom'
import { Time } from '../../ui/time'

export function Header() {
  return (
    <div>
      <div className="flex justify-between font-montreal text-sm 2xl:text-xl">
        <div>
          <span className="text-sm text-gray-600 2xl:text-base">
            Harpreet Singh Slatch
          </span>

          <p className="uppercase">Full stack developer </p>
        </div>
        <div className="">
          <span className="text-sm text-gray-600  2xl:text-base">Location</span>
          <Time />
        </div>
        <div className="">
          <span className="text-sm text-gray-600  2xl:text-base">Sitemap</span>
          <div className="uppercase">
            <Link to="/" className="group relative mr-1">
              Index,
              <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-[rgb(255,47,1)] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="about" className="group relative mr-1">
              About,
              <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-[rgb(255,47,1)] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="projects" className="group relative mr-1">
              Projects [3],
              <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-[rgb(255,47,1)] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="contact" className="group relative">
              Contact
              <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-[rgb(255,47,1)] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
        </div>
        <div className="">
          <span className="text-sm text-gray-600  2xl:text-base">
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

            <a href="mailto:blue_slatch@icloud.com" className="group relative">
              Email
              <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-[rgb(255,47,1)] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
