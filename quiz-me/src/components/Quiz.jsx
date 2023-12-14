import {useRef, useState } from 'react'
import questions from './Questions'
import NavBar from './Navbar'

function Quiz(props) {

    const [count,setCount] = useState(0)
    const progressRef = useRef()
    const highlightRef = useRef()
    
    const handleHighlight = (value) => {
        value == "highlight" ? highlightRef.current.style.color = "Red" : highlightRef.current.style.color = "inherit";
    }

    const handleClick = (value) => {
        
        // update score if it is the correct option

        if (value) {
            props.updateScore()
        }

        // After last question redirect to result page

        count != questions.length-1 ? setCount(count+1) : setTimeout(props.showResult,500);
        
        // Increasing width of progress bar

        const percentage = ((count+1)/questions.length)*100
        progressRef.current.style.width = `${percentage}%`

    }

    const options = questions[count].options

    return (
            <div>
                <NavBar/>
                <div id='content'>
                    <p>Question ({count+1} of {questions.length})</p>
                    <div id='progress-bar'>
                        <div id='progress' ref={progressRef}></div>
                    </div>
                    <p ref={highlightRef}>{questions[count].text}</p>
                    <div id='options'>
                        {options.map((item => {
                            return(
                            <button className='option' key={item.id} onClick={() => handleClick(item.isCorrect)}>
                                <span>{item.option}</span>
                                <p className='option-item'>{item.text}</p>
                                </button>
                            )
                        }))}
                    </div>
                    <div id='navBtn'>
                        <button onClick={() => handleHighlight("highlight")} id='highlight'>Highlight</button>
                        <button onClick={() => handleHighlight("remove")} id='remove-highlight'>Remove Highlight</button>
                    </div>
                </div>
            </div>
  )

}

export default Quiz