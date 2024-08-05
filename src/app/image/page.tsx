import React from "react";
import ImagePage from "../components/imagepage/ImagePage";
import Password from "../components/imagepage/Password";
type Props = {};

export default function page({}: Props) {
  let password = process.env.chat_password;

  return (
    <div>
      <Password password={password as string} />
    </div>
  );
}
