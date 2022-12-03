import { useState } from "react";
import "./Segment.css";

const ProgressSegmentButtons = (props) => {
  const defaultIdx = 0;
  const segments = ["this week", "this month"];
  const [activeIndex, setActiveIndex] = useState(defaultIdx);
  // const [selectedContent, setSelectedContent]=useState()

  const onSegmentClick = (idx) => {
    setActiveIndex(idx);
    console.log(idx);
  };
  return (
    <div className="segment-container">
      <div>
        {segments.map((item, idx) => (
          <button
            key={idx}
            onClick={() => onSegmentClick(idx)}
            className={`segment-buttons ${
              idx === activeIndex ? "active" : "inactive"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

        <button className="date-container">
          <span>Select dates</span>
          <input className="date" type="date" />
        </button>
    </div>
  );
};

export default ProgressSegmentButtons;
