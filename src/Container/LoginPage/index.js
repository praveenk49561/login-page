import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faAddressCard, faLock } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faGoogle  } from "@fortawesome/free-brands-svg-icons";
import InputField from "../../Component/InputField";
import CheckboxField from "../../Component/CheckboxField";
import Button from "../../Component/Button";
import sideImage from "../../Assets/Images/20944201.jpg";

const LoginPage = () => {
    return <div className="login-page-main-container">
        <div className="login-page-left-container">
            <img className="login-page-left-container-img" src={sideImage} alt=""></img>
            <a href="#" style={{ margin: '0 0.5rem 4rem 0.5rem' }}>Create account</a>
        </div>
        <div className="login-page-right-container">
            <div>
                <div className="login-page-header">Log In</div>
                <InputField
                    classNameContainer="login-page-name-field"
                    className="login-page-name-field-tag"
                    type="text"
                    placeHolder="Your Name"
                    prefix={<FontAwesomeIcon icon={faUser} />}
                    suffix={<FontAwesomeIcon color="#818181" icon={faAddressCard} />}
                />
                <InputField
                    classNameContainer="login-page-password-field"
                    className="login-page-name-field-tag"
                    type="password"
                    placeHolder="Password"
                    prefix={<FontAwesomeIcon icon={faLock} />}
                    suffix={<FontAwesomeIcon color="#818181" icon={faAddressCard} />}
                />
                <CheckboxField
                    classNameContainer="login-page-remember-me-field"
                    className="login-page-remember-me-tag"
                    label="Remember Me"
                />
                <Button
                    classNameContainer="login-page-login-button-field"
                    className="login-page-login-button"
                >
                    Log In
                </Button>
                <div className="login-page-social-link-field">
                    <div className="login-page-social-link-header">Or login with</div>
                    <Button className="login-page-social-link facebook" classNameContainer="login-page-social-link-container"><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></Button>
                    <Button className="login-page-social-link twitter" classNameContainer="login-page-social-link-container"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></Button>
                    <Button className="login-page-social-link google" classNameContainer="login-page-social-link-container"><FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon></Button>
                </div>
            </div>
        </div>
    </div>
};

export default LoginPage;