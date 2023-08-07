import '../Abou.css';

function About(){
 return (
    <section className='about' id='about'>
        <div className="container1">
        <div className='about-content' style={{marginTop: '-100px' , marginLeft: '200px'}}>
           <div className='img-side'>
             <img src='/person.png' alt='' className="work-emoji"/>
             <img src='https://images.unsplash.com/photo-1600443546015-f9b924a5b416?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXIlMjBkZXNrfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' alt='' className="img-side__main-img"/>
             <span>
                <img src='https://stefantopalovicdev.vercel.app/static/media/text2.3d5aa6ba2d0632bb4e0572631c3f9dc2.svg' alt='' />
             </span>
           </div>
           <div className='container2'>
            <h1>ABOUT ME</h1>
            <h4>
            A dedicated Full Stack Developer <br/>
            based in India, India 📍
            </h4>
            <p>As a Junior Full Stack Web  Developer, I possess an impressive arsenal of skills in HTML,CSS,JavaScript,React,NodeJS,ExpressJS and MongoDB. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.</p>
        </div>
        </div>
       
     </div>
    </section>
    
 )
}

export default About;