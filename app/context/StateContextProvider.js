"use client";
import { useState, createContext, useContext, useEffect } from "react";

const context = createContext();

export const StateContext = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [detailimages, setDetailImages] = useState([]);

  const handleImages = () => {
    setIsOpen(!isOpen);
  };

  return (
    <context.Provider
      value={{
        isOpen,
        setIsOpen,
        detailimages,
        setDetailImages,
      }}
    >
      {children}
    </context.Provider>
  );
};

export const useStateContext = () => useContext(context);
