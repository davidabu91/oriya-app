import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import styled from "styled-components";
import Title from "./components/Title";
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
  margin-bottom: 0px;
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
  border-radius: 10px;
  box-shadow: 0 0.3rem rgba(121, 121, 121, 0.65);

  :active {
    transform: translate(0, 0.3rem);
    box-shadow: 0 0.1rem rgba(255, 255, 255, 0.65);
  }

  &.active {
    background: #fff;
    color: #000;
  }
`;

function App() {
  const [start, setStart] = useState(false);

  const getData = () => {
    try{
    const persons = axios(
      "https://sheet.best/api/sheets/eb6637de-2ec1-45b4-a9d1-001197c620d4"
    ).then((res) => {
      let data = res.data.map((item) => {
        let personArr = Object.values(item);
        const [date, attribute, story, tasks, blessing, name, imgUrl] =
          personArr;
        const person = {
          date,
          attribute,
          story,
          tasks,
          blessing,
          name,
          imgUrl,
        };
        return person;
      });
      return data;
    });
    return persons;}
    catch(error){
      alert(error)
    }
  };

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Layout>
          {!start && <Title setStart={setStart} />}
          {start && (
            <>
              <Nav>
                <TabButton to="/day4"> רביעי</TabButton>
                <TabButton to="/day3"> שלישי</TabButton>
                <TabButton to="/day2"> שני</TabButton>

                <TabButton to="/day1"> ראשון</TabButton>
              </Nav>
              <Routes>
                <Route path="/day1" element={<Day1 getData={getData} />} />
                <Route path="/day2" element={<Day2 getData={getData} />} />
                <Route path="/day3" element={<Day3 getData={getData} />} />
                <Route path="/day4" element={<Day4 getData={getData} />} />
              </Routes>{" "}
            </>
          )}
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
