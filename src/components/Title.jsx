import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import oriyastartimage from "../assets/oriyastart.jpg";
import oriyaIcon from '../assets/oriyaIcon.jpg';
const animation = keyframes`
  0% { opacity: 0; transform: translateY(-100px); }
  25% { opacity: 1; transform: translateY(0px); }
  75% { opacity: 1; transform: translateY(0px); }
  /* 100% { opacity: 0; transform: translateY(-100px); } */
`;
const Wrapper = styled.span`
  animation-name: ${animation};
  animation-duration: 6s;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  display: flex;
  flex-direction: column;
`;

const StyledModal = styled.div`
  width: 20rem;
  height: 30rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 10px 10px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin-top: 2.5rem;


  p {
    text-align: center;
    padding: 40px 40px 30px 40px;
  }
`;

const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const ButtonTitle = styled.button`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  position: absolute;
  background-color: #f7ddf7;
  opacity: 0.6;
  top: 50%;
  left: 53%;
  transform: translateY(-50%);
`;

const ButtonClose = styled.button`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background-color: #f7ddf7;
  opacity: 0.6;
  margin-left: auto;
  margin-right: auto;

  span {
      color: #290527;
      font-size: larger;
      font-weight: bold;
  }
`;

const ContainerStart = styled.div``;

const ImageStart = styled.img`
  opacity: 0.5;
  position: absolute;
  width: 200px;
  height: 320px;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  border-radius: 25px;
  box-shadow: 0 10px 10px 10px rgba(0, 0, 0, 0.2);
`;

export default function Title({ setStart }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal(e) {
    setIsOpen(!isOpen);
  }

  return (
    <Layout>
      {!isOpen && (
        <>
          <h1> חוגגים 30 לאוריה</h1>
          <ContainerStart>
            <ImageStart src={oriyastartimage} alt="" />
            <ButtonTitle onClick={toggleModal}>
              <h4>Let's Start! </h4>{" "}
            </ButtonTitle>
          </ContainerStart>
        </>
      )}
      {isOpen && (
        <StyledModal
          isOpen={isOpen}
          onBackgroundClick={toggleModal}
          onEscapeKeydown={toggleModal}
        >
          <Wrapper>
            <p>
              אוריה אהובתי חשבתי וחשבתי וחשבתי איך אוכל להפתיע אותך איך אוכל
              להרים לך ובעיקר כיצד תוכלי לחגוג באמת אך גם לקבל ערך אז אולי זה לא
              הכי נקי ויש עוד מלא שיפורים אבל בכל זאת בניתי קונספט שאכן כולל גם
              אפליקציה קטנה חוויות מתנות וברכות הכל כדי לרגש אותך לשמח אותך
              ובעיקר להרים לך את המלכה שלי אני אוהב אותך אני מזמין אותך לצאת
              איתי יחד לחוויה מגניבה משמחת ומרגשת אני בטוח שיהיה כייף קדימה
              יוצאים לדרך
            </p>

            <ButtonClose
              onClick={() => {
                toggleModal();
                setStart(true);
              }}
            >
                <span>
              !יאללה</span>
            </ButtonClose>
          </Wrapper>
        </StyledModal>
      )}
    </Layout>
  );
}
