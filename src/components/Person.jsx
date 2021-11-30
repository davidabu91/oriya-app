import React from "react";
import styled from "styled-components";
import {Image, Wrapper} from '../styles';

const Layout = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 35px;
  width: 360px;
  text-align: center;
`;

const Span = styled.span`
  font-style: oblique;
  color: #1e0322;
`;


export default function Person({ person }) {

  
  return (
    <Wrapper>
    <Layout>
      <h4>{person.name}</h4>
      <Span>:זיכרון נוסטלגי</Span>
      <p>{person.story}</p>
      <Span>:משימות לאוריה עד גיל 40</Span>
      <p>{person.tasks}</p>
      <Span>:ברכה מהלב</Span>
      <p>{person.blessing}</p>
      {person.imgUrl && (
        <Image
          src={`https://drive.google.com/thumbnail?id=${person.imgUrl}`}
          alt=""
        ></Image>
      )}
    </Layout>
    </Wrapper>
  );
}
