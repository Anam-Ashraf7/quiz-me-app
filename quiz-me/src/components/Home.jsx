
import Navbar from './Navbar'
import bgm from "../assets/Background.svg"

function Home(props) {
  return (
    <div>
        <Navbar/>
        <div>
            <div id='banner' style={{backgroundImage:`url(${bgm})`}}>
                <p>Test your knowledge,<br></br>anytime, anywhere.</p>
                <button onClick={props.displayQuiz}>Play Now!</button> 
            </div>
        </div>
    </div>
  )
}

export default Home