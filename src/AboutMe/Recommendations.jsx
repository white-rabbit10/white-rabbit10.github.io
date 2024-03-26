import React from "react";
import { Row, Col, Card, CardTitle, CardText, Button } from "reactstrap";
import Param from '../images/Param.png'

const Recommendations = () => {
    return (
        <div style={{color: '#000'}}>
            <Row style={{marginTop: '20px'}}>
                <Col >
                    <Card body style={{ display: 'flex', alignItems: 'center', fontStyle: 'italic' }}>
                        <CardText>
                            <span style={{ display: 'flex', alignItems: 'center'}}>
                                <img 
                                    src={Param} 
                                    alt="Recommender"
                                    style={{ height: 150, marginRight: '20px'}} 
                                />
                                <p>
                                    Srishti has been an exceptional collaborator throughout our journey, from our college endeavors to our shared 
                                    experiences in the workplace. Her dedication, problem-solving prowess, and positive attitude have consistently 
                                    shone through, from our victorious hackathons and final year project completion in college to our continued 
                                    collaboration in the workplace. Srishti's contributions have been instrumental in our successes, making her an 
                                    invaluable asset to any team. I highly recommend Srishti for her outstanding professionalism and unwavering 
                                    commitment to excellence.
                                </p>
                            </span>
                        </CardText>
                        <a href="https://www.linkedin.com/in/signature17/" target="_blank" rel="noopener noreferrer" 
                            style={{ marginLeft: 'auto', marginTop: '-40px' }}   >- Paramvir Singh</a>
                    </Card>
                </Col>
            </Row>
            {/* <Row style={{marginTop: '50px'}}>
                <Col sm="6">
                    <Card body>
                        <CardTitle tag="h5">
                            Special Title Treatment
                        </CardTitle>
                        <CardText>
                            With supporting text below as a natural lead-in to additional content.
                        </CardText>
                        <Button>
                            Go somewhere
                        </Button>
                    </Card>
                </Col>
                <Col sm="6">
                    <Card body>
                        <CardTitle tag="h5">
                            Special Title Treatment
                        </CardTitle>
                        <CardText>
                            With supporting text below as a natural lead-in to additional content.
                        </CardText>
                        <Button>
                            Go somewhere
                        </Button>
                    </Card>
                </Col>
            </Row>
            <Row style={{marginTop: '50px'}}>
                <Col sm="6">
                    <Card body>
                        <CardTitle tag="h5">
                            Special Title Treatment
                        </CardTitle>
                        <CardText>
                            With supporting text below as a natural lead-in to additional content.
                        </CardText>
                        <Button>
                            Go somewhere
                        </Button>
                    </Card>
                </Col>
                <Col sm="6">
                    <Card body>
                        <CardTitle tag="h5">
                            Special Title Treatment
                        </CardTitle>
                        <CardText>
                            With supporting text below as a natural lead-in to additional content.
                        </CardText>
                        <Button>
                            Go somewhere
                        </Button>
                    </Card>
                </Col>
            </Row> */}
        </div>
    );
}

export default Recommendations