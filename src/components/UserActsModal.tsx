import React from "react";
import {
  ModalToolbar,
  Button,
  Modal,
  ModalContainer,
  Name,
} from "./StyledComponents";
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
        <ModalToolbar>
          <Name style={{ flex: 1 }}>{user.real_name}</Name>
          <Button onClick={closeModal} />
        </ModalToolbar>
        <ActivityPeriodList
          activity_periods={user.activity_periods}
          timezone={user.tz}
        />
      </ModalContainer>
    </Modal>
  );
};

export default UserActsModal;
