import '../Footer.css';
import { AiFillGithub ,AiFillLinkedin } from "react-icons/ai";

function Footer (){
 return(
    <footer>
       <div class="container-footer">
            <div class="footerc">
               <h3>Copyright © 2023. All rights are reserved</h3>
                   <div class="footerc__socials">
                       <a aria-label="linkedin" target="_blank" rel="noreferrer" href="https://github.com/ravindrareddy12/healthcaresystem/blob/master/src/index.js">
                           <i class="fa-brands fa-linkedin"><AiFillGithub size={50} style={{color: 'wheat'}}/></i>
                        </a>
                        <a aria-label="github" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ravindra-reddy-somula-b19a5725a/">
                            <i class="fa-brands fa-github"><AiFillLinkedin size={50} style={{color: 'wheat'}} /></i>
                        </a>
                     </div> 
            </div>
        </div>
     </footer>
 )
}

export default Footer;