import { useState } from "react";
import "./Segment.css";

const ProgressSegmentButtons = (props) => {
  const defaultIdx = 0;
  const [activeIndex, setActiveIndex] = useState(defaultIdx);
  const segments = ["this week", "this month", "select dates"];
  const onSegmentClick = (idx) => {
    setActiveIndex(idx);
    console.log(idx);
  };
  return (
    <div>
      {segments.map((item, idx) => (
        <button
          key={idx}
          onClick={() => onSegmentClick(idx)}
          className={idx === activeIndex ? "active" : "inactive"}
        >
          {" "}
          {item}{" "}
        </button>
      ))}
    </div>
  );
};

export default ProgressSegmentButtons;
