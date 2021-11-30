import React, { useEffect, useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { MdOutlineNavigateBefore } from "react-icons/md";
import Person from "../components/Person";
import {
  Avatar,
  Image,
  Layout,
  NavButton,
  NavSection,
  AttributtTitle,
} from "../styles";
import hatuna2 from "../assets/hatuna2.png";

export default function Day2({ getData }) {
  const [route, setRaote] = useState();
  const [person, setPerson] = useState();
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    const getPersonsData = async () => {
      const res = await getData();
      const arr = res.slice(5, 10);
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
    if (person) {
      setRaote(person.name);
    }
  };

  return (
    <Layout>
      <h2>זוגיות</h2>
      <p>?מה עושים היום</p>
      <a
        href="https://www.dokidoki.co.il/%D7%A6%D7%99%D7%9C%D7%95%D7%9E%D7%99-%D7%96%D7%95%D7%92%D7%95%D7%AA/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <Image src={hatuna2} alt="" />
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
      <div id="person">{route && <Person person={person} />}</div>
    </Layout>
  );
}
