import "./InternshipTracksTable.css";
import { icons } from "../../assets/index";

const TracksTableHeader = () => {
  return (
    <thead className="table-head">
      <tr className="table-head-row">
        <th className="table-header align-cols col-1">
          <div className="table-header-div">
            <span>Internship Title</span>
            <img src={icons.arrowDown} alt="" />
          </div>
        </th>
        <th className="table-header align-cols col-2">
          <div className="table-header-div">
            <span>Completion Period</span>
            <img src={icons.arrowDown} alt="" />
          </div>
        </th>
        <th className="table-header align-cols col-3">
          <div className="table-header-div">
            <span>Total Enrolled</span>
            <img src={icons.arrowDown} alt="" />
          </div>
        </th>
        <th className="table-header align-cols bar-col">
          <div className="table-header-div">
            <span>Qualified Candidates</span>
            <img src={icons.arrowDown} alt="" />
          </div>
        </th>
        <th className="table-header align-cols col-5"></th>
      </tr>
    </thead>
  );
};

export default TracksTableHeader;
