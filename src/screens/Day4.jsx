import React, { useEffect, useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { MdOutlineNavigateBefore } from "react-icons/md";
import Person from "../components/Person";
import {
  AttributtTitle,
  Avatar,
  Image,
  Layout,
  NavButton,
  NavSection,
} from "../styles";
import oriyadavid from "../assets/oriaaanddavid.jpg";

export default function Day4({ getData }) {
  const [route, setRaote] = useState();
  const [person, setPerson] = useState();
  const [persons, setPersons] = useState([]);
  const getPersonsData = async () => {
    const res = await getData();
    const arr = res.slice(15);
    setPersons([...arr]);
  };

  useEffect(() => {
    getPersonsData();
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
        <Image src="https://img.haarets.co.il/img/1.2924927/3165321723.jpg?precrop=1815,1054,x4,y310&width=1280" alt="" />
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
    </Layout>
  );
}
