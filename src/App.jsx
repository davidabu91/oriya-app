import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import styled from "styled-components";
import Title from "./components/Title";
import Day1 from "./screens/Day1";
import Day2 from "./screens/Day2";
import Day3 from "./screens/Day3";
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
  const [personsData, setPersonsData] = useState([]);
  const route1 = "day1"
  const [route2, setRoute2] = useState("day2");
  const [route3, setRoute3] = useState("day3");

  const getData = () => {
    try {
      const persons = axios(
        "https://sheet.best/api/sheets/d11f2b6b-4693-4d26-851f-f2c3881f2804"
      ).then((res) => {
        let data = res.data.map((item) => {
          let personArr = Object.values(item);
          const [date, name, attribute, story, talk, week, tasks, blessing, imgUrl] =
            personArr;
          const person = {
            date,
            name,
            attribute,
            story,
            tasks,
            blessing,
            talk,
            week,
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
    const getPorsons = async () => {
      const res = await getData();
      setPersonsData(res);
    }
    getPorsons();
  },[])


  useEffect(() => {
    const today = new Date();
    const date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();

    console.log(date);  

    function prodaction () {
      if (date === "2022-2-9") {setRoute2("message2");setRoute3("message3"); };
      if (date === "2022-2-10"){setRoute3("message3");  };
    }

    if(date === "2022-2-9" || "2022-2-10" || "2022-2-11") prodaction();

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
                <TabButton to={route3}> שישי</TabButton>
                <TabButton to={route2}> חמישי</TabButton>
                <TabButton to={route1}> רביעי</TabButton>
              </Nav>
              <Routes>
                <Route path="/day1" element={<Day1 personsData={personsData} />} />
                <Route path="/day2" element={<Day2 personsData={personsData} />} />
                <Route path="/day3" element={<Day3 personsData={personsData} />} />
                <Route path="/message2" element={<Message dayMessage="חמישי" />} />
                <Route path="/message3" element={<Message dayMessage="שישי" />} />


              </Routes>{" "}
            </>
          )}
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
