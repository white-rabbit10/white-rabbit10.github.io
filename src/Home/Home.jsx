import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDownload, faEnvelope, faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { saveAs } from "file-saver";
import React from "react";
import { Button, Card, CardBody, CardText } from "reactstrap";
import { styles } from "../commons/commonStyles";
import UserAvatar from '../images/UserAvatar.jpg';
import NavBar from "../navbar/NavBar";
import './Home.css';

const Home = () => {
    const handleDownload = () => {
        saveAs('/Srishti_4Yrs.pdf', 'Resume.pdf');
    }
    return (
        <div style={{...styles.common, alignItems: 'center'}}>
            <NavBar />
            <div style={{ alignItems: 'center'}}>
                <Card style={{width: '30rem', background: '#ede3ed'}}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img 
                            src={UserAvatar} 
                            alt="User Avatar"
                            style={{ height: 350, width: 380 }} 
                        />
                    </div>
                    <CardBody style={{textAlign: 'center'}}>
                        <CardText>
                            <h2>Hi all! <span className="wave">👋</span></h2>
                            <h4>I'm Srishti Sachan</h4>
                            <h6>Software Engineer @BP</h6>
                            <h6>Bangalore, India</h6>
                            {/* <h6>Computer Science Graduate Student</h6> */}
                            {/* <h6>@University of Southern California, Los Angeles, USA</h6> */}
                            <div style={{ marginTop: '10px' }}>
                                <a href="mailto:sachansrishti2024@gmail.com" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faEnvelope} className="icon icon-envelope" />
                                </a>
                                <a href="tel:+918698627902" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faSquarePhone} className="icon icon-phone" />
                                </a>
                                <a href="https://www.linkedin.com/in/srishti97/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faLinkedin} className="icon icon-linkedin" />
                                </a>
                                <a href="https://github.com/white-rabbit10" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faGithub} className="icon icon-github" />
                                </a>
                            </div>
                            <Button 
                                onClick={handleDownload}
                                style={{ marginTop: '10px', backgroundColor: '#5d6975', color: '#ffffff' }}>
                                <FontAwesomeIcon icon={faDownload} />
                                {' '}Resume
                            </Button>
                        </CardText>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default Home;