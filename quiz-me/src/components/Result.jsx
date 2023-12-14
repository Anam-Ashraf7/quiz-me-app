
import questions from './Questions'
import win from "../assets/win.svg"
import study from "../assets/Study.svg"

function Result(props) {

  return (
    <div id='result'>
        {props.score > 2 ? 
        ( <>
            <p>Congratulations!</p> 
            <img src={win} alt="" />
        </> )
        :
        ( <>
            <p>Better Luck Next Time!</p>
            <img src={study} alt="" />
        </> )
        }
        
        <p>You got {props.score} out of 5 - ({(props.score/questions.length)*100}%) </p>
        <button onClick={props.displayHome} >Restart Game</button>
    </div>
  )
}

export default Result