"use client";
import { useRef, useState } from "react";
import ChatWindow from "./ChatWindow";
import styles from "./Password.module.css";
type Props = {
  password: string;

};

export default function Password({password}: Props) {
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const [isValid, setIsValid] = useState(false);

  const checkPassword = () => {
    const passwordHandler = () => {
      if (passwordRef.current === null) return;
      if (passwordRef.current?.value === password) {
        setIsValid(true);
      } else {
        alert("Incorrect password");
      }
    };
    return (
      <div className={styles.passwordWrapper}>
        <input
          className={styles.passwordInput}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              passwordHandler();
            }
          }}
          ref={passwordRef}
          type="password"
          placeholder="Enter password"
        />
        <button className={styles.passButton} onClick={passwordHandler}>
          Submit
        </button>
      </div>
    );
  };

  return (
    <div>
      {isValid ? (
        <ChatWindow />
      ) : (
        checkPassword()
      )}
    </div>
  );
}
