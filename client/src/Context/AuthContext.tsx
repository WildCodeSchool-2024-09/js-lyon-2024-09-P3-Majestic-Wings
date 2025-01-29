import { createContext, useState } from "react";

const AuthContext = createContext<LogginProps>({ setAuth: () => {} });

interface userProps {
  id: number;
  firstname: string;
  lastname: string;
  age: number;
  mail: string;
  phone_number: number;
  hashed_password: string;
  token: string;
}

interface LogginProps {
  auth?: userProps;
  setAuth: React.Dispatch<React.SetStateAction<undefined>>;
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [auth, setAuth] = useState();
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
