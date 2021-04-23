import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding-top: 20em;
  padding-left: 10em;
`;

const Title = styled.h1`
  font-size: 4em;
`;

export const Home = () => (
  <Wrapper>
    <h6>Hi, I'm</h6>
    <Title>Christian Hausner</Title>
  </Wrapper>
)