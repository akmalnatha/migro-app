import React, { ReactNode, createContext, useState } from 'react';

export type SearchTypeContext = {
    searchQuery: string;
    setSearchQuery: (seach: string) => void;
    clear: () => void;
  };
  
  const defaultValue = {
    searchQuery: "",
    setSearchQuery: () => null,
    clear: () => {}
  };

export const SearchContext = createContext<SearchTypeContext>(defaultValue);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const clear = () => {
    setSearchQuery("")
  };

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery, clear }}>
      {children}
    </SearchContext.Provider>
  );
};
