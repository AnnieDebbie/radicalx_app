import "./CreateInternship.css"
import { assets } from "../../assets";

const CreateInternship = () => {
  return (
    <div>
      <button className="create-internship-btn">
        <img src={assets.icons.addSquare}/>
        <span>Create new internship</span>
      </button>
    </div>
  );
};

export default CreateInternship