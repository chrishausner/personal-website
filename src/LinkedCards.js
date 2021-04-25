import React from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';


export const LinkedCards  = () => (
    <React.Fragment>
        <Row>
            <div class="col-sm-4">
                <Card>
                    <Card.Body>
                        <Card.Title>Linkedin</Card.Title>
                    </Card.Body>
                </Card>
            </div>
            <div class="col-sm-4">
                <Card>
                    <Card.Body>
                        <Card.Title>GitHub</Card.Title>
                    </Card.Body>
                </Card>
            </div>
            <div class="col-sm-4">
                <Card>
                    <Card.Body>
                        <Card.Title>Projects</Card.Title>
                    </Card.Body>
                </Card>
            </div>
        </Row>
    </React.Fragment>
)