import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import oriyastartimage from "../assets/oriyastart.jpg";

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

  div {
    padding: 30px 40px 5px 40px;
  }
  p {
    text-align: center;
  }
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
`;

const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  h1 {
    margin: 25px;
  }
`;

const ButtonTitle = styled.button`
  height: 50px;
  width: 190px;
  margin-left: 15px;
  border-radius: 10px;
  box-shadow: 0.3rem 0.3rem rgba(121, 121, 121, 0.65);
  background-color: #faf0fa;
  position: absolute;
  opacity: 0.6;
  top: 85%;
  left: 46%;
  transform: translateY(-50%) translateX(-50%);
`;

const ButtonClose = styled.button`
  height: 50px;
  width: 190px;
  margin-left: 15px;
  border-radius: 10px;
  box-shadow: 0.3rem 0.3rem rgba(121, 121, 121, 0.65);
  background-color: #faf0fa;
  margin-left: auto;
  margin-right: auto;

  span {
    color: #290527;
    font-size: larger;
    font-weight: bold;
  }
`;

const ContainerStart = styled.div`
  margin-top: 70px;
`;

const ImageStart = styled.img`
  opacity: 0.7;
  position: absolute;
  width: 200px;
  height: 380px;
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
            <div>
              <p>אוריה אהובתי</p>
              <p>
                חשבתי וחשבתי וחשבתי איך אוכל להפתיע אותך איך אוכל להרים לך
                ובעיקר כיצד תוכלי לחגוג באמת אך גם לקבל ערך
              </p>
              <p>
                אז בניתי אפליקציה קטנה ואולי זה לא הכי נקי ויש עוד שיפורים 
                </p>
                <p>
                בכל יום נעסוק בתקופה אחרת בחייך דרך חוויה, מתנה, אוכל טוב וברכות מהיקרים לך
                <span style={{fontSize: "12px"}}> (לא מבטיח שהכל יהיה קשור, תזרמי)</span>

                </p>
              <p>
                את המלכה שלי אני אוהב אותך ואני מזמין אותך לצאת איתי יחד לחוויה
                מגניבה משמחת ומרגשת אני בטוח שיהיה כייף
              </p>
            </div>
            <ButtonClose
              onClick={() => {
                toggleModal();
                setStart(true);
              }}
            >
              <span>!יאללה</span>
            </ButtonClose>
          </Wrapper>
        </StyledModal>
      )}
    </Layout>
  );
}
