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
import hatuna2 from "../assets/hatuna2.png";

export default function Day2({ getData }) {
  const [route, setRaote] = useState();
  const [person, setPerson] = useState();
  const [persons, setPersons] = useState([]);
  const [showGift, setShowGift] = useState(false);


  useEffect(() => {
    const getPersonsData = async () => {
      const res = await getData();
      const arr = res.slice(5, 10);
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
    if (person) {
      setRaote(person.name);
    }
  };

  return (
    <Layout>
      <h2>זוגיות</h2>
      <p>?מה עושים היום</p>
      <ContainerRelative>
      <a
        href="https://www.dokidoki.co.il/%D7%A6%D7%99%D7%9C%D7%95%D7%9E%D7%99-%D7%96%D7%95%D7%92%D7%95%D7%AA/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <Image src={hatuna2} alt="" />
      </a>
      <h3>!קח אותי לשם</h3>
      </ContainerRelative>
      <p>?מה אוכלים היום</p>
      <ContainerRelative>
      <a
        href="https://www.japanika.net/menu/#%D7%9E%D7%92%D7%A9%D7%99_%D7%9E%D7%A1%D7%99%D7%91%D7%94"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <Image src="https://acdn.foodbox.co.il/wp-content/uploads/sites/8/2016/06/15170922/7%D7%A4%D7%90%D7%93-%D7%AA%D7%90%D7%99-%D7%99%D7%A8%D7%A7%D7%95%D7%AA-3504-768x513.jpg" alt="" />
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
        <p>לכל ידוע חיבתך לצילום</p>
        <p>אך מה לעשות, הטלפון לפעמים טומטום</p>
        <p>כן כן, קבלתי מתנה טלפון</p>
        <p>כזה שאפשר לצלם בו המון</p>
        <p>וכדי לחסוך זמן והתלבטות</p>
        <p>בואי ניסע ישר לחנות</p>
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
                <h4>{`"${person.attribute}"`}</h4>{" "}
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
