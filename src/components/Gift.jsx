import React from "react";
import styled from "styled-components";

const Layout = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 35px;
  width: 360px;
  text-align: center;
`;




export default function Gift(props) {

  
  return (
    <Layout>
      <p>{props.children}</p>
    </Layout>
  );
}
