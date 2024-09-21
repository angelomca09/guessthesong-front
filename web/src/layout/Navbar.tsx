import { useState } from 'react'
import { getCurrentTheme, themeToggle } from '../ts/theme-switcher'
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md"

export const Navbar = () => {

  const [actualTheme, setActualTheme] = useState(getCurrentTheme())

  return (
    <section>
      <nav className="container-fluid">
        <ul><li><a href="./" className='contrast' onClick={(e) => e.preventDefault()}><strong>GuessTheSong</strong></a></li></ul>
        <ul>
          <li>
            <button className='outline secondary' onClick={(e)=>{setActualTheme(themeToggle(e))}}>
              {actualTheme === "dark"
                ? <MdOutlineDarkMode fontSize={"1.5rem"}/>
                : <MdOutlineLightMode fontSize={"1.5rem"}/>
              }
            </button>
          </li>
        </ul>
      </nav>
    </section>
  )
}
