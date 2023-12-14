
import questions from './Questions'

function Result(props) {

  return (
    <div id='result'>
        {props.score > 2 ? 
        ( <>
            <p>Congratulations!</p> 
            <img src="../src/assets/win.svg" alt="" />
        </> )
        :
        ( <>
            <p>Better Luck Next Time!</p>
            <img src="../src/assets/Study.svg" alt="" />
        </> )
        }
        
        <p>You got {props.score} out of 5 - ({(props.score/questions.length)*100}%) </p>
        <button onClick={props.displayHome} >Restart Game</button>
    </div>
  )
}

export default Result