import React from "react";
import styled from "styled-components";
import {PersonImage, Wrapper} from '../styles';

const Layout = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 35px;
  width: 360px;
  text-align: center;
  font-weight: bold;

`;

const Span = styled.span`
  font-style: oblique;
  color: #1e0322;
  font-weight: bold;
`;


export default function Person({ person }) {

  
  return (
    <Wrapper>
    <Layout>
      <h4>{person.name}</h4>
      <Span>:זיכרון נוסטלגי</Span>
      <p>{person.story}</p>
      <Span>:אני אוהב/ת לדבר עם אפרת על </Span>
      <p>{person.talk}</p>
      <Span> :עושה לי את השבוע/השבת</Span>
      <p>{person.week}</p>
      <Span>:משימות לאפרת עד גיל 40</Span>
      <p>{person.tasks}</p>
      <Span>:ברכה מהלב</Span>
      <p>{person.blessing}</p>
      {person.imgUrl && (
        <PersonImage
          src={`https://drive.google.com/thumbnail?id=${person.imgUrl}`}
          alt=""
        ></PersonImage>
      )}
    </Layout>
    </Wrapper>
    
  );
}
