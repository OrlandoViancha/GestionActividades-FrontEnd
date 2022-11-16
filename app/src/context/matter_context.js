import { createContext, useEffect, useState } from "react";

export const MatterContext = createContext();

export const MatterProvider = ({ children }) => {
  const [matter, setMatter] = useState(() => {
    const getMatter = localStorage.getItem("matter");
    return (getMatter) ? JSON.parse(getMatter) : [];
  });
    useEffect(() => {
        localStorage.setItem("matter", JSON.stringify(matter));
  }, [matter]);
  return (
    <MatterContext.Provider
      value={{
        matter,
        setMatter,
      }}
    >
      {children}
    </MatterContext.Provider>
  );
};
