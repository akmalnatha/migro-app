import { ReactNode, createContext, useContext, useState } from "react";

export type CategoryTypeContext = {
  category: string;
  setCategoryPreference: (category: string) => void;
//   preferences: string[];
//   count_people: string;
//   start_date: Date;
//   end_date: Date;
//   budget: string;
//   photo_url: string;
//   country: string;
//   name: string;
//   setDestination: React.Dispatch<React.SetStateAction<string>>;
//   setPreferences: React.Dispatch<React.SetStateAction<string[]>>;
//   setCountPeople: React.Dispatch<React.SetStateAction<string>>;
//   setBudget: React.Dispatch<React.SetStateAction<string>>;
//   setStartDate: React.Dispatch<React.SetStateAction<Date>>;
//   setEndDate: React.Dispatch<React.SetStateAction<Date>>;
//   setPhotoUrl: React.Dispatch<React.SetStateAction<string>>;
//   setCountry: React.Dispatch<React.SetStateAction<string>>;
//   setName: React.Dispatch<React.SetStateAction<string>>;
  clear: () => void;
};

const defaultValue = {
  category: "",
  setCategoryPreference: () => null,
//   preferences: [],
//   count_people: "",
//   start_date: new Date(),
//   end_date: new Date(),
//   budget: "",
//   photo_url: "",
//   country: "",
//   name: "",
//   setDestination: () => {},
//   setPreferences: () => {},
//   setCountPeople: () => {},
//   setBudget: () => {},
//   setStartDate: () => {},
//   setEndDate: () => {},
//   setPhotoUrl: () => {},
//   setCountry: () => {},
//   setName: () => {},
  clear: () => {}
};

export const CategoryContext =
  createContext<CategoryTypeContext>(defaultValue);

const CategoryProvider = ({ children }: { children: ReactNode }) => {
  const [category, setCategory] = useState<string>("");
  const setCategoryPreference = (item: string) => {
    setCategory(item)
  }
//   const [destination, setDestination] = useState<string>("");
//   const [count_people, setCountPeople] = useState<string>("");
//   const [budget, setBudget] = useState<string>("");
//   const [start_date, setStartDate] = useState<Date>(new Date());
//   const [end_date, setEndDate] = useState<Date>(new Date());
//   const [photo_url, setPhotoUrl] = useState<string>("");
//   const [country, setCountry] = useState<string>("");
//   const [name, setName] = useState<string>("");

  const clear = () => {
    setCategory("")
    // setPreferences([]);
    // setDestination("");
    // setCountPeople("");
    // setBudget("");
    // setPhotoUrl("");
    // setCountry("");
    // setName("");
    // setStartDate(new Date());
    // setEndDate(new Date());
  };

  return (
    <CategoryContext.Provider
      value={{
        category,
        setCategoryPreference,
        clear,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;

export const useCategory = () => useContext(CategoryContext);