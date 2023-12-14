import { useContext } from 'react'
import { ThemeContext } from '../App'


function NavBar() {

    const {darkTheme,toggleTheme} = useContext(ThemeContext)

    return (
        <div>
            {darkTheme ?
            (<nav>
                <img src="../src/assets/dark-logo.svg" alt="" />
                <img onClick={toggleTheme} id='icon' src="../src/assets/sun.svg" alt="" />
            </nav>):
            (<nav>
                <img src="../src/assets/Logo.png" alt="" />
                <img onClick={toggleTheme} id='icon' src="../src/assets/moon.svg" alt="" />
            </nav>)
            }
        </div>
    )
}

export default NavBar