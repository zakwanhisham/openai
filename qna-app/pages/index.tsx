import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [textPromptInput, setTextPromptInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event: any) {
    event.preventDefault();
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ textPrompt: textPromptInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(data.result);
      setTextPromptInput("");
    } catch (error: any) {
      console.error(error);
      alert(error.message);
    }
  }
  return (
    <div>
      <Head>
        <title>Q&A Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <img src="/favicon.ico" className={styles.icon} />
        <h3>Ask me anything</h3>
        <h4>This is a Q&A chat bot, you can ask me anything that is factual</h4>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="textPrompt"
            placeholder="Ask me your question"
            value={textPromptInput}
            onChange={(e) => setTextPromptInput(e.target.value)}
          />
          <input type="submit" value="Generate answer" />
        </form>
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  )
}
