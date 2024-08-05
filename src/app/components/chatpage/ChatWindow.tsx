"use client";
import { useRef, useState, useEffect } from "react";
import styles from "./ChatWindow.module.css";
import User from "./User";
import Assistant from "./Assistant";
import Image from "next/image";
import Price from "./Price";
type Props = {};

export default function ChatWindow({}: Props) {
  const [generatedText, setGeneratedText] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [gptModel, setGptModel] = useState("gpt-4o-mini");
  const [prompt, setPrompt] = useState("");
  const [isSetting, setIsSetting] = useState(false);

  const [sendPrevious, setSendPrevious] = useState(true);

  useEffect(() => {
    if (message !== "" || generatedText !== "") {
      if (sendPrevious) {
        setMyPrompt(() => [
          {
            role: Role.User,
            content: message,
          },
          {
            role: Role.Assistant,
            content: generatedText,
          },
        ]);
      } else {
        setMyPrompt(() => []);
      }
    }
  }, [message, generatedText]);

  interface Message {
    user: typeof message;
    assistant: typeof generatedText;
  }
  enum Role {
    User = "user",
    Assistant = "assistant",
  }
  interface messageType {
    role: Role;
    content: string;
  }

  const [myPrompt, setMyPrompt] = useState<messageType[]>([]);

  const [conversation, setConversation] = useState<Message[]>([]);

  const submitIcon =
    prompt === "" ? "/images/submit_grey.svg" : "/images/submit.svg";
  const chatContentRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to the bottom of the chat content container
    if (chatContentRef.current) {
      chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
    }
  }, [generatedText, message]);

  const sendHandler = async () => {
    if (prompt === "") return;

    // Add the message to the conversation
    if (message !== "" || generatedText !== "") {
      setConversation((prev) => [
        ...prev,
        {
          user: message,
          assistant: generatedText,
        },
      ]);
    }

    setMessage(prompt);
    setPrompt("");
    setGeneratedText("");
    setLoading(true);

    myPrompt.push({
      role: Role.User,
      content: prompt,
    });
    console.log(myPrompt);
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: myPrompt,
        model: gptModel,
      }),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    // This data is a ReadableStream
    const data = response.body;
    console.log(data);
    if (!data) {
      return;
    }
    // Read the data from the ReadableStream, data.getReader() is a ReadableStreamDefaultReader
    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;
    while (!done) {
      //reader.read() returns a promise with an object containing the value and a done boolean { value: theChunk, done: false }.
      const { value, done: doneReading } = await reader.read();
      done = doneReading;

      const chunkValue = decoder.decode(value);
      setGeneratedText((prev) => prev + chunkValue);
    }

    setLoading(false);
  };
  const settingHandler = (el: boolean, model: string) => {
    setIsSetting(el);
    setGptModel(model);
  };

  const sendPreviousHandler = (el: boolean) => {
    setSendPrevious(el);
  };

  return (
    <div className={styles.container}>
      <Price
        isSetting={isSetting}
        currentModel={gptModel}
        sendPrevious={sendPrevious}
        sendDataToParent={(el, model) => settingHandler(el, model)}
        continuouslyTalkToParent={sendPreviousHandler}
      />

      <>
        <div className={styles.model}>
          <div> Model: {gptModel}</div>
          <div>{sendPrevious && "Continuously Talk"}</div>
        </div>

        <div ref={chatContentRef} className={styles.chatContent}>
          {!message ? (
            <div className={styles.startBox}>
              <h1 className={styles.title}>ChatBot</h1>
              <p>
                Ask me something, I will enlighten your mind with knowledge.
              </p>
              <p></p>
            </div>
          ) : (
            <>
              {conversation &&
                conversation.map((item, index) => (
                  <>
                    {item.user && (
                      <User message={item.user} key={index + "user"} />
                    )}
                    {item.assistant && (
                      <Assistant
                        generatedText={item.assistant}
                        key={index + "assistant"}
                      />
                    )}
                  </>
                ))}

              <User message={message} />
              {generatedText && <Assistant generatedText={generatedText} />}
            </>
          )}

          {loading && (
            <div className={styles.loading}>
              <div className={styles.loader}></div>
              <div>Loading...</div>
            </div>
          )}
        </div>
        <div className={styles.inputButtonBox}>
          <textarea
            disabled={loading}
            className={styles.chatInput}
            rows={4}
            placeholder="Type your message here"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                sendHandler();
              }
            }}
          />
          <div className={styles.buttonBox}>
            <button
              className={styles.chatButton}
              onClick={() => setIsSetting(true)}
            >
              <Image
                width={25}
                height={25}
                src={`/images/setting.svg`}
                alt="setting"
              />
            </button>

            <button className={styles.chatButton} onClick={sendHandler}>
              <Image width={25} height={25} src={submitIcon} alt="submit" />
            </button>
          </div>
        </div>
      </>
    </div>
  );
}
