import React from "react";
import { Modal, ModalContainer } from "./StyledComponents";
import { IUser } from "../interfaces/IUser";
import ActivityPeriodList from "./ActivityPeriodList";

interface IProps {
  user: IUser;
  closeModal: () => void;
}

const UserActsModal = ({ user, closeModal }: IProps) => {
  return (
    <Modal>
      <ModalContainer>
        <button onClick={closeModal}>X</button>
        <h2>{user.real_name}</h2>
        <h3>Timezone: {user.tz}</h3>
        <ActivityPeriodList activity_periods={user.activity_periods} />
      </ModalContainer>
    </Modal>
  );
};

export default UserActsModal;
