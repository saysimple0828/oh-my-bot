import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { AiOutlineBell } from "react-icons/ai";

interface headerProps {
  leftIcons: string[];
  title: string;
  rightIcons: string[];
}

const Header: React.FC<headerProps> = ({ title }) => {
  return (
    <div className="header">
      <div className="header-brand">
      <FiArrowLeft className="back-button" />
      </div>
      <div className="header-title">
        <h1>{title}</h1>
      </div>
      <div className="header-menu">
        <ul className="header-nav">
          <li className="header-item">
            <a href="/notifications">
              <AiOutlineBell />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
