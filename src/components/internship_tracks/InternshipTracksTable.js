import TracksTableHeader from "./TableHeader";
import InternshipTracks from "./InternshipTracks";

const InternshipTracksTable = (props) => {
  return (
    <section className="table-section">
      <table className="table">
        <TracksTableHeader />
        <InternshipTracks />
        <InternshipTracks />
        <InternshipTracks />
        <InternshipTracks />
        <InternshipTracks />
      </table>
    </section>
  );
};

export default InternshipTracksTable;
