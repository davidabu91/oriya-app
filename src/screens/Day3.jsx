import React, { useEffect, useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { MdOutlineNavigateBefore } from "react-icons/md";
import Person from "../components/Person";
import gift from "../assets/gift.jpg";
import Gift from '../components/Gift';
import {
  AttributtTitle,
  Avatar,
  Image,
  Layout,
  NavButton,
  NavSection,
  ContainerRelative,
} from "../styles";

export default function Day3({ personsData }) {
  const [route, setRaote] = useState();
  const [person, setPerson] = useState();
  const [currentIndex, setCurrenIndex] = useState();
  const [persons, setPersons] = useState([]);
  const [showGift, setShowGift] = useState(false);

  useEffect(() => {
    const getPersonsDataForDay =  () => {
      let end = personsData.length - 1;
      const arr = personsData.slice(16, end);
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
      <h2>  עתיד</h2>
      <p>?מה עושים היום</p>
      <ContainerRelative>
        <a
          href="https://www.paradive.co.il/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <Image src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Paphos1.JPG" alt="" />
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
        <Image src="https://cdn.w600.comps.canstockphoto.co.il/%D7%9B%D7%97%D7%95%D7%9C-%D7%A4%D7%99%D7%92%D7%9E%D7%94-%D7%A6%D7%99%D7%95%D7%A8-%D7%94%D7%99%D7%AA%D7%95%D7%9C%D7%99-%D7%99%D7%9C%D7%93-%D7%98%D7%93%D7%99-%D7%A7%D7%9C%D7%99%D7%A4-%D7%90%D7%A8%D7%98-%D7%95%D7%A7%D7%98%D7%95%D7%A8%D7%99_csp23904911.jpg" alt=""/>
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
      </NavSection>      <div id="person">{route && <Person person={person} />}</div>{" "}
    </Layout>
  );
}
