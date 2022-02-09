import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import efratstartimage from "../assets/efratStart.jpg";

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
  height: 70px;
  width: 200px;
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
  opacity: 0.9;
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
          <h1> חוגגים 30 לאפרת</h1>
          <ContainerStart>
            <ImageStart src={efratstartimage} alt="" />
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
              <p>!אפרת אהובתי היקרה</p>
              <p>
               אם חשבת לרגע קטן ושטותי <br />
                שאתעלם מיום כל כך משמעותי <br />
                שבו את רשמית עומדת לגלוש <br />
                לעידן של קידומת שלוש
              </p>
              <p>
                אז טעית, כי אין, אין מצב בעולם <br />
                שאני אפספס כזה עיתוי מושלם
              </p>
              <p>
                אז בלי פרצופים, קבלי בשמחה <br />
                טיול שהוא הפתעה וחגיגה <br />
                שנבלה, נהנה ונכבש כל יעד <br />
                ושאהבתנו תקוד לעד
              </p>
            </div>
            <ButtonClose
              onClick={() => {
                toggleModal();
                setStart(true);
              }}
            >
              <span>תלחצי על הקישור  <br />ותגלי מה הולך להיות בקיצור</span>
            </ButtonClose>
          </Wrapper>
        </StyledModal>
      )}
    </Layout>
  );
}
