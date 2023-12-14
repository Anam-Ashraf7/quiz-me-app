import { useContext } from 'react'
import { ThemeContext } from '../App'
import logo from "../assets/Logo.png"
import dark from "../assets/dark-logo.svg"
import sun from "../assets/sun.svg"
import moon from "../assets/moon.svg"

function NavBar() {

    const {darkTheme,toggleTheme} = useContext(ThemeContext)

    return (
        <div>
            {darkTheme ?
            (<nav>
                <img src={dark} alt="" />
                <img onClick={toggleTheme} id='icon' src={sun} alt="" />
            </nav>):
            (<nav>
                <img src={logo} alt="" />
                <img onClick={toggleTheme} id='icon' src={moon} alt="" />
            </nav>)
            }
        </div>
    )
}

export default NavBar