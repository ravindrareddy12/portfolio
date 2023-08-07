import '../Home.css'
import { MdOutlineWavingHand } from "react-icons/md";
import { AiFillGithub,AiFillLinkedin} from "react-icons/ai";

function Home(){
    return(
       <div className='container' id='container'>
        <div className='hero-container'>
            <div className='left-container'>
            <h1>
            Full Stack Web Developer{' '}
            <MdOutlineWavingHand style={{ fontSize: '40px', color: '#ffcc99' , transform : 'rotateZ(340deg)'}} />
            </h1>
            <p>Hi, I'm Ravindra Reddy Somula. A passionate Full Stack  Developer based in India, India. 📍</p>
            <a href='https://www.linkedin.com/in/ravindra-reddy-somula-b19a5725a/'  target="_blank" rel="noopener noreferrer"><AiFillGithub className='git-icon'/></a>
            <a href='https://github.com/ravindrareddy12'  target="_blank" rel="noopener noreferrer"><AiFillLinkedin className='link-icon' /></a>
            </div>
            <div className='right-container'>
                <img src='/photo.png' alt='img'/>
            </div>
        </div>
        <div className='skills'>
            <p>Tech Stack &nbsp;  &nbsp; &nbsp; &nbsp; </p>
            <div className='logos'>
              <ul>
                <li>
                    <img src='/html.png' alt='img' />
                </li>
                <li>
                <img src='/css.png' alt='img' />
                </li>
                <li>
                <img src='/js.png' alt='img' />
                </li>
                <li>
                <img src='/react.png' alt='img' />
                </li>
                <li>
                <img src='/node.png' alt='img' />
                </li>
                <li>
                <img src='/express.png' alt='img' />
                </li>
                <li>
                <img src='/mongo.png' alt='img' />
                </li>
              </ul>
            </div>
        </div>
       </div>
    )
}

export default Home;    