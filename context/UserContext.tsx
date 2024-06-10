import { supabase } from "@/lib/supabase";
import User from "@/lib/users";
import { Session } from "@supabase/supabase-js";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export type UserTypeContext = {
  session: Session | null;
  name: string;
  username: string;
  email: string;
  phone: string | null;
  avatar: string | null;
  setCurrentUser: (email: string, name: string, username: string, phone: string, avatar: string) => void;
  clear: () => void;
};

const defaultValue = {
  session: null,
  name: "",
  username: "",
  email: "",
  phone: "",
  avatar: "",
  setCurrentUser: () => null,
  clear: () => {},
};

export const userContext = createContext<UserTypeContext>(defaultValue);

const userProvider = ({ children }: { children: ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string | null>("");
  const [avatar, setAvatar] = useState<string | null>("");
  const setCurrentUser = (email: string, name: string, username: string, phone: string, avatar: string) => {
    setEmail(email);
    setName(name);
    setUsername(username);
    setPhone(phone);
    setAvatar(avatar);
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  const clear = () => {
    setEmail("");
    setName("");
    setUsername("");
    setPhone("");
    setAvatar("");
  };

  return (
    <userContext.Provider
      value={{
        session,
        name,
        username,
        email,
        phone,
        avatar,
        setCurrentUser,
        clear,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export default userProvider;

export const useUser = () => useContext(userContext);
