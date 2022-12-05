import InternshipTrack from "./InternshipTrack";
const InternshipTracks = () => {
  const tableDeets = [{
    col1:[],
    col2:[],
    col3:"",
    col4:"",
    col5:""
  }, 
    `Product Design GVI \n
    Amet minim mollit non deserunt est sit aliqua dolor do amet sint.
`,
    `120 days
    (created on 10/12/2021)`,
    20000,
  ];
  return <InternshipTrack tableContent={tableDeets}></InternshipTrack>;
};

export default InternshipTracks;
