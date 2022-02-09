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
  ContainerRelative
} from "../styles";

export default function Day1({ personsData }) {

  const [route, setRaote] = useState();
  const [person, setPerson] = useState();
  const [currentIndex, setCurrenIndex] = useState();
  const [persons, setPersons] = useState([]);
  const [showGift, setShowGift] = useState(false);


  useEffect(() => {
    const getPersonsDataForDay =  () => {
      const arr = personsData.slice(0, 7);
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
      <h2>עבר</h2>
      <p>?מה עושים היום</p>

      <ContainerRelative>
        <a
          href="https://lagoonkosher.com/blue-lagoon/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <Image
            src="https://www.mspirit.co.il/wp-content/uploads/2020/12/iStock-1097481110-2.jpg"
            alt=""
          ></Image>
          <h3>!קח אותי לשם</h3>
        </a>
      </ContainerRelative>

      <p>?מה אוכלים היום</p>
      <ContainerRelative>
      
       
          {" "}
          <Image
            src="https://s1.kikar.co.il/th/data/auto/nadm/zf/8ccaacet__w650h433q95.jpg"
            alt=""
          />
        

      </ContainerRelative>

      <p>:מתנה</p>
      <ContainerRelative>
        {" "}
        <button onClick={() => setShowGift(true)}>
          <Image src={gift} alt="" />
          <h3 >
            !קח אותי לשם
          </h3>
        </button>
      </ContainerRelative>
      {showGift && <>
        <Gift>
        <Image
            src="https://www.netoneto.co.il/images/itempics/NOASWAG_25072021175039_large.jpg"
            alt=""
          />
          <button style={{ border: "none", background: "none" }} onClick={() => setShowGift(false)}> X</button>

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
      </NavSection> <div id="person">{route && <Person person={person} />}</div>{" "}
    </Layout>
  );
}
