"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "savedInternships";

export default function useSavedCount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    function updateCount() {
      const saved = localStorage.getItem(STORAGE_KEY);

      if (!saved) {
        setCount(0);
        return;
      }

      setCount(JSON.parse(saved).length);
    }

    updateCount();

    window.addEventListener("storage", updateCount);

    return () => {
      window.removeEventListener("storage", updateCount);
    };
  }, []);

  return count;
}