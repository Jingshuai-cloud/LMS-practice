import React from "react";
import styled, { css } from "styled-components";
import { rgba, darken } from "polished";

const Wrapper = styled.nav``;

const ITEMS = [
  { name: "course", text: "Course" },
  { name: "assignment", text: "Assignment", active: true },
  {
    name: "teacher",
    text: "Teacher",
  },
  {
    name: "student",
    text: "Student",
  },
];

const Link = styled.a`
  display: block;
  text-decoration: none;
  padding: ${(props) => `${props.theme.gutter.xs} ${props.theme.gutter.md}`};
  color: ${(props) => rgba(props.theme.color.white, 0.8)};
  font-weight: ${(props) => props.theme.typography.weight.bold};

  &:hover {
    background: ${(props) =>
      darken(0.1, props.theme.backgroundColor.secondary)};
  }
  ${(props) =>
    props.active &&
    css`
      color: ${(props) => props.theme.color.info};
    `}
`;

const Navigation = () => (
  <Wrapper>
    {ITEMS.map((i) => (
      <Link key={i.name} href="/" active={i.active}>
        {i.text}
      </Link>
    ))}
  </Wrapper>
);

export default Navigation;
