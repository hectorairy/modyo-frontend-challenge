import { useEffect, useState } from "react";
import { WelcomeForm } from "./components/WelcomeForm";
import { MemoryGrid } from "./components/MemoryGrid";

import "./styles/MemoryGameApp.scss";

export const MemoryGameApp = () => {
  const [username, setUsername] = useState("");
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("username");
    if (user) {
      setUsername(user);
      setIsUser(true);
    }
  }, []);

  return (
    <div className="memory-game__container">
      {!isUser ? (
        <WelcomeForm
          setUser={setIsUser}
          username={username}
          setUsername={setUsername}
        />
      ) : (
        <MemoryGrid username={username} />
      )}
    </div>
  );
};
