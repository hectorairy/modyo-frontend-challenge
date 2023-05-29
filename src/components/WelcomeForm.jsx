import { useState } from "react";
import "../styles/components/WelcomeForm.scss";

export const WelcomeForm = () => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = () => {
    setError(false);
    if (!username) {
      setError(true);
      return false;
    }
    localStorage.setItem("username", username);
  };
  return (
    <div className="welcome-form__container">
      <h2 className="welcome-form__title">¡Bienvenido a MemoryGame!</h2>
      <p className="welcome-form__subtitle">
        Nos encanta tenerte aquí, por favor dinos tu nombre para poder
        conocernos mejor. 😁
      </p>

      <input
        className="welcome-form__input"
        type="text"
        placeholder="Ej. Hector Jimenez"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />

      {error && (
        <p className="welcome-form__error">
          Debes decirnos tu nombre antes de continuar 😢
        </p>
      )}

      <button className="welcome-form__button" onClick={handleSubmit}>
        ¡Empecemos a jugar!
      </button>
    </div>
  );
};
