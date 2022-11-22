import "./UserBadge.css";
import avi from "../../assets/black-female-icon.jpg";

const UserBadge = (props) => {
  return (
    <li className={`${props.classname}`}>
      <img src={avi} className="user-avatar" /> <span> Adam Scott</span>{" "}
    </li>
  );
};

export default UserBadge;
