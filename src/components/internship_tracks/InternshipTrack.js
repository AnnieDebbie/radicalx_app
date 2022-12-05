import "./InternshipTracksTable.css";
import QualifiedCandidatesBars from "./QualifiedCandidatesBar";
import { icons } from "../../assets/index";

const InternshipTrack = ({ tableContent }) => {
  const [col1, col2, col3] = tableContent;
  return (
    <table>
      <thead>
        <tr>
          <th className="col-1">Internship Title</th>
          <th className="col-2">Completion Period</th>
          <th className="col-3">Total Enrolled</th>
          <th className="bar-col">Qualified Candidates</th>
          <th className="col-">_</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="align-cols col-1" key={col1} scope="row">
            <span className="span-bold">Product Design GVI</span>
            <span className="span-normal">
              Amet minim mollit non deserunt est sit aliqua dolor do amet sint.
            </span>
          </td>
          <td className="align-cols  col-2" key={col2}>
            <span className="span-bold">120 days</span>
            <span>(created on 10/12/2021)</span>
          </td>
          <td className="align-cols col-3" key={col3}>
            <span className="span-purple">
              20000
              </span>
          </td>
          <td className="align-cols bars-col">
            <QualifiedCandidatesBars />
          </td>
          <td className="align-cols col-5">
            <img src={icons.chart} alt="" />
            <img src={icons.more} alt="" />
            <img src={icons.profile} alt="" />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default InternshipTrack;

