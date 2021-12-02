import React, { useEffect, useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { MdOutlineNavigateBefore } from "react-icons/md";
import Person from "../components/Person";
import Summary from "../components/Summary";
import gift from "../assets/gift.jpg";
import Gift from "../components/Gift";

import {
  AttributtTitle,
  Avatar,
  Image,
  Layout,
  NavButton,
  NavSection,
  ContainerRelative,
} from "../styles";

export default function Day4({ getData }) {
  const [route, setRaote] = useState();
  const [person, setPerson] = useState();
  const [persons, setPersons] = useState([]);
  const [attributes, setAttributes] = useState([]);
  const [time, setTime] = useState();
  const [showGift, setShowGift] = useState(false);

  useEffect(() => {
    const getPersonsData = async () => {
      const res = await getData();
      const arr = res.slice(14);
      const attributesArr = res.map((item) => {
        return {
          name: item.name,
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
      <h2>חלומות יצירה ואתגר</h2>
      <p>?מה עושים היום</p>
      <ContainerRelative>
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
        <h3>!קח אותי לשם</h3>
      </ContainerRelative>
      <p>:מתנה</p>
      <ContainerRelative>
        {" "}
        <button onClick={() => setShowGift(true)}>
          <Image src={gift} alt="" />
          <h3>!קח אותי לשם</h3>
        </button>
      </ContainerRelative>
      {showGift && (
        <>
          <Gift>
            <p>אוריה שלי אהובתי חמדתי </p>
            <p>יקרה שלי</p>
            <p>היום אתן לך תיק ושעון</p>
            <p>שעון כי צריך</p>
            <p>ותיק כדי לאסוף ולשמור</p>
            <p>את עצמך</p>
            <p>את עוצמתך</p>
            <p>ואת שנינו</p>
            <p>וכדי לחסוך זמן והתלבטות</p>
            <p>בואי ניסע ישר לחנות</p>
            <button
              style={{ border: "none", background: "none" }}
              onClick={() => setShowGift(false)}
            >
              {" "}
              X
            </button>
          </Gift>
        </>
      )}
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
      </NavSection>
      <div id="person">{route && <Person person={person} />}</div>{" "}
      {time > 14 && <Summary attributes={attributes} />}
      {time > 17 && (
        <div>
          <p>?חשבת שסיימנו</p>

          <a href="https://dugo.co.il/post_show/%D7%90%D7%93%D7%99%D7%A8-%D7%9E%D7%99%D7%9C%D7%A8-%D7%91%D7%A0%D7%99%D7%99%D7%A0%D7%99-%D7%94%D7%90%D7%95%D7%9E%D7%94-%D7%99%D7%A8%D7%95%D7%A9%D7%9C%D7%99%D7%9D/">
            <Image
              src="https://img.mako.co.il/2020/03/18/adirmiller_i.jpg"
              alt=""
            ></Image>
          </a>
        </div>
      )}
    </Layout>
  );
}
