import React from "react";
import styled from "styled-components";
import Navigation from "./components/Navigation";

const Wrapper = styled.div`
  min-height: 100vh;
  color: ${(props) => props.theme.color.white};
  background-color: ${(props) => props.theme.backgroundColor.secondary};
  min-width: 250px;
`;

const SideMenu = ({ className, title }) => (
  <Wrapper className={className}>
    {title}
    <Navigation />
  </Wrapper>
);

export default SideMenu;
