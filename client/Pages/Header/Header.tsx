import { Link } from 'react-router-dom'

export function Header() {
  return (
    <div className="font-montreal flex flex-nowrap justify-around">
      <div>
        <span className="text-[0.725em] text-gray-500">Name</span>
        <p className="text-transform: text-sm uppercase">
          Harpreet Singh, 2025
        </p>
      </div>
      <div>
        <span className="text-[0.725em] text-gray-500">Status</span>
        <p className="text-transform: text-sm uppercase">
          Currently Available for work
        </p>
      </div>
      <div>
        <span className="text-[0.725em] text-gray-500">Sitemap</span>
        <div className="text-transform: text-sm uppercase">
          <Link to="/">Index,</Link> <Link to="about">About,</Link>{' '}
          <Link to="projects">Projects,</Link> <Link to="contact">Contact</Link>
        </div>
      </div>
      <div>
        <span className="text-[0.725em] text-gray-500">Let&apos;s connect</span>
        <div className="text-transform: text-sm uppercase">
          <a href="#">Resume,</a>{' '}
          <a href="https://www.linkedin.com/in/harpreet-singh-slatch-894b94168/">
            linkedin,
          </a>{' '}
          <a href="https://github.com/slatch05">Github,</a>{' '}
          <a href="mailto:blue_slatch@icloud.com">Email</a>
        </div>
      </div>
    </div>
  )
}
