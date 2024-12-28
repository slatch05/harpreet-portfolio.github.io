import { Link } from 'react-router-dom'
import { Time } from '../../ui/time'

export function Header() {
  return (
    <div>
      <div className="font-montreal flex justify-between">
        <div className="max-w-60">
          <span className="text-[0.800rem] font-light text-gray-600">
            Harpreet Singh Slatch
          </span>

          <p className="uppercase">Full stack developer </p>
        </div>
        <div className="max-w-60">
          <span className="text-[0.800rem] font-light text-gray-600">
            Loaction
          </span>
          <Time />
        </div>
        <div className="max-w-60">
          <span className="text-[0.800rem] font-light text-gray-600">
            Sitemap
          </span>
          <div className="uppercase">
            <Link to="/">Index,</Link> <Link to="about">About,</Link>{' '}
            <Link to="projects">Projects,</Link>{' '}
            <Link to="contact">Contact</Link>
          </div>
        </div>
        <div className="max-w-60">
          <span className="text-[0.800rem] font-light text-gray-600">
            Let&apos;s connect
          </span>
          <div className="uppercase">
            <a href="#">Resume,</a>{' '}
            <a href="https://www.linkedin.com/in/harpreet-singh-slatch-894b94168/">
              linkedin,
            </a>{' '}
            <a href="https://github.com/slatch05">Github,</a>{' '}
            <a href="mailto:blue_slatch@icloud.com">Email</a>
          </div>
        </div>
      </div>
      <hr className="border-t-1 my-5 border-black"></hr>
    </div>
  )
}
