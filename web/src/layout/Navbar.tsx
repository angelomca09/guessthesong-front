import { useState } from 'react'
import { getCurrentTheme, themeToggle } from '../ts/theme-switcher'
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md"
import { Link } from 'react-router-dom'

export const Navbar = () => {

  const [actualTheme, setActualTheme] = useState(getCurrentTheme())

  return (
    <section className='mb-0 h-12'>
      <nav className="container-fluid">
        <ul><li><Link to={"/"}><strong className='contrast'>GuessTheSong</strong></Link></li></ul>
        <ul>
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
