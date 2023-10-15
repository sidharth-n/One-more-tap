import React, { useState, useEffect } from "react";
import "./App.css";

const App: React.FC = () => {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const [size, setSize] = useState({ width: 50, height: 50 });
  const [borderRadius, setBorderRadius] = useState(50);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [level, setLevel] = useState(1);
  const growthPercentage = 20 - level * 2;
  const [shrinkSpeed, setShrinkSpeed] = useState(0.5);

  useEffect(() => {
    let shrinkInterval: NodeJS.Timeout;

    if (isGameStarted) {
      shrinkInterval = setInterval(() => {
        setSize((prevSize) => ({
          ...prevSize,
          width: prevSize.width - shrinkSpeed,
          height: prevSize.height - shrinkSpeed,
        }));
        if (size.width <= 0 || size.height <= 0) {
          clearInterval(shrinkInterval);
          setIsGameStarted(false);
        }
      }, 100);
    }

    return () => {
      clearInterval(shrinkInterval);
    };
  }, [isGameStarted, level, size, shrinkSpeed]);

  const handleTap = () => {
    if (!isGameStarted) {
      setIsGameStarted(true);
    }
    const growth = (screenWidth * growthPercentage) / 100;

    if (size.width + growth < screenWidth) {
      setSize((prevSize) => ({
        width: prevSize.width + growth,
        height: prevSize.height + growth,
      }));
    } else {
      setSize((prevSize) => ({
        width: screenWidth,
        height: prevSize.height + growth,
      }));
      setBorderRadius((prevRadius) => Math.max(0, prevRadius - 5));
    }

    if (size.height + growth >= screenHeight && borderRadius === 0) {
      setIsGameStarted(false);
    }
  };

  const handleNextLevel = () => {
    setLevel((prevLevel) => prevLevel + 1);
    setSize({ width: 50, height: 50 });
    setBorderRadius(50);
    setShrinkSpeed((prevSpeed) => prevSpeed + 0.5); // increase shrink speed for next level
  };

  return (
    <>
      <div className="container" onClick={handleTap}>
        <p className="level-display">Level: {level}</p>
        <div
          className="circle"
          style={{
            width: `${size.width}px`,
            height: `${size.height}px`,
            borderRadius: `${borderRadius}%`,
          }}
        ></div>
        {!isGameStarted && size.width < screenWidth && (
          <p className="start-text">Tap to start</p>
        )}
        {size.height >= screenHeight && borderRadius === 0 && (
          <>
            <p className="level-done">Level {level} Completed!</p>
            <button className="next-level" onClick={handleNextLevel}>
              Start Level {level + 1}
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default App;
