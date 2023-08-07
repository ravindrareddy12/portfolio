import '../Contact.css';
import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";

function Contact (){
    return(
    <div className="contact-container" id='contact-container'>
      <p >Contact</p>
      <h3 >
      "Every setback is a setup for a comeback!" 👇
      </h3>
      <div className='contact-icons'>
      <div className='logos' >
              <ul>
                <li style={{height: '4rem', width: '4rem'}}>
                   <FaMapLocationDot  style={{color: 'skyblue'}} size={30}/> 
                </li>
                <h4 style={{color: '#2d2e32',fontSize: '1.7rem', marginTop: '10px', marginLeft:'15px'}}>Location <br/>
                <a href='/' style={{marginTop:'-50px', position: 'absolute',textDecoration: 'none'}}><h6 className='tit'>Andhra Pradesh, India</h6></a>
                </h4>
                
                <li style={{height: '4rem', width: '4rem', marginLeft: '150px'}}>
                  <MdOutlineMailOutline style={{color: 'skyblue'}}  size={30}/>
                </li>
                <h4 style={{color: '#2d2e32',fontSize: '1.7rem', marginTop: '10px', marginLeft:'15px'}}>Mail <br/>
                <a href='/' style={{marginTop:'-50px', position: 'absolute', textDecoration: 'none'}}><h6 className='tit'>ravindrasomula1@gmail.com</h6></a> </h4>
                <li style={{height: '4rem', width: '4rem', marginLeft: '250px'}}>
                    <AiFillLinkedin style={{color: 'skyblue'}} size={30}/>
                </li>
                <h4 style={{color: '#2d2e32',fontSize: '1.7rem', marginTop: '10px', marginLeft:'15px'}}>Linkedin<br/>
                <a href='https://www.linkedin.com/in/ravindra-reddy-somula-b19a5725a' style={{marginTop:'-50px', position: 'absolute',textDecoration: 'none'}}><h6 className='tit'>https://www.linkedin.com/in/ravindra-reddy-somula-b19a5725a</h6></a>
                </h4>
              </ul>
            </div>
      </div>
    </div>
    )
 
}

export default Contact;