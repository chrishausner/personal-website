import React from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

const Icon = styled(FontAwesomeIcon)`
    font-size: 3rem;
`;

const Title = styled.h1`
    font-size: clamp(1rem,2rem,3rem);
    .card-link {
        color: #bbb;
    
        &:hover {
          color: black;
        }
      }
`;

const Styles = styled.div`
    padding-left: 3vw;
    padding-right: 3vw;

    .card-link {
        color: #bbb;
    
        &:hover {
          color: black;
        }
      }
    .card-body {
        display: flexbox;
        height: 20vh;
        justify-content: center;
        align-items: center;
    }

    .card {
        margin-top: 5vw;
    }
`;

export const LinkedCards  = () => (
    <Styles>
        <Row>
            <div class="col-sm-4">
                <Card>
                    <Card.Body>
                        <Card.Link href="https://www.linkedin.com/in/hausner-christian/"><Icon icon={faLinkedinIn}/></Card.Link>
                    </Card.Body>
                </Card>
            </div>
            <div class="col-sm-4">
                <Card>
                    <Card.Body>
                        <Card.Link href="https://github.com/chrishausner"><Icon icon={faGithub}/></Card.Link>
                    </Card.Body>
                </Card>
            </div>
            <div class="col-sm-4">
                <Card>
                    <Card.Body>
                        <Card.Link href="/projects"><Title>Projects</Title></Card.Link>
                    </Card.Body>
                </Card>
            </div>
        </Row>
    </Styles>
)