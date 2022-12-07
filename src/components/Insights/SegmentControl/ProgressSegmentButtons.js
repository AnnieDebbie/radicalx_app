import { useState } from "react";
import "./Segment.css";
import { icons } from "../../../assets";

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
            className={`segment-buttons segment-buttons-${
              idx === activeIndex ? "active" : "inactive"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <button
        className={` date-container segment-buttons segment-buttons-inactive`}
      >
        <span>Select dates</span>
        <img src={icons.calendar}/>
        <input className="date" type="date" />
      </button>
    </div>
  );
};

export default ProgressSegmentButtons;
