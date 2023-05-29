import { WelcomeForm } from "./components/WelcomeForm";
import "./styles/MemoryGameApp.scss";

export const MemoryGameApp = () => {
  return (
    <div className="memory-game__container">
      <WelcomeForm />
    </div>
  );
};
