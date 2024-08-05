import { useState } from "react";
import styles from "./Price.module.css";
import Image from "next/image";
type Props = {
  isSetting: boolean;
  currentModel: string;
  sendPrevious: boolean;
  sendDataToParent: (el: boolean, model: string) => void;
  continuouslyTalkToParent: (el: boolean) => void;
};

export default function Price({
  isSetting,
  currentModel,
  sendPrevious,
  sendDataToParent,
  continuouslyTalkToParent,
}: Props) {
  const [gptModel, setGptModel] = useState(currentModel);

  const settingHandler = () => {
    sendDataToParent(false, gptModel);
  };

  const ContinuouslyTalk = (event: any) => {
    continuouslyTalkToParent(event.target.checked);
  };
  return (
    <>
      {isSetting && (
        <>
          <div className={styles.backdrop} onClick={() => settingHandler()} />

          <div className={styles.settingWrapper}>
            <div className={styles.confirmButtonBox}>
              <button className={styles.confirmButton} onClick={settingHandler}>
                <Image
                  width={23}
                  height={23}
                  alt="close"
                  src="/images/close.svg"
                />
              </button>
            </div>
            <div className={styles.radios}>
              <input
                id="gpt-4o-mini"
                type="radio"
                name="model"
                value="gpt-4o-mini"
                checked={gptModel === "gpt-4o-mini"}
                onChange={(e) => setGptModel(e.target.value)}
              />
              <label htmlFor="gpt-4o-mini">GPT-4o-mini(Default)</label>
            </div>
            <div className={styles.radios}>
              <input
                id="gpt-3.5-turbo"
                type="radio"
                name="model"
                value="gpt-3.5-turbo"
                checked={gptModel === "gpt-3.5-turbo"}
                onChange={(e) => setGptModel(e.target.value)}
              />
              <label htmlFor="gpt-3.5-turbo">GPT-3.5-Turbo</label>
            </div>

            <div className={styles.radios}>
              <input
                id="gpt-4o"
                type="radio"
                name="model"
                value="gpt-4o"
                checked={gptModel === "gpt-4o"}
                onChange={(e) => setGptModel(e.target.value)}
              />
              <label htmlFor="gpt-4o">GPT-4o</label>
            </div>
            <div className={styles.radios}>
              <input
                id="gpt-3.5-turbo-1106"
                type="radio"
                name="model"
                value="gpt-3.5-turbo-1106"
                checked={gptModel === "gpt-3.5-turbo-1106"}
                onChange={(e) => setGptModel(e.target.value)}
              />
              <label htmlFor="gpt-3.5-turbo-1106">GPT-3.5-Turbo-1106</label>
            </div>
            <div className={styles.radios}>
              <input
                id="gpt-4-turbo"
                type="radio"
                name="model"
                value="gpt-4-turbo"
                checked={gptModel === "gpt-4-turbo"}
                onChange={(e) => setGptModel(e.target.value)}
              />
              <label htmlFor="gpt-4-turbo">GPT-4-Turbo</label>
            </div>

            <div className={styles.sendPrevious}>
              <input
                type="checkbox"
                id="sendPrevious"
                name="sendPrevious"
                checked={sendPrevious}
                onChange={ContinuouslyTalk}
              />
              <label htmlFor="sendPrevious"> Continuously Talk</label>
            </div>
            <div className={styles.warning}>
              <span>Continuously Talk:</span> Send the most recent conversation
              with the current prompt. It will start from next prompt (not the
              current one)if you checked it.
            </div>

            <table className={styles.tableText}>
              <thead>
                <tr>
                  <th>Model</th>
                  <th>Input</th>
                  <th>Output</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>GPT-4o-mini</td>
                  <td>US$0.000150  1K tokens</td>
                  <td>US$0.000600/ 1K tokens</td>
                </tr>
                <tr>
                  <td>GPT-3.5-Turbo</td>
                  <td>US$0.000150 1K tokens</td>
                  <td>US$0.000600 / 1K tokens</td>
                </tr>
                <tr>
                  <td>GPT-3.5-Turbo</td>
                  <td>US$0.0005 / 1K tokens</td>
                  <td>US$0.0015 / 1K tokens</td>
                </tr>
                <tr>
                  <td>GPT-4o</td>
                  <td>US$0.005 / 1K tokens</td>
                  <td>US$0.015 / 1K tokens</td>
                </tr>
                <tr>
                  <td>GPT-4-Turbo</td>
                  <td>US$0.0100 / 1K tokens</td>
                  <td>US$0.0300 / 1K tokens</td>
                </tr>
                {/* <tr>
            <td>GPT-4-32k</td>
            <td>$0.06 / 1K tokens</td>
            <td>$0.12 / 1K tokens</td>
          </tr> */}
              </tbody>
            </table>

            <div className={styles.warning}>
              <span>Tokens:</span>
              For English text, 1 token is approximately 4 characters or 0.75
              words.
            </div>
          </div>
        </>
      )}
    </>
  );
}
