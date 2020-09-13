import styled from "styled-components";

export const AppHeader = styled.h2``;

const Card = styled.div`
  box-shadow: 0 0 5px 2px lightgray;
  border-radius: 0.4em;
`;

export const UserListContainer = styled.div`
  height: 90vh;
  overflow-y: scroll;
`;

export const UserCard = styled(Card)`
  padding: 1px;
  margin: 20px;
`;

export const Modal = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
`;

export const ModalToolbar = styled.div`
  display: flex;
  align-items: baseline;
`;

export const Button = styled.button`
  padding: 10px;
  background: #ff605c;
  outline: none;
  border: none;
  border-radius: 50%;
  color: white;
  margin: 0 10px;

  &:hover {
    box-shadow: 0 0 5px 2px lightgray;
  }
`;

export const ModalContainer = styled.div`
  width: 95%;
  height: 95%;
  background: rgba(255, 255, 255, 1);
  margin: 20px auto;
  position: relative;
  border-radius: 0.2em;
`;

export const ActivityPeriodListContainer = styled.div`
  /* display: flex; */
  flex-flow: row wrap;
  justify-content: flex-start;
  overflow-y: scroll;
  height: 30vh;
`;

export const ActivityPeriodDetailsContainer = styled(Card)`
  padding: 2px;
  margin: 10px;
`;
export const ActivityPeriodCard = styled.h4``;

export const Name = styled.h3``;

export const Timezone = styled.h4``;
