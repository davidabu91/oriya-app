import React, { useEffect, useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { MdOutlineNavigateBefore } from "react-icons/md";
import Person from "../components/Person";
import {Avatar, Image, Layout, NavButton, NavSection} from '../styles';





export default function Day1({ getData }) {
  const [route, setRaote] = useState();
  const [person, setPerson] = useState();
  const [persons,setPersons] = useState([]);

  const getPersonsData = async () => {
    const res = await getData();
    const arr = res.slice(0,5);
    setPersons([...arr]);
}

useEffect(() => {
  getPersonsData();
}, [])

const handleNextButton = () => {
    if (!person) {
      setPerson(persons[0]);
    } else {
        let index = persons.indexOf(person);
        if (index===persons.length-1) {
            setPerson(persons[0])
        }
        else{
            setPerson(persons[index+1])
        }
    }
    setRaote('');
  };

  const handleBeforeButton = () => {
    if (!person) {
      setPerson(persons[persons.length-1]);
    } else {
        let index = persons.indexOf(person);
        if(index === 0){
            setPerson(persons[persons.length-1])
        }
        else{
            setPerson(persons[index-1])
        }
    }
    setRaote('');

  };

  const hadleOpenPerson = () => {
      if(person) setRaote(person.name)
  }

  return (
    <Layout>
      <h2>ילדות</h2>
      <p>?מה עושים היום</p>
      <a href="https://yaaracacao.co.il/he/product/praline-workshop/" target="_blank" rel="noopener noreferrer"> <Image src="https://yaaracacao.co.il/wp-content/uploads/2020/05/%D7%A1%D7%93%D7%A0%D7%AA-%D7%A4%D7%A8%D7%9C%D7%99%D7%A0%D7%99%D7%9D-%D7%99%D7%97%D7%99%D7%93.jpg" alt="" /></a>
      <p>!מתנה</p>
      
      <NavSection>
        <NavButton onClick={handleBeforeButton}>
          <MdOutlineNavigateBefore />
        </NavButton>
        <Avatar onClick={hadleOpenPerson} >
            { person ? <h4>{`"${person.attribute}"`}</h4> :
          <h4>התכונות שלי </h4>
          }
        </Avatar>
        <NavButton onClick={handleNextButton}>
          <MdNavigateNext />
        </NavButton>
      </NavSection>
    
      {route && <Person person={person} />}
    </Layout>
  );
}
