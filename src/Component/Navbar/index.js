import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";

const Navbar = (props) => {
    const { title } = props;
    const navigate = useNavigate();
    const onClickSignout = () => {
        navigate('/');
        sessionStorage.access = "";
    }
    return <div className="nav-bar-main-container">
        <div className="nav-bar-header-container">
            <div className="nav-bar-circle"></div>
            <div className="nav-bar-rec"></div>
            <div className="nav-bar-header">{title}</div>
        </div>
        <div className="nav-bar-signout" onClick={onClickSignout}>
            <FontAwesomeIcon icon={faSignOut} />
        </div>
    </div>;
};

export default Navbar