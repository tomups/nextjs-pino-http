"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [time, setTime] = useState(null);

  const updateTime = () => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => setTime(data.message));
  };

  useEffect(() => {
    updateTime();
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <button className={styles.button} onClick={() => updateTime()}>
          What time is it on the server?
        </button>
        <h1>{time}</h1>
        <Link href="/anotherpage">Check another page</Link>
      </div>
    </main>
  );
}
