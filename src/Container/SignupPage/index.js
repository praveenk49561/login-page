import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faAddressCard, faLock, faEnvelope, faMobile, faIdBadge } from "@fortawesome/free-solid-svg-icons";
import InputField from "../../Component/InputField";
import Button from "../../Component/Button";
import sideImage from "../../Assets/Images/Mobile-login.jpg";
import { doPost } from "../../Utils/fetchWrapper";

const LoginPage = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({});
    const [error, setError] = useState({});

    const onChangeData = (event) => {
        let updatedData = { ...data };
        switch (event?.target?.name) {
            case 'rememberMeField':
                updatedData = { ...updatedData, [event.target.name]: event.target.checked };
                break;
            default:
                updatedData = { ...updatedData, [event.target.name]: event.target.value };
                break;
        }
        setData({ ...data, ...updatedData });
    };

    const onClickCreate = () => {
        doPost('/user/create', data).then((res) => {
            navigate('/');
        }).catch((error) => {
            console.log(error);
        })
    };

    return <div className="signup-page-main-container">
        <div className="signup-page-left-container">
            <img className="signup-page-left-container-img" src={sideImage} alt=""></img>
        </div>
        <div className="signup-page-right-container">
            <div>
                <div className="signup-page-header">Sign Up</div>
                <InputField
                    classNameContainer="signup-page-name-field"
                    className="signup-page-name-field-tag"
                    type="text"
                    placeHolder="Your Name"
                    name="userNameField"
                    onChange={onChangeData}
                    prefix={<FontAwesomeIcon icon={faUser} />}
                    suffix={<FontAwesomeIcon color="#818181" icon={faAddressCard} />}
                />
                <InputField
                    classNameContainer="signup-page-name-field"
                    className="signup-page-name-field-tag"
                    type="text"
                    placeHolder="Your Emp Id"
                    name="userEmpIdField"
                    onChange={onChangeData}
                    prefix={<FontAwesomeIcon icon={faIdBadge} />}
                    suffix={<FontAwesomeIcon color="#818181" icon={faAddressCard} />}
                />
                <InputField
                    classNameContainer="signup-page-name-field"
                    className="signup-page-name-field-tag"
                    type="email"
                    placeHolder="Your Email Id"
                    name="userEmpIdField"
                    onChange={onChangeData}
                    prefix={<FontAwesomeIcon icon={faEnvelope} />}
                    suffix={<FontAwesomeIcon color="#818181" icon={faAddressCard} />}
                />
                <InputField
                    classNameContainer="signup-page-name-field"
                    className="signup-page-name-field-tag"
                    type="text"
                    placeHolder="Your Mobile No"
                    name="userMobileNoField"
                    onChange={onChangeData}
                    prefix={<FontAwesomeIcon icon={faMobile} />}
                    suffix={<FontAwesomeIcon color="#818181" icon={faAddressCard} />}
                />
                <InputField
                    classNameContainer="signup-page-password-field"
                    className="signup-page-name-field-tag"
                    type="password"
                    placeHolder="Password"
                    name="passwordField"
                    onChange={onChangeData}
                    prefix={<FontAwesomeIcon icon={faLock} />}
                    suffix={<FontAwesomeIcon color="#818181" icon={faAddressCard} />}
                />
                {/* <CheckboxField
                    classNameContainer="signup-page-remember-me-field"
                    className="signup-page-remember-me-tag"
                    label="Remember Me"
                    name="rememberMeField"
                    onChange={onChangeData}
                /> */}
                <Button
                    classNameContainer="signup-page-login-button-field"
                    className="signup-page-login-button"
                    onClick={onClickCreate}
                >
                    Create
                </Button>
                {/* <div className="signup-page-social-link-field">
                    <div className="signup-page-social-link-header">Or login with</div>
                    <Button className="signup-page-social-link facebook" classNameContainer="signup-page-social-link-container"><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></Button>
                    <Button className="signup-page-social-link twitter" classNameContainer="signup-page-social-link-container"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></Button>
                    <Button className="signup-page-social-link google" classNameContainer="signup-page-social-link-container"><FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon></Button>
                </div> */}
            </div>
        </div>
    </div>
};

export default LoginPage;