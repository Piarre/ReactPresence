import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div>
      <aside className="aside">
        <img src={`${process.env.PUBLIC_URL}/assets/discord-logo.png`} className="img-discord" />
        <button className="home">Home</button>
        <button className="ci">Credit & Informtions</button>
      </aside>
    </div>
  );
};

export default Sidebar;
