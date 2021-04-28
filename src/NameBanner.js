import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  padding-top: 15vw;
  padding-left: 5vw;
  padding-bottom: 5vw;
`;

const Title = styled.h1`
  font-size: clamp(4rem, 3vw, 5vw);
`;

const SubTitle = styled.h6`
  font-size: 2vw;
`;

export const NameBanner = () => (
  <Styles>
    <SubTitle>Hi, I'm</SubTitle>
    <Title>Christian Hausner</Title>
  </Styles>
)