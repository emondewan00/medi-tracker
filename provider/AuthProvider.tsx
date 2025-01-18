import {
  createContext,
  useContext,
  useState,
  type PropsWithChildren,
} from "react";
import { auth } from "@/firebase.config";
import { createUserWithEmailAndPassword, User } from "firebase/auth";
import { AuthContext } from "@/context";

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const createUserEmailPass = async (
    email: string,
    password: string
  ): Promise<void> => {
    setStatus("loading");
    setError(null);
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(user);
      setStatus("idle");
    } catch (err: any) {
      setStatus("error");
      setError(err.message || "An error occurred");
      console.error("Error creating user", err);
    }
  };
console.log(user,"user from auth provider")
  return (
    <AuthContext.Provider value={{ user, status, error, createUserEmailPass }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
