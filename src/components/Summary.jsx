import React, { useState } from "react";
import styled from "styled-components";
import { Layout } from "../styles";

const Content = styled.button`
  width: 170px;
  height: auto;
  border-radius: 25px;
  border: none;
  margin-bottom: 20px;
  color: #18031f;
  opacity: 0.8;
  background-color: #fff;
  font-style: italic;
  box-shadow: 0 0.3rem rgba(121, 121, 121, 0.65);

  :active {
    transform: translate(0, 0.3rem);
    box-shadow: 0 0.1rem rgba(255, 255, 255, 0.65);
}
`;

function Item ({elemnet}) {
    const [name, setName] = useState(false);
    return <>
     <Content  onClick={()=>setName(!name)}><h4>{elemnet.attribute}</h4>{name && <p>{elemnet.name}</p>}</Content>

     </>
}

export default function Summary({ attributes }) {
  return (
    <Layout>
        <h1> כל התכונות שלי</h1>
      {attributes.map((element, index) => {
        return <Item key={index} elemnet={element}/>
      })}
    </Layout>
  );
}
