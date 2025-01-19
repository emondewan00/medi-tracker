import { AuthContext } from "@/context";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  User,
} from "firebase/auth";
import { type PropsWithChildren, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { auth } from "@/firebase.config";

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  // Sign up with email and password
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

      // await AsyncStorage.setItem("user", "");
      setUser(user);
      setStatus("idle");
    } catch (err: any) {
      setStatus("error");
      setError(err.message || "An error occurred during sign-up.");
      console.error("Error creating user", err);
    }
  };

  // Login with email and password
  const loginUserEmailPass = async (
    email: string,
    password: string
  ): Promise<void> => {
    setStatus("loading");
    setError(null);
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      setUser(user);
      setStatus("idle");
    } catch (err: any) {
      setStatus("error");
      setError(err.message || "An error occurred during login.");
      console.error("Error logging in user", err);
    }
  };

  // Logout the user
  const logout = async (): Promise<void> => {
    setStatus("loading");
    try {
      await auth.signOut();
      setUser(null);
      setStatus("idle");
    } catch (err: any) {
      setStatus("error");
      setError(err.message || "An error occurred during logout.");
      console.error("Error logging out", err);
    }
  };

  // Track user state changes for persistence
  useEffect(() => {
    setStatus("loading");
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      try {
        if (currentUser) {
          // Store current user in AsyncStorage
          await AsyncStorage.setItem("user", JSON.stringify(currentUser));
          setUser(currentUser);
        } else {
          // Retrieve user from AsyncStorage if logged out
          const user = await AsyncStorage.getItem("user");
          if (user) {
            setUser(JSON.parse(user));
          } else {
            setUser(null);
          }
        }
      } catch (error) {
        console.error("Error handling auth state change:", error);
      }
    });

    setStatus("idle");
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        status,
        error,
        createUserEmailPass,
        loginUserEmailPass,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
