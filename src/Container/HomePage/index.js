import React from "react";
import Navbar from "../../Component/Navbar";
import ProjectsPanel from "../ProjectsPanel";
import UsersPanel from "../UsersPanel";

const HomePage = () => {
    

    return <div className="home-page-main-container">
        <Navbar title="Home" />
        <div className="home-page-sub-container">
            <UsersPanel />
            <ProjectsPanel />
        </div>
    </div>;
};

export default HomePage;
