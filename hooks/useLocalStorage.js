import { useEffect, useState } from "react";

export default function useLocalStorage(storageName, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(storageName);
      return stored ? JSON.parse(stored) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    if (value === undefined) {
      localStorage.removeItem(storageName);
    } else {
      localStorage.setItem(storageName, JSON.stringify(value));
    }
  }, [storageName, value]);

  return { value, setValue };
}
