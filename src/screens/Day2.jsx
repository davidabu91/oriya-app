import React, { useEffect, useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { MdOutlineNavigateBefore } from "react-icons/md";
import Person from "../components/Person";
import gift from "../assets/gift.jpg";
import Gift from '../components/Gift';

import {
  Avatar,
  Image,
  Layout,
  NavButton,
  NavSection,
  AttributtTitle,
  ContainerRelative
} from "../styles";

export default function Day2({ personsData }) {
  const [route, setRaote] = useState();
  const [person, setPerson] = useState();
  const [currentIndex, setCurrenIndex] = useState();
  const [persons, setPersons] = useState([]);
  const [showGift, setShowGift] = useState(false);


  useEffect(() => {
    const getPersonsDataForDay =  () => {
      const arr = personsData.slice(8, 15);
      setPersons([...arr]);
    };
    getPersonsDataForDay();
  }, [personsData]);

  const startPersonData = () => {
    if (!person) {
      setPerson(persons[0]);
      setCurrenIndex(0);
    }
  }

  const handleNextButton = () => {
    let index = currentIndex;
    if (!person) {
      startPersonData();
    } else {
      if (index === persons.length - 1) {
        setPerson(persons[0]);
        setCurrenIndex(0);

      } else {
        setPerson(persons[index + 1]);
        setCurrenIndex(index+1);
      }
    }
    setRaote("");
  }

  const handleBeforeButton = () => {
    let index = currentIndex;
    if (!person) {
      setPerson(persons[persons.length - 1]);
    } else {
      if (index === 0) {
        setPerson(persons[persons.length - 1]);
        let end = persons.length - 1;
        setCurrenIndex(end);

      } else {
        setPerson(persons[index - 1]);
        setCurrenIndex(index-1);

      }
    }
    setRaote("");
  }

  const hadleOpenPerson = () => {
    if (person) setRaote(person.name);
  };

  return (
    <Layout>
      <h2>הווה</h2>
      <p>?מה עושים היום</p>
      <ContainerRelative>
      <a
        href="https://he.wikipedia.org/wiki/%D7%94%D7%A8%D7%99_%D7%98%D7%A8%D7%95%D7%93%D7%95%D7%A1"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <Image src="https://www.rafting.co.il/wp-content/uploads/2017/09/%D7%92%D7%99%D7%A4-2-2.jpg" alt="" />
      </a>
      <h3>!קח אותי לשם</h3>
      </ContainerRelative>
      <p>:מתנה</p>
      <ContainerRelative>
        {" "}
        <button onClick={()=>setShowGift(true)}>
        <Image src={gift} alt="" />
        <h3 >
         !קח אותי לשם
        </h3>
        </button>
      </ContainerRelative>
      {showGift && <>
      <Gift>
        <Image src="https://img.zap.co.il/pics/2/2/9/3/41023922c.gif" alt=""/>
        <button style={{border: "none", background: "none"}} onClick={()=>setShowGift(false)}> X</button>

      </Gift>
        </>
        }
   <NavSection>
        {person && (
          <>
            <NavButton onClick={handleBeforeButton}>
              <MdOutlineNavigateBefore />
            </NavButton>
            <a href="#person">
              <Avatar onClick={hadleOpenPerson}>
                {" "}
                <h4>{person.attribute}</h4>{" "}
              </Avatar>{" "}
            </a>
            <NavButton onClick={handleNextButton}>
              <MdNavigateNext />
            </NavButton>
          </>
        )}
        {!person && (
          <AttributtTitle onClick={startPersonData}>
            <h4>התכונות שלי </h4>
          </AttributtTitle>
        )}
      </NavSection>      <div id="person">{route && <Person person={person} />}</div>
    </Layout>
  );
}
