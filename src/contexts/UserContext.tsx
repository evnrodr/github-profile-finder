import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";
import { IUser } from "../utils/types/types";

type UserContextType = {
  user: string | undefined;
  userData: IUser;
  handleUserChange: (userName: string) => void;
  searchUser: () => Promise<number | undefined>;
};

type UserContextProviderProps = {
  children: ReactNode;
};

export const UserContext = createContext({} as UserContextType);

export function UserContextProvider(props: UserContextProviderProps) {
  const [user, setUser] = useState<string>("");
  const [userData, setUserData] = useState<IUser>({} as IUser);

  function handleUserChange(userName: string) {
    userName && setUser(userName);
  }

  async function searchUser() {
    try {
      const { status, data } = await api.get(user);
      setUserData(data);
      return status;
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <UserContext.Provider
      value={{ user, userData, handleUserChange, searchUser }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
