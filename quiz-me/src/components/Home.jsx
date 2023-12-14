
import Navbar from './Navbar'

function Home(props) {
  return (
    <div>
        <Navbar/>
        <div>
            <div id='banner' style={{backgroundImage:`url("../src/assets/Background.svg")`}}>
                <p>Test your knowledge,<br></br>anytime, anywhere.</p>

                {/* Render Quiz Component */}

                <button onClick={props.displayQuiz}>Play Now!</button> 
            </div>
        </div>
    </div>
  )
}

export default Home