import { faBlogger, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarText,
    NavbarToggler,
    NavItem,
    NavLink,
    UncontrolledDropdown
} from "reactstrap";
import { Resume } from "../Constants";
import UserAvatar from '../images/SrishtiSachan.jpg';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const navigate = useNavigate();

    const redirectToHomePage = () => {
        navigate("/"); 
    }

    const redirectToAboutMe = () => {
        navigate("/aboutMe"); 
    }

    const redirectToWorkExperience = () => {
        navigate("/workExperience");
    }

    const redirectToRecommendations = () => {
        navigate("/recommendations");
    }
    
    return (
        <Navbar color="light" light expand="md" style={{fontFamily: 'Roboto', fontSize: '18px'}}>
            <NavbarBrand onClick={redirectToHomePage} style={{ cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faBlogger}/>
                {' '} Srishti Sachan
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="me-auto" navbar>
                    <NavItem>
                        <NavLink onClick={redirectToWorkExperience} style={{ cursor: 'pointer' }}>
                            Work Experiences
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink onClick={redirectToRecommendations} style={{ cursor: 'pointer' }}>
                            Recommendations
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href={Resume} target={'_blank'} style={{ cursor: 'pointer' }}>
                            Resume
                        </NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Profiles
                        </DropdownToggle>
                        <DropdownMenu left="true">
                            <DropdownItem>
                                <NavLink href="https://www.linkedin.com/in/srishti97/" target="_blank">
                                <FontAwesomeIcon icon={faLinkedin} style={{ marginRight: '10px', fontSize: '18px', color: '#0077B5' }}/>
                                {' '}LinkedIn
                                </NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink href="https://github.com/white-rabbit10" target="_blank">
                                    <FontAwesomeIcon icon={faGithub} style={{ marginRight: '10px', fontSize: '18px', color: '#333' }} />
                                    {' '}GitHub
                                </NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink href="https://leetcode.com/_White_Rabbit_/" target="_blank">
                                    <FontAwesomeIcon icon={faCode} style={{ marginRight: '10px', fontSize: '18px', color: '#333' }}/>
                                    {' '}Leetcode
                                </NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink href="https://auth.geeksforgeeks.org/user/srishti_sachan" target="_blank">
                                    <FontAwesomeIcon icon={faCode} style={{ marginRight: '10px', fontSize: '18px', color: '#333' }}/>
                                    {' '}GeeksForGeeks
                                </NavLink>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
                <NavbarText>
                    <NavLink onClick={redirectToAboutMe} style={{ cursor: 'pointer' }}>
                        <span style={{ marginRight: '10px' }}>About Me</span>
                        <img 
                            src={UserAvatar} 
                            alt="User Avatar"
                            style={{
                                height: 30,
                                width: 30,
                                borderRadius: "50%"
                            }} 
                        />
                    </NavLink>
                </NavbarText>

            </Collapse>
        </Navbar>
    )
}

export default NavBar
