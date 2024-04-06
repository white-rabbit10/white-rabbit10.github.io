import React from "react";
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";
import NavBar from "../Navbar/NavBar";
import AmazonLogo from "../images/amazon-logo.png";
import BPLogo from "../images/BPLogo.png";
import SLBLogo from "../images/slbLogo.png";

const WorkExperience = () => {
    return (
        <div>
            <NavBar/>
            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h2 style={{ textAlign: 'center', marginTop: '20px' }}>Work Experiences</h2>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'stretch', marginTop: '10px' }}>
                    <Card style={{ flex: 1, maxWidth: '25rem', background: '#ede3ed', margin: '0 10px' }}>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img
                                src={BPLogo}
                                alt="BP Logo"
                                style={{ height: 200, width: 260 }}
                            />
                        </div>
                        <CardBody style={{ textAlign: 'center' }}>
                            <CardTitle tag="h5">
                                Software Engineer
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                Apr 2023 - Present
                            </CardSubtitle>
                            <CardText style={{ textAlign: 'left' }}>
                                <ul style={{ paddingLeft: '20px' }}>
                                    <li>
                                        Designed, developed, and maintained features for the SIFT application.
                                    </li>
                                    <li>
                                        Implemented optimized algorithms to improve the performance of the SIFT application, identified bugs,
                                        and refactored the code for efficiency and optimization.
                                    </li>
                                    <li>
                                        Enhanced the user interface to provide a more intuitive and user-friendly experience.
                                    </li>
                                    <li>
                                        Utilized technologies such as .NET, ReactJS, SQL, Python, and Azure DevOps in the project.
                                    </li>
                                </ul>
                            </CardText>
                        </CardBody>
                    </Card>
                    <Card style={{ flex: 1, maxWidth: '25rem', background: '#ede3ed', margin: '0 10px' }}>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img
                                src={AmazonLogo}
                                alt="Amazon Logo"
                                style={{ height: 200, width: 260 }}
                            />
                        </div>
                        <CardBody style={{ textAlign: 'center' }}>
                            <CardTitle tag="h5">
                                Software Development Engineer - 1
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                Nov 2021 - Mar 2022
                            </CardSubtitle>
                            <CardText style={{ textAlign: 'left' }}>
                                <ul style={{ paddingLeft: '20px' }}>
                                    <li>
                                        Designed and developed features, including a real-time budget consumption notification service and multiple APIs
                                        for advertisers to access daily click-level advertisement data.
                                    </li>
                                    <li>
                                        Took the initiative to mitigate SAS risks, contributed to the cost optimization of AWS resources and
                                        scaled up services for Amazon Prime Day.
                                    </li>
                                    <li>
                                        Utilized technologies such as Java, and AWS services in the project.
                                    </li>
                                </ul>
                            </CardText>
                        </CardBody>
                    </Card>
                    <Card style={{ flex: 1, maxWidth: '25rem', background: '#ede3ed', margin: '0 10px' }}>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img
                                src={SLBLogo}
                                alt="Schlumberger Logo"
                                style={{ height: 200, width: 260 }}
                            />
                        </div>
                        <CardBody style={{ textAlign: 'center' }}>
                            <CardTitle tag="h5">
                                Software Engineer
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                Sep 2020 - Oct 2021
                            </CardSubtitle>
                            <CardText style={{ textAlign: 'left' }}>
                                <ul style={{ paddingLeft: '20px' }}>
                                    <li>
                                        Designed and developed user administration features to manage user access for the Global Activity Capture
                                        (GAC) application.
                                    </li>
                                    <li>
                                        Participated in the Ideathon conducted by Schlumberger and won the Best Innovative Idea Award.
                                    </li>
                                    <li>
                                        Utilized technologies such as Angular, Java, SQL and Azure DevOps in the project.
                                    </li>
                                </ul>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default WorkExperience;
