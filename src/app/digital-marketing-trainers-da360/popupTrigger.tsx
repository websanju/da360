"use client";

import { ReactNode } from "react";
import { usePopup } from "@components/widgets/popup/PopupContext";

interface PopupTriggerProps {
  popup: ReactNode;
  className?: string;
  children: ReactNode;
}

export default function PopupTrigger({
  popup,
  className,
  children,
}: PopupTriggerProps) {
  const { openPopup } = usePopup();

  return (
    <div
      onClick={() => openPopup(popup, { className })}
      style={{ cursor: "pointer" }}
    >
      {children}
    </div>
  );
}
