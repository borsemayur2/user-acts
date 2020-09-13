import React, { useState } from "react";
import { UserCard, Name, UserListContainer } from "./StyledComponents";
import UserActsModal from "./UserActsModal";
import { IUser } from "../interfaces/IUser";

type UserProps = {
  users: IUser[];
};

const UserList = ({ users }: UserProps) => {
  const [user, setUser] = useState<IUser | null>(null);

  const handleClickUser = (user: IUser) => {
    setUser(user);
  };

  const handleCloseModal = () => {
    setUser(null);
  };

  return (
    <UserListContainer>
      {users.map((user) => (
        <UserCard key={user.id} onClick={() => handleClickUser(user)}>
          <Name>{user.real_name}</Name>
        </UserCard>
      ))}
      {user && <UserActsModal user={user} closeModal={handleCloseModal} />}
    </UserListContainer>
  );
};

export default UserList;
