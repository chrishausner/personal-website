import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
    padding-top: 2vw;
    padding-left: 5vw;
    padding-bottom: 5vw;
`;

const Title = styled.h1`
    font-size: 2rem;
`;

export const Projects = () => (
    <Styles>
        <Title>These are my projects</Title>
        <p>This part of the site is still under production</p>
    </Styles>
)
