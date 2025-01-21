import { AuthContext } from "@/context";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
  User,
} from "firebase/auth";
import { type PropsWithChildren, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { auth } from "@/firebase.config";
import { router } from "expo-router";

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);
  const [status, setStatus] = useState<"loading" | "error" | "success">(
    "loading"
  );
  const [error, setError] = useState<string | null>(null);

  // Sign up with email and password
  const createUserEmailPass = async (
    email: string,
    password: string,
    name: string
  ): Promise<void> => {
    setStatus("loading");
    setError(null);
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Update user profile with display name
      await updateProfile(user, { displayName: name });

      setUser(user);
      setStatus("success");
    } catch (err: any) {
      setStatus("error");
      setError(err.message || "An error occurred during signup.");
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
      setStatus("success");
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
      setStatus("success");
      router.push("/on-boarding");
    } catch (err: any) {
      setStatus("error");
      setError(err.message || "An error occurred during logout.");
      console.error("Error logging out", err);
    }
  };

  // Track user state changes for persistence
  useEffect(() => {
    setStatus("loading");
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setStatus("success");
    });

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
