"use client";
import { useEffect } from "react";

const useBodyScrollLock = (isLocked) => {
  useEffect(() => {
    const element = document.body;
    if (isLocked) {
      element.style.overflow = "hidden"; // Lock scroll
    } else {
      element.style.overflow = "unset"; // Unlock scroll
    }
  }, [isLocked]);
};

export default useBodyScrollLock;
