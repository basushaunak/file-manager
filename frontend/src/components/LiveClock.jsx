import { useState, useEffect } from "react";
import "./LiveClock.css";

function LiveClock() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const dateOptions = {
    day: "2-digit", // Forces "06" instead of "6"
    month: "short", // Forces "06" instead of "6"
    year: "numeric", // Shows full year (e.g., "2026")
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <p className="date-time">
      {currentTime.toLocaleTimeString("en-IN", dateOptions)}
    </p>
  );
}

export default LiveClock;
