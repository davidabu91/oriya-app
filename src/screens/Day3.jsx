import React, { useEffect, useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { MdOutlineNavigateBefore } from "react-icons/md";
import Person from "../components/Person";
import image from "../assets/paradive.png";
import {
  AttributtTitle,
  Avatar,
  Image,
  Layout,
  NavButton,
  NavSection,
} from "../styles";

export default function Day3({ getData }) {
  const [route, setRaote] = useState();
  const [person, setPerson] = useState();
  const [persons, setPersons] = useState([]);


  useEffect(() => {
    const getPersonsData = async () => {
      const res = await getData();
      const arr = res.slice(10,14);
      setPersons([...arr]);
    };
    getPersonsData();
  }, [getData]);

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
      <h2>קלילות החיים והשמחה</h2>
      <p>?מה עושים היום</p>
      <a
        href="https://www.paradive.co.il/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <Image src={image} alt="" />
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
