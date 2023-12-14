
import { createContext, useEffect, useState } from 'react'
import './App.css'
import Home from './components/Home'
import Quiz from './components/Quiz'
import Result from './components/Result'

// Pass theme to all components

export const ThemeContext = createContext()

function App() {


  const [showHome,setShowHome] = useState(true)
  const [showQuiz,setShowQuiz] = useState(false)
  const [showResult,setShowResult] = useState(false)

  // Score and Theme

  const [darkTheme,setDarkTheme] = useState(false)
  const [score,setScore] = useState(0)


  // Update Theme

  useEffect(() => {
    darkTheme ? document.body.classList.add("dark") : document.body.classList.remove("dark")
  },[darkTheme])

  const toggleTheme = () => {
    setDarkTheme((prevTheme) => !prevTheme)
  }

  // Conditional Rendering

  const displayHome = () => {
    setScore(0)
    setShowResult(false)
    setShowHome(true)
  }

  const displayQuiz = () => {
    setShowHome(false)
    setShowQuiz(true)
  }

  const displayResult = () => {
    setShowResult(true)
    setShowQuiz(false)
  }

  // Increase score

  const updateScore = () => {
    setScore((prevScore) => prevScore+1)
    console.log(score)
  } 

  return (

    <ThemeContext.Provider value={{darkTheme,toggleTheme}}>

      {showHome && <Home displayQuiz={displayQuiz} />}
      {showQuiz && <Quiz showResult={displayResult} updateScore={updateScore} />}
      {showResult && <Result displayHome={displayHome} score={score} />}
      
    </ThemeContext.Provider>
  )
}

export default App
