import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import styled from "styled-components";
import Title from "./components/Title";
import Day1 from "./screens/Day1";
import Day2 from "./screens/Day2";
import Day3 from "./screens/Day3";
import Day4 from "./screens/Day4";
import Message from './components/Message';
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
  const route1 = "day1"
  const [route2, setRoute2] = useState("day2");
  const [route3, setRoute3] = useState("day3");
  const [route4, setRoute4] = useState("day4");

  const getData = () => {
    try {
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
      return persons;
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    const today = new Date();
    const date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();

    function prodaction () {
      if (date === "2021-12-5") {setRoute2("message2");setRoute3("message3");  setRoute4("message4")};
      if (date === "2021-12-6"){setRoute3("message3");  setRoute4("message4")};
      if (date === "2021-12-7") setRoute4("message4");
    }

    if(date === "2021-12-5") prodaction();

  }, []);

  

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Layout>
          {!start && <Title setStart={setStart} />}
          {start && (
            <>
              <Nav>
                <TabButton to={route4}> רביעי</TabButton>
                <TabButton to={route3}> שלישי</TabButton>
                <TabButton to={route2}> שני</TabButton>
                <TabButton to={route1}> ראשון</TabButton>
              </Nav>
              <Routes>
                <Route path="/day1" element={<Day1 getData={getData} />} />
                <Route path="/day2" element={<Day2 getData={getData} />} />
                <Route path="/day3" element={<Day3 getData={getData} />} />
                <Route path="/day4" element={<Day4 getData={getData} />} />
                <Route path="/message2" element={<Message dayMessage="שני" imgUrl="https://lh3.googleusercontent.com/CrkkoPJRJYMDi2IhOCEbsoZq0HvwNbpfAMjUIqKB0bgy8U7OfNp5LFbMOCUbjjE3JUM6Zjqdowjko-4uHd1it-vo_6mLaYj1lnWSHSJHokPLm2MIs5K0T3piBFIZmcSm9Bl7ma_UYXQ=w600-h315-p-k"/>} />
                <Route path="/message3" element={<Message dayMessage="שלישי" imgUrl="https://lh3.googleusercontent.com/q9eELgY7Q-nZNdNwwY__p-iPNkx1tYbm7Z5HKVbpORNJWc9xxOMNR-qxDOIowsu3yeo_UMuNV9Tca1qivfsF4C1WH9eM8AjwgfxDYDmzb4cTKh3VVzP3XRxVQW-TnlJ_4LzX762o_t0=w2400"/>} />
                <Route path="/message4" element={<Message dayMessage="רביעי" imgUrl="https://lh3.googleusercontent.com/AdmWmNnjeBwFbpV9nsnSy8SZ50PoUUGRCfVHUlYPskW7ByVz6GaMSgvwiedNxpZCSKqPhqD2I6JZuStpfwhFN32ykVLveibqtntFPVGpZ7NACf7rDNoj5ISHrofGw3Wvda98uFdmsMQ=w2400"/>} />


              </Routes>{" "}
            </>
          )}
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
