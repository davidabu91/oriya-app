import React from "react";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Day1 from "./screens/Day1";
import Day2 from "./screens/Day2";
import Day3 from "./screens/Day3";
import Day4 from "./screens/Day4";
import { GlobalStyle } from "./styles";

const Layout = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 35px;
`;

const Nav = styled.nav`
  display: flex;
  margin-bottom: 45px;
`;

const TabButton = styled(NavLink)`
  background: #141214;
  color: #e7ddeb;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  height: 30px;
  width: 60px;
  margin-left: 15px;

  &:first-child {
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  }

  &:last-child {
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }

  &.active {
    background: #fff;
    color: #000;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Layout>
          <Nav>
            <TabButton to="/day4"> רביעי</TabButton>
            <TabButton to="/day3"> שלישי</TabButton>
            <TabButton to="/day2"> שני</TabButton>

            <TabButton to="/day1"> ראשון</TabButton>
          </Nav>
          <Routes>
            <Route path="/day1" element={<Day1 />} />
            <Route path="/day2" element={<Day2 />} />
            <Route path="/day3" element={<Day3 />} />
            <Route path="/day4" element={<Day4 />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
