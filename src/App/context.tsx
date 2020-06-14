import React, { createContext } from "react";

const contextDefaults: ProviderValues = {
  data: null,
  setData: () => null,
  searchData: null,
  setSearchData: () => null,
  isFahrenheit: true,
  toggleIsFahrenheit: () => true,
};
export const AppContext = createContext(contextDefaults);

export const AppProvider = ({ children, providerValues }) => {
  return (
    <AppContext.Provider value={providerValues}>{children}</AppContext.Provider>
  );
};
