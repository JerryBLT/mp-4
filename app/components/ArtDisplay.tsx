import styled from "styled-components";
import { ArtRecord, Person } from "../types";
import PersonDisplay from "./PersonDisplay";

const Container = styled.div`
  background-color: #ccd9e9;
  box-shadow: 0 4px 6px rgba(42, 44, 42, 0.1);
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: calc(15px + 10px);
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
`;

const Image = styled.img`
  width: 40%;
  border: 3px solid black;
`;

const NoImageText = styled.p`
  font-style: italic;
  color: #ff9d9d;
`;

const CuratorSection = styled.div`
  width: 90%;
`;

const CuratorHeading = styled.h3`
  font-size: calc(10px + 10px);
  font-weight: semibold;
  margin-bottom: 8px;
`;

const DescriptionText = styled.p`
  margin-bottom: 8px;

  b {
    font-weight: bold;
    color: #172720;
  }
`;

const NoCuratorText = styled.p`
  font-style: italic;
  color: #4e638d;
  text-align: center;
`;

export default function ArtDisplay({ data }: { data: ArtRecord }) {
  return (
    <Container>
      <Title>{data.title}</Title>

      {data.primaryimageurl ? (
        <Image src={data.primaryimageurl} alt={`Image of ${data.title}`} />
      ) : (
        <NoImageText>No image available</NoImageText>
      )}

      {data.people && data.people.length > 0 ? (
        <CuratorSection>
          <CuratorHeading>Curator:</CuratorHeading>
          <DescriptionText>
            <b>Description:</b> {data.description || "No Description Available"}
          </DescriptionText>
          {data.people.map((person: Person) => (
            <PersonDisplay key={person.personid} props={person} />
          ))}
        </CuratorSection>
      ) : (
        <div>
          <DescriptionText>
            <b>Description:</b> {data.description || "No Description Available"}
          </DescriptionText>
          <NoCuratorText>No curator information available</NoCuratorText>
        </div>
      )}
    </Container>
  );
}




