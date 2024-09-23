import { useState } from 'react'
import { getCurrentTheme, themeToggle } from '../ts/theme-switcher'
import { MdOutlineLightMode, MdOutlineDarkMode, MdOutlineSettings } from "react-icons/md"
import { Link } from 'react-router-dom'

export const Navbar = () => {

  const [actualTheme, setActualTheme] = useState(getCurrentTheme())

  return (
    <section className='mb-0 h-12'>
      <nav className="container-fluid">
        <ul><li><Link to={"/"}><strong className='contrast'>GuessTheSong</strong></Link></li></ul>
        <ul>
          <li className='text-sm'>
            <span>data and samples from: </span>
            <a className='text-purple-600 inline-flex w-fit gap-2' target='_blank' href="https://www.deezer.com/">
              DEEZER <img className='h-4' src="https://e-cdn-files.dzcdn.net/cache/images/common/favicon/favicon-32x32.ed120c279a693bed3a44.png" alt="Deezer logo" />
            </a>
          </li>
          <li>
            <button className='outline secondary' onClick={(e) => { setActualTheme(themeToggle(e)) }}>
              {actualTheme === "dark"
                ? <MdOutlineDarkMode fontSize={"1.5rem"} />
                : <MdOutlineLightMode fontSize={"1.5rem"} />
              }
            </button>
          </li>
        </ul>
      </nav>
    </section>
  )
}
