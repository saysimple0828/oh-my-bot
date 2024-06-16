import React, { useState } from "react";
import styles from "./Navbar.module.css"; // Navbar 스타일링을 위한 CSS 모듈 파일
import { Button } from "@chakra-ui/react";

const Navbar: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [chats, setChats] = useState([
    {
      id: 0,
      title: "첫번째 채팅",
    },
    {
      id: 1,
      title: "두번째 채팅",
    },
  ]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <nav
      className={
        sidebarOpen ? styles.navbar : `${styles.navbar} ${styles.active}`
      }
    >
      <div className={styles.navbar__logo}>
        <h2>Logo</h2>
      </div>
      <ul className={styles.navbar__links}>
        {chats.map(({ id, title }) => (
          <Button key={id} width="200px" backgroundColor="gray">
            {title}
          </Button>
        ))}
      </ul>
      <div className={styles.navbar__toggle} onClick={toggleSidebar}>
        <i className={sidebarOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </nav>
  );
};

export default Navbar;
