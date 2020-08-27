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
                    <Row style={{background:"skyblue"}} md="4">
                        <Col md="4">
                             Hello
                        </Col>
                        <Col md="4">
                            Hello
                        </Col>
                        <Col md="4">
                            Hello
                        </Col>
                        <Col md="4">
                             Hello
                        </Col>
                        <Col md="4">
                            Hello
                        </Col>
                        <Col md="4">
                            Hello
                        </Col>
                    </Row>
                </Container>
            </div>        
            );
    }
}
export default Body;