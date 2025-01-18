import { User } from "firebase/auth";
import { createContext } from "react";

export type AuthContextType = {
  user: User | null;
  status: "idle" | "loading" | "error";
  error: string | null;
  createUserEmailPass: (email: string, password: string) => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export { AuthContext };
