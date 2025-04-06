'use client';

import styled from "styled-components";

const PageContainer = styled.div`
  margin: 0;
  height: 100vh;
  box-sizing: border-box;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: pink;
`;

const Title = styled.h1`
  font-size: calc(5px + 5vw);
  font-weight: bold; 
  margin-bottom: 16px;
  color: black;
`;

const Description = styled.p`
  font-size: calc(2px + 2vw);
  color: black;
  text-align: center;
`;

export default function AboutPage() {
  return (
    <PageContainer>
      <ContentContainer>
        <Title>Welcome to Harvard Online Museum</Title>
        <Description>
          The Museum was made by utilizing the Harvard Museum API. Explore and discover the historic artistry collections.
        </Description>
      </ContentContainer>
    </PageContainer>
  );
}

  