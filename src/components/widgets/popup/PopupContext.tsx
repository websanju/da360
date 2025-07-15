"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import Popup from "./index";

// Define optional popup options
type PopupOptions = {
  title?: string;
  className?: string;
  width?: string;
};

type PopupContextType = {
  openPopup: (content: ReactNode, options?: PopupOptions) => void;
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
  const [title, setTitle] = useState<string | undefined>();
  const [className, setClassName] = useState<string | undefined>();
  const [width, setWidth] = useState<string | undefined>();
  const [content, setContent] = useState<ReactNode>(null);

  const openPopup = (popupContent: ReactNode, options?: PopupOptions) => {
    setTitle(options?.title);
    setClassName(options?.className);
    setWidth(options?.width);
    setContent(popupContent);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    setContent(null);
    setTitle(undefined);
    setClassName(undefined);
    setWidth(undefined);
  };

  return (
    <PopupContext.Provider value={{ openPopup, closePopup }}>
      {children}
      <Popup
        isOpen={isOpen}
        onClose={closePopup}
        title={title}
        className={className}
        width={width}
      >
        {content}
      </Popup>
    </PopupContext.Provider>
  );
};
