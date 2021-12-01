import React from "react";
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
`;

export default function Summary({ attributes }) {
  return (
    <Layout>
      {attributes.map((item, index) => {
        return <Content key={index}><h4>{item.attribute}</h4></Content>;
      })}
    </Layout>
  );
}
