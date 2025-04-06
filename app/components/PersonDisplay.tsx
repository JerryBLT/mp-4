import styled from "styled-components";
import { Person } from "../types";

const Container = styled.div`
  background-color: white;
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 8px;
`;

const Name = styled.h4`
  font-weight: bold;
`;

export default function PersonDisplay({ props }: { props: Person }) {
  return (
    <Container>
      <Name>{props.name}</Name>
      {/* <p>Birthplace: {props.birthplace}</p> */}
      {/* <p>Role: {props.role}</p> */}
      {/* <p>Culture: {props.culture}</p> */}
    </Container>
  );
}
