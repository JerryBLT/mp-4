'use client';

import styled from "styled-components";
import Link from "next/link";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

const Title = styled.h2`
  font-size: calc(20px + 20px);
  font-weight: bold;
  padding: 10px;
`;

const Nav = styled.nav`
  padding: 10px;
  margin: 15px;
`;

const NavLink = styled(Link)`
  padding: 4px;
  margin: 8px;
  font-size: calc(15px + 15px);
  text-decoration: none;
  color:black;

  &:hover {
    text-decoration: underline;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Title>Harvard Online Exhibition</Title>
      <Nav>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About</NavLink>
      </Nav>
    </HeaderContainer>
  );
}
