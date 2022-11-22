import CreateInternship from "./CreateInternship";
import "./Header.css"

const Header = () => {
  return (
    <div className="header-container">
      <p className="header-title"> Internships</p>
      <CreateInternship />
    </div>
  );
};

export default Header;
