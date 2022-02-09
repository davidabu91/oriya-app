import React from "react";
import { Layout } from "../styles";
import oopsdayimage from '../assets/oopsday.jpeg';
import styled from "styled-components";

const ImageMessage = styled.img`
width: 230px;
height: 300px;
border-radius: 50px;
margin-top: 20px;
`; 

export default function Message({ dayMessage }) {


  return (
    <Layout>
      <p>...אופס</p>
      <p>?רוצה לגלות מה יהיה ביום {dayMessage}</p>
      <p>?לאן את ממהרת</p>
      <p>תהני מהיום הזה הוא עוד לא נגמר</p>
      <ImageMessage src={oopsdayimage} alt="" />
    </Layout>
  );


}
