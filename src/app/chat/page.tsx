import styles from "./page.module.css";
import Password from "../components/chatpage/Password";
export default function Chat() {
  let password = process.env.chat_password;

  return (
    <div>
      <Password password= {password as string} />
    </div>
  );
}
