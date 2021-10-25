import React from "react";
import styled from "styled-components";



const Wrapper = styled.section`
  width: 80%;
  background-color: lightgrey;
  margin: 0 auto;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
`;

const Heading = styled.h1`
  color: orangered;
  font-size:42px;
`;



export const Header = () => {
  return (
    <>
      <Wrapper>
        <Center>
          <Heading>Header (Styled-Components)</Heading>
        </Center>
      </Wrapper>
    </>
  );
};
