import React from "react";
import Flex from "../../../Flex";
import styled from "styled-components";
import { darken } from "polished";

const Left = styled.div`
  padding: ${(props) => `${props.theme.gutter.sm} ${props.theme.gutter.md}`};
  margin-left: auto;
`;

const Button = styled.button`
  outline: 0;
  border: 0;
  background: transparaent;
  font-size: ${(props) => props.theme.typography.size.md};
  background-color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.white};
  padding: ${(props) => `${props.theme.gutter.xs} ${props.theme.gutter.sm}`};
  border-radius: ${(props) => props.theme.borderRadius.sm};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => darken(0.2, props.theme.color.primary)};
  }
`;

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.color.white};
  border-bottom: ${(props) => props.theme.border.default};
`;

const Header = ({ className }) => (
  <Wrapper className={className}>
    <Flex>
      <Left>
        <Button>Log in</Button>
      </Left>
    </Flex>
  </Wrapper>
);

export default Header;
