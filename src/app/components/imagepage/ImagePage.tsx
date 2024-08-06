"use client";
import styles from "./ImagePage.module.css";
import { useState, useRef } from "react";
import axios from "axios";
export interface IAppProps {}

export default function ImagePage(props: IAppProps) {
  const [token, setToken] = useState("");
  const [prompt, setPrompt] = useState("");
  const [number, setNumber] = useState(1);
  const [model, setModel] = useState("dall-e-2");
  const [results, setResults] = useState([]);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const [isValid, setIsValid] = useState(false);

  type ResultType = {
    url?: string;
    // other properties
  };


  async function getImages() {
    if (prompt != "") {
      setError(false);
      setLoading(true);
      setResult("");

      const url = "/api/images";

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: prompt,
          model: model,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = response.body;
      if (!data) {
        return;
      }

      console.log(data);

      const reader = data.getReader();
      const decoder = new TextDecoder();
      let resultData = "";

      while (true) {
        const { value, done: doneReading } = await reader.read();

        if (doneReading) {
          break;
        }

        const chunkValue = decoder.decode(value);
        resultData += chunkValue;
      }

      // Assuming setResult is a state updater from React useState
      setResult(resultData);

      setLoading(false);
      console.log(resultData);
    }
  }

  // async function getImages() {
  //   let time1;
  //   let time2;
  //   if (prompt != "") {
  //     setError(false);
  //     setLoading(true);
  //     setResult("");
  //     time1 = new Date().getTime();
  //     const response = await fetch("/api/images", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         prompt: prompt,
  //         model: model,
  //       }),
  //     });

  //     // const url = "/api/images";

  //     // const response = await fetch(url, {
  //     //   method: "POST",
  //     //   headers: {
  //     //     "Content-Type": "application/json",
  //     //   },
  //     //   body: JSON.stringify({
  //     //     prompt: prompt,
  //     //     model: model,
  //     //   }),
  //     // });

  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }

  //     const data = response.body;
  //     if (!data) {
  //       return;
  //     }

  //     console.log(data);

  //     const reader = data.getReader();
  //     const decoder = new TextDecoder();
  //     let resultData = "";

  //     while (true) {
  //       const { value, done: doneReading } = await reader.read();

  //       if (doneReading) {
  //         break;
  //       }

  //       const chunkValue = decoder.decode(value);
  //       resultData += chunkValue;
  //     }

  //     // Assuming setResult is a state updater from React useState
  //     setResult(resultData);

  //     time2 = new Date().getTime();

  //     console.log(time2 - time1);

  //     setLoading(false);
  //     console.log(resultData);
  //   }
  // }



  return (
    <>
      <div className={styles.container}>
        <title>Create Images With DALL-E App</title>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Create images with
            <span className={styles.titleColor}> DALL-E</span>
          </h1>
          <p className={styles.description}>
            {/* <input
              className={styles.input}
              id="token"
              type="text"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              placeholder="Bearer Token (sk-...)"
            /> */}

            <select
              className={styles.select}
              defaultValue={model}
              onChange={(e) => setModel(e.target.value)}
            >
              <option value="dall-e-2">DALL-E-2</option>
              <option value="dall-e-3">DALL-E-3</option>
            </select>
            <input
              className={styles.input}
              id="prompt"
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Prompt"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  getImages();
                }
              }}
            />
            {/* <input
                className={styles.input}
                id="number"
                type="number"
                value={number}
                onChange={(e) => setNumber(Number(e.target.value))}
                placeholder="Number of images"
                max="10"
              /> */}

            {loading ? (
              <button className={styles.button}>Loading</button>
            ) : (
              <button className={styles.button} onClick={getImages}>
                Get Images
              </button>
            )}
          </p>
          {/* <small>
              Download as:{" "}
              <select
                id="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="webp">Webp</option>
                <option value="png">Png</option>
                <option value="jpg">Jpg</option>
                <option value="gif">Gif</option>
                <option value="avif">Avif</option>
              </select>{" "}
              Click the image below and save.
            </small> */}
          <br />
          {error ? (
            <div className={styles.error}>Something went wrong. Try again.</div>
          ) : (
            <></>
          )}
          {loading && (
            <p className={styles.loadingText}>
              <span className={styles.loadingAnimation}>
                <span>Loading</span>
              </span>
            </p>
          )}
          <div className={styles.grid}>
            <div className={styles.card}>
              <img
                className={styles.imgPreview}
                src={result}
                // onClick={() => download(result ?? "")}
                onClick={() => {
                  if (result) {
                    window.open(result, "_blank");
                  }
                }}
              />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
