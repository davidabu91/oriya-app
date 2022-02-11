import React, { useEffect, useState } from "react";
import {Layout} from "../styles";
import Summary from "../components/Summary";
import childrenVideo from '../assets/children.mp4';
import styled from "styled-components";

const VideoElelemnt = styled.video`
  width: 180px;
  height: 250px;
  margin-top:20px;
`

export default function Day4({ personsData }) {

  const [attributes, setAttributes] = useState([]);

  useEffect(() => {
    const getAttributes = () => {
      const attributesArr = personsData.map((item) => {
        return {
          name: item.name,
          attribute: item.attribute,
          imgUrl: item.imgUrl,
        };
      });
      setAttributes([...attributesArr]);
    };
    getAttributes();
  }, []);



  return (
    <Layout>
      <h2>  חוזרים הביתה</h2>
      <VideoElelemnt src={childrenVideo} controls></VideoElelemnt>
      <Summary attributes={attributes} />
    </Layout>
  );
}
