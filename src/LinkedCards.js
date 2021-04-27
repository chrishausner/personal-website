import React from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

const Icon = styled(FontAwesomeIcon)`
    font-size: 3rem;
`;

const Styles = styled.div`
    .h1 {
        font-size: 2rem;
    }

    .card-link {
        color: #bbb;
    
        &:hover {
          color: black;
        }
      }
`;

export const LinkedCards  = () => (
    <Styles>
        <Row>
            <div class="col-sm-4">
                <Card>
                    <Card.Body>
                        <Card.Link><Icon href="/" icon={faLinkedinIn} /></Card.Link>
                    </Card.Body>
                </Card>
            </div>
            <div class="col-sm-4">
                <Card>
                    <Card.Body>
                        <Card.Link><Icon icon={faGithub}/></Card.Link>
                    </Card.Body>
                </Card>
            </div>
            <div class="col-sm-4">
                <Card>
                    <Card.Body>
                        <h1>Projects</h1>
                    </Card.Body>
                </Card>
            </div>
        </Row>
    </Styles>
)