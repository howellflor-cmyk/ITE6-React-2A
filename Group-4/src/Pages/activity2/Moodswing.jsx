import { useState, useEffect } from "react";
import "./Moodswing.css";

const MoodApp = () => {
  const [mood, setMood] = useState("");

  useEffect(() => {
    if (mood === "happy") {
      document.body.className = "happy-bg";
    } else if (mood === "sad") {
      document.body.className = "sad-bg";
    } else {
      document.body.className = "default-bg";
    }
    
  }, [mood]);

  return (
    <div className="container">
      <h2>Select your mood:</h2>

      <div className="buttons">
        <button onClick={() => setMood("happy")}>Happy</button>
        <button onClick={() => setMood("sad")}>Sad</button>
      </div>

      <div className="message">
        {mood === "happy" ? (
          <p>You're feeling great!</p>
        ) : mood === "sad" ? (
          <p>Cheer up!</p>
        ) : (
          <p>Choose a mood</p>
        )}
      </div>
    </div>
  );
}

export default MoodApp;