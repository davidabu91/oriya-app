import React, { useEffect, useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { MdOutlineNavigateBefore } from "react-icons/md";
import Person from "../components/Person";
import image from "../assets/paradive.png";
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

export default function Day3({ getData }) {
  const [route, setRaote] = useState();
  const [person, setPerson] = useState();
  const [persons, setPersons] = useState([]);
  const [showGift, setShowGift] = useState(false);

  useEffect(() => {
    const getPersonsData = async () => {
      const res = await getData();
      const arr = res.slice(10, 14);
      setPersons([...arr]);
    };
    getPersonsData();
  }, [getData]);
  const startPersonData = () => {
    if (!person) setPerson(persons[0]);
  }
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
      <ContainerRelative>
        <a
          href="https://www.paradive.co.il/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <Image src={image} alt="" />
        </a>
        <h3>!קח אותי לשם</h3>
      </ContainerRelative>
      <p>?מה אוכלים היום</p>
      <ContainerRelative>
        <a
          href="https://kaparaburger.co.il/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <Image
            src="https://d3o5sihylz93ps.cloudfront.net/app/uploads/2019/03/10143717/274-Custom.jpg"
            alt=""
          />
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
        <p>אוריה שלי אהובתי חמדתי </p>
        <p>איזה כייף שיש סיבה למסיבה</p>
        <p>היום קצר והמלאכה מרובה</p>
        <p>אז חכי למחר</p>
        <p>ותקבלי מתנה כפולה</p>
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
