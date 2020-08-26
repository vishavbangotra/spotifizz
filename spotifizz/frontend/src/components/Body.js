import React, { Component } from 'react';
import {Container, Row, Col } from 'reactstrap';
class Body extends Component{
    componentDidMount(){
        const url = "ad"
    }
    render(){
        return(
            <div>
                <Container>
                    <Row xs="3">
                        <Col >
                             Hello
                        </Col>
                        <Col>
                            Hello
                        </Col>
                        <Col>
                            Hello
                        </Col>
                    </Row>
                </Container>
            </div>        
            );
    }
}
export default Body;