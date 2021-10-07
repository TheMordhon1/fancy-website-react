import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 80px;
`;

const Wrapper = styled.div`
  padding: 20px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-decoration: underline crimson;
`;

const Menu = styled.ul`
  display: flex;
  gap: 20px;
`;

const MenuItem = styled.li`
  list-style: none;
  font-size: 20px;
  font-weight: bold;
  color: gray;
  cursor: pointer;
  transition: all 0.4s ease-in;
  &:hover {
    color: crimson;
  }
`;

const Button = styled.button`
  border: 2px solid #fff;
  padding: 10px 15px;
  background-color: crimson;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in;
  letter-spacing: 2px;

  &:hover {
    background-color: #fff;
    color: crimson;
  }
`;

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>A-DHON</Logo>
          <Menu>
            <MenuItem>Home</MenuItem>
            <MenuItem>Features</MenuItem>
            <MenuItem>Services</MenuItem>
            <MenuItem>Pricing</MenuItem>
            <MenuItem>Contact</MenuItem>
          </Menu>
        </Left>
        <Button>JOIN NOW</Button>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
