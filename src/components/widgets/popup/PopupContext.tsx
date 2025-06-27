"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import Popup from "./index";

type PopupContextType = {
  openPopup: (content: ReactNode, title?: string) => void;
  closePopup: () => void;
};

const PopupContext = createContext<PopupContextType | undefined>(undefined);

export const usePopup = (): PopupContextType => {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error("usePopup must be used within a PopupProvider");
  }
  return context;
};

export const PopupProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<ReactNode>(null);

  const openPopup = (popupContent: ReactNode, popupTitle = "") => {
    setTitle(popupTitle);
    setContent(popupContent);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    setContent(null);
    setTitle("");
  };

  return (
    <PopupContext.Provider value={{ openPopup, closePopup }}>
      {children}
      <Popup isOpen={isOpen} onClose={closePopup} title={title}>
        {content}
      </Popup>
    </PopupContext.Provider>
  );
};
