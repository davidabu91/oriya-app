import React, { useEffect, useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { MdOutlineNavigateBefore } from "react-icons/md";
import Person from "../components/Person";
import Summary from "../components/Summary";
import {
  AttributtTitle,
  Avatar,
  Image,
  Layout,
  NavButton,
  NavSection,
} from "../styles";

export default function Day4({ getData }) {
  const [route, setRaote] = useState();
  const [person, setPerson] = useState();
  const [persons, setPersons] = useState([]);
  const [attributes, setAttributes] = useState([]);
  const [time, setTime] = useState();

  useEffect(() => {
    const getPersonsData = async () => {
      const res = await getData();
      const arr = res.slice(14);
      const attributesArr = res.map((item) => {
        return {
          item: item.name,
          attribute: item.attribute,
          imgUrl: item.imgUrl,
        };
      });
      setAttributes([...attributesArr]);
      setPersons([...arr]);
    };
    getPersonsData();
  }, [getData]);

  useEffect(() => {
    const date = new Date().getHours();
    setTime(date);
  }, []);

  const handleNextButton = () => {
    if (!person) {
      setPerson(persons[0]);
    } else {
      let index = persons.indexOf(person);
      if (index === persons.length - 1) {
        setPerson(persons[0]);
      } else {
        setPerson(persons[index + 1]);
      }
    }
    setRaote("");
  };

  const handleBeforeButton = () => {
    if (!person) {
      setPerson(persons[persons.length - 1]);
    } else {
      let index = persons.indexOf(person);
      if (index === 0) {
        setPerson(persons[persons.length - 1]);
      } else {
        setPerson(persons[index - 1]);
      }
    }
    setRaote("");
  };

  const hadleOpenPerson = () => {
    if (person) setRaote(person.name);
  };

  return (
    <Layout>
      <h2>חלומות יצירה ואתגר</h2>
      <p>?מה עושים היום</p>
      <a
        href="https://www.rest.co.il/kosher-restaurants/israel/chefs-restaurant/kosher/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <Image
          src="https://img.haarets.co.il/img/1.2924927/3165321723.jpg?precrop=1815,1054,x4,y310&width=1280"
          alt=""
        />
      </a>
      <p>!מתנה</p>
      <NavSection>
        <NavButton onClick={handleBeforeButton}>
          <MdOutlineNavigateBefore />
        </NavButton>
        {person ? (
          <a href="#person">
            <Avatar onClick={hadleOpenPerson}>
              {" "}
              <h4>{`"${person.attribute}"`}</h4>{" "}
            </Avatar>{" "}
          </a>
        ) : (
          <AttributtTitle>
            <h4>התכונות שלי </h4>
          </AttributtTitle>
        )}
        <NavButton onClick={handleNextButton}>
          <MdNavigateNext />
        </NavButton>
      </NavSection>
      <div id="person">{route && <Person person={person} />}</div>{" "}
      {time > 15 && <Summary attributes={attributes} />}
      {time > 17 && (
        <div>
          <a href="https://dugo.co.il/post_show/%D7%90%D7%93%D7%99%D7%A8-%D7%9E%D7%99%D7%9C%D7%A8-%D7%91%D7%A0%D7%99%D7%99%D7%A0%D7%99-%D7%94%D7%90%D7%95%D7%9E%D7%94-%D7%99%D7%A8%D7%95%D7%A9%D7%9C%D7%99%D7%9D/">
            <Image
              src="https://img.mako.co.il/2020/03/18/adirmiller_i.jpg"
              alt=""
            ></Image>
          </a>
        </div>
      )}
      <p>?חשבת שסיימנו</p>
    </Layout>
  );
}
