import {Link} from "react-router-dom";
import "./style/style.css";

export default function NavBar() {
  return (
    <nav>
      <div className="logo-container">
        <img src="/logo.png" alt="image" className="logo"/>
        <span className="logo-text">YSV-dev</span>
      </div>
        <div className="nav-container">
          <Link to="">Главная</Link>
          <Link to="section_one">Раздел 1</Link>
          <Link to="section_two">Раздел 2</Link>
          <Link to="section_three">Раздел 3</Link>
          <Link to="about">О проекте</Link>
        </div>
        
    </nav>
  )
}
