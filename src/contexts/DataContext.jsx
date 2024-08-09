import React, { createContext, useContext, useState } from 'react';
import  initialData  from '../assets/data.json';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(initialData);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);