import "./CreateInternship.css"
import { icons } from "../../assets";

const CreateInternship = () => {
  return (
    <div>
      <button className="create-internship-btn">
        <img src={icons.addSquare}/>
        <span>Create new internship</span>
      </button>
    </div>
  );
};

export default CreateInternship