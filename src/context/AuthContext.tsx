import { createContext, ReactNode, useEffect, useState } from "react";
import { auth, firebase } from "../services/firebase";

type User = {
  id: string;
  name: string;
  avatar: string;
};

type AuthContextType = {
  user: User | undefined;
  setUser: (user: User | undefined) => void;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProviderProps) {
  const [user, setUser] = useState<User | undefined>();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, photoURL, uid } = user;
        if (!displayName || !photoURL) {
          throw new Error("Missing Information from google Account");
        }
        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
        });
      } else {
        const uid = localStorage.getItem("id");
        const displayName = localStorage.getItem("name");
        const photoURL = localStorage.getItem("avatar");
        if (uid && displayName && photoURL) {
          setUser({
            id: uid,
            name: displayName,
            avatar: photoURL,
          });
        } else {
          setUser(undefined);
        }
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await auth.signInWithPopup(provider);

    if (result.user) {
      const { displayName, photoURL, uid } = result.user;

      if (!displayName || !photoURL) {
        throw new Error("Missing Information from google Account");
      }
      localStorage.setItem("id", uid);
      localStorage.setItem("name", displayName);
      localStorage.setItem("avatar", photoURL);
      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
      });
    }
  }

  async function signOut() {
    if (user) {
      localStorage.removeItem("id");
      localStorage.removeItem("name");
      localStorage.removeItem("avatar");
      setUser(undefined);
    }
  }

  return (
    <AuthContext.Provider value={{ user, setUser, signInWithGoogle, signOut }}>
      {props.children}
    </AuthContext.Provider>
  );
}
