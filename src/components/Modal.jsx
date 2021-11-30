import styled from "styled-components";
import React, { useState } from "react";
import Title from "./Title";

const StyledModal = styled.div`
  width: 20rem;
  height: 45rem;
  background-color: #fff;
`;

const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;


function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal(e) {
    setIsOpen(!isOpen);
  }

 

  return (
    <div>
      {!isOpen && (
        <button onClick={toggleModal}> ...לחצי כאן ותנחשי מי אמר מה</button>
      )}
      {isOpen && (
        <StyledModal
          isOpen={isOpen}
          onBackgroundClick={toggleModal}
          onEscapeKeydown={toggleModal}
        >
          <Layout>
            <Title/>
          </Layout>
          <button onClick={toggleModal}>Close me</button>
        </StyledModal>
      )}
    </div>
  );
}

export default Modal;
