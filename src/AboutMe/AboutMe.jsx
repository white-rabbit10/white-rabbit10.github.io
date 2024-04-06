import React from "react";
import NavBar from "../Navbar/NavBar";
import Coffee from '../images/Coffee.gif';
import GetToKnowMe from '../images/GetToKnowMe.png'

const AboutMe = () => {
    return (
        <div>
            <NavBar />
            <div style={{fontFamily: 'Roboto'}}>
                <div className="container" style={{marginTop:'50px', background: '#fff', color: '#000', textAlign: 'justify'}}>
                    <h2 style={{textAlign: 'center'}}>Get to Know Me {' '}<img src={GetToKnowMe} alt="Get To Know Me" 
                                style={{marginBottom: '15px', height: '40px'}} /></h2>
                    <div style={{fontSize: '18px', marginTop: '15px'}}>
                        {/* <p>Hi there! I'm thrilled to have you here. My name is Srishti Sachan, and I'm passionate about all things tech. 
                            I'm a Computer Science graduate student at the University of Southern California, Los Angeles.
                        </p> */}
                        <p>Hi there! I'm thrilled to have you here. My name is Srishti Sachan, and I'm passionate about all things tech. 
                            I'm a Software Developer at British Petroleum.
                        </p>

                        <p>"Life is a series of natural and spontaneous changes. Don’t resist them." My journey into the realm of computer science began when I recognized that mathematics is to the computer what 
                            notes are to music. My growing passion for the subject led me to enroll at the Army Institute of Technology Pune to 
                            pursue my Bachelor's degree in Computer Engineering. I graduated in 2020 and began my professional journey. 
                            From tinkering with simple programs to crafting complex systems, I embarked on a quest to harness the power of 
                            technology to make a difference. As a passionate software developer, I constantly explore new horizons in the world 
                            of technology, seeking innovative solutions and pushing boundaries to create impactful experiences.
                        </p>

                        <p>When I'm not immersed in lines of code, you'll likely find me indulging in my other passions. 
                            Whether it's exploring the intricate steps of a dance routine or singing my heart out, I thrive on the rhythm of life's 
                            diverse experiences. When the mood strikes, I also enjoy engaging in friendly card games, where every hand 
                            dealt brings forth new challenges and strategies to master.
                        </p>
                        <p>Feel free to drop me a note on  {' '}
                            <a href="https://www.linkedin.com/in/srishti97/" target="_blank" rel="noopener noreferrer">LinkedIn</a>, 
                            and let's arrange a coffee chat! {' '}
                            <img src={Coffee} alt="coffee GIF" 
                                style={{marginBottom: '15px'}} />
                            </p>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;