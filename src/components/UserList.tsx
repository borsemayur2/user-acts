import React, { useState } from "react";
import { UserCard } from "./StyledComponents";
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
    <>
      {users.map((user) => (
        <UserCard key={user.id} onClick={() => handleClickUser(user)}>
          <p>{user.real_name}</p>
        </UserCard>
      ))}
      {user && <UserActsModal user={user} closeModal={handleCloseModal} />}
    </>
  );
};

export default UserList;
