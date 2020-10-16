import React from "react";
import BaseSideMenu from "./components/SideMenu";
import BaseHeader from "./components/Header";
import Footer from "./components/Footer";
import styled from "styled-components";
import Flex from "../Flex";

const SIDE_MENU_WIDTH = "250px";
const HEADER_HEIGHT = "75PX";

const SideMenu = styled(BaseSideMenu)`
  width: ${SIDE_MENU_WIDTH};
`;

const Header = styled(BaseHeader)`
  position: fixed;
  top: 0;
  left: ${SIDE_MENU_WIDTH};
  right: 0;
  height: ${HEADER_HEIGHT};
`;

const Wrapper = styled.div`
  display: flex;
`;

const Content = styled.div`
  margin-top: ${HEADER_HEIGHT};
  padding: ${(props) => `${props.theme.gutter.xs} ${props.theme.gutter.lg}`};
`;
const Title = styled(Flex)`
  font-size: ${(props) => props.theme.typography.size.xl};
  border-bottom: ${(props) => props.theme.border.default};
  height: ${HEADER_HEIGHT};
  padding: ${(props) => `0  ${props.theme.gutter.md}`};
`;

const Layout = ({ children }) => (
  <Wrapper>
    <SideMenu title={<Title alignItems="center">Monash Uni</Title>} />
    <Header />
    <Content>
      {children}
      <Footer />
    </Content>
  </Wrapper>
);

export default Layout;
