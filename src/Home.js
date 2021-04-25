import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding-top: 15vw;
  padding-left: 5vw;
  padding-bottom: 5vw;
`;

const Title = styled.h1`
  font-size: 6vw;
`;

const SubTitle = styled.h6`
  font-size: 2vw;
`;

export const Home = () => (
  <Wrapper>
    <SubTitle>Hi, I'm</SubTitle>
    <Title>Christian Hausner</Title>
  </Wrapper>
)