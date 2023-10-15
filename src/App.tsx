import React, { useState, useEffect } from "react";
import "./App.css";

const App: React.FC = () => {
  const maxScreenSize = window.innerHeight;
  const initialSize = 10;
  const [size, setSize] = useState(initialSize);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [level, setLevel] = useState(1);
  const growthPercentage = 20 - level * 2; // In level 1, it'll grow by 18% of maxScreenSize
  const shrinkSpeed = level * 0.5; // Higher level, faster shrink

  useEffect(() => {
    let shrinkInterval: NodeJS.Timeout;

    if (isGameStarted) {
      shrinkInterval = setInterval(() => {
        setSize((prevSize) => prevSize - shrinkSpeed);
        if (size <= 0) {
          clearInterval(shrinkInterval);
          setIsGameStarted(false);
          // handle game over logic here
        }
      }, 100); // shrink every 100ms
    }

    return () => {
      clearInterval(shrinkInterval);
    };
  }, [isGameStarted, level, size, shrinkSpeed]);

  const handleTap = () => {
    if (!isGameStarted) {
      setIsGameStarted(true);
    }
    const growth = (maxScreenSize * growthPercentage) / 100;
    setSize((prevSize) => prevSize + growth);

    if (size + growth >= maxScreenSize) {
      setIsGameStarted(false);
      setLevel((prevLevel) => prevLevel + 1);
      setSize(initialSize);
    }
  };

  return (
    <>
      <div className="container" onClick={handleTap}>
        <div
          className="circle"
          style={{ width: `${size}px`, height: `${size}px` }}
        ></div>
        {!isGameStarted && <p className="start-text">Tap to start</p>}
        {size >= maxScreenSize && (
          <p className="level-done">Level {level} Done!</p>
        )}
      </div>
    </>
  );
};

export default App;
