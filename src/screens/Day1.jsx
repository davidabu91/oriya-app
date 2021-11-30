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

export default function Day1({ getData }) {
  const [route, setRaote] = useState();
  const [person, setPerson] = useState();
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    const getPersonsData = async () => {
      const res = await getData();
      const arr = res.slice(0, 5);
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
      <h2>ילדות</h2>
      <p>?מה עושים היום</p>
      <a
        href="https://yaaracacao.co.il/he/product/praline-workshop/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <Image
          src="https://yaaracacao.co.il/wp-content/uploads/2020/05/%D7%A1%D7%93%D7%A0%D7%AA-%D7%A4%D7%A8%D7%9C%D7%99%D7%A0%D7%99%D7%9D-%D7%99%D7%97%D7%99%D7%93.jpg"
          alt=""
        />
      </a>
      <p>המלון שלנו לימים הקרובים</p>
      <a
        href="https://www.mizpe-hayamim.co.il/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <Image
          src="https://cdn.isrotel.co.il/media/24939/0447_assaf_pinchuk_p_pea62.jpg?anchor=center&mode=crop&width=766&height=569&rnd=132379017860000000"
          alt=""
        />
      </a>
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
          <AttributtTitle >
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
