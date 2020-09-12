import styled from "styled-components";

export const UserCard = styled.div`
  /* background: red; */
  padding: 5px;
  margin: 20px;
  box-shadow: 0 0 5px 2px lightgray;
  border-radius: 0.4em;
`;

export const Modal = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.div`
  width: 95%;
  height: 95%;
  background: rgba(255, 255, 255, 1);
  margin: 20px auto;
  position: relative;
  border-radius: 0.2em;
`;
