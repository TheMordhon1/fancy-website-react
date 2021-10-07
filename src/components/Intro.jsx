import React from "react";
import styled from "styled-components";
import Man from "../img/man.svg";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  height: calc(100vh - 80px);
  display: flex;
  padding: 20px;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  width: 60%;
  font-size: 60px;
`;

const Desc = styled.p`
  width: 60%;
  font-size: 20px;
  margin-top: 20px;
`;

const ButtonWrapper = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  align-items: center;
`;

const Button = styled.button`
  text-transform: uppercase;
  padding: 15px;
  background-color: darkblue;
  border-radius: 10px;
  letter-spacing: 2px;
  border: none;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in;

  &:hover {
    background-color: #fff;
    color: darkblue;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
    transform: scale(1.02);
  }
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;

const Phone = styled.span`
  color: #f0667d;
  font-weight: bold;
`;

const ContactText = styled.span`
  color: grey;
  margin-top: 5px;
`;

const Right = styled.div`
  width: 40%;
`;

const Image = styled.img`
  width: 100%;
`;

function Intro() {
  return (
    <Container>
      <Left>
        <Title>Adventures in creative age</Title>
        <Desc>
          We believe that designing products and services in close partnership
          with our clients is the only way to have a real impact on their
          business.
        </Desc>
        <ButtonWrapper>
          <Button>Start a Project</Button>
          <Contact>
            <Phone>Call Us (021) 78734-92334</Phone>
            <ContactText>For any questions or concert</ContactText>
          </Contact>
        </ButtonWrapper>
      </Left>
      <Right>
        <Image src={Man} />
      </Right>
      <AnimatedShapes />
    </Container>
  );
}

export default Intro;
