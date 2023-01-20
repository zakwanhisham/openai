import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [promptInput, setPromptInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event: any) {
    event.preventDefault();
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: promptInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(data.result);
      setPromptInput("");
    } catch (error: any) {
      console.error(error);
      alert(error.message);
    }
  }
  return (
    <div>
      <Head>
        <title>Chat Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <img src="giphy.gif" className={styles.icon} />
        <h3>Come chat with me</h3>
        <h4>This is a OpenAI chat bot, come chat with me</h4>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="prompt"
            placeholder="Put your chat here"
            value={promptInput}
            onChange={(e) => setPromptInput(e.target.value)}
          />
          <input type="submit" value="Chat" />
        </form>
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  )
}
