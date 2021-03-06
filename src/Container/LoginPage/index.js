import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faAddressCard, faLock } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faGoogle  } from "@fortawesome/free-brands-svg-icons";
import InputField from "../../Component/InputField";
import CheckboxField from "../../Component/CheckboxField";
import Button from "../../Component/Button";
import Notification from "../../Component/Notification";
import sideImage from "../../Assets/Images/20944201.jpg";
import  { doPost } from '../../Utils/fetchWrapper';
import Loader from "../../Component/Loader";

const LoginPage = () => {
    const navigate = useNavigate();
    
    const [data, setData] = useState({});
    const [error, setError] = useState({});
    const [isLoading, setIsLoading] = useState(false);

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

    const onClickLogin = () => {
        const payload = {
            userName: data?.userNameField || '',
            password: data?.passwordField || '',
        }
        setIsLoading(true);
        doPost('/login', payload).then((res) => {
            navigate('/home_page');
            sessionStorage.access = res?.data?.accessToken?.split(' ')[1];
            setIsLoading(false);
        }).catch((error) => {
            console.log(error);
            Notification(error?.message || '', 'Error');
            setIsLoading(false);
        })
    };

    return <div className="login-page-main-container">
        <div className="login-page-left-container">
            <img className="login-page-left-container-img" src={sideImage} alt=""></img>
            <Link to={'/sign_up'} className="login-page-left-container-link">Create Account</Link>
        </div>
        <div className="login-page-right-container">
            <div>
                <div className="login-page-header">Log In</div>
                <InputField
                    classNameContainer="login-page-name-field"
                    className="login-page-name-field-tag"
                    type="text"
                    placeHolder="Your Name"
                    name="userNameField"
                    value={data?.userNameField ?? ''}
                    onChange={onChangeData}
                    prefix={<FontAwesomeIcon icon={faUser} />}
                    suffix={<FontAwesomeIcon color="#818181" icon={faAddressCard} />}
                />
                <InputField
                    classNameContainer="login-page-password-field"
                    className="login-page-name-field-tag"
                    type="password"
                    placeHolder="Password"
                    name="passwordField"
                    value={data?.passwordField ?? ''}
                    onChange={onChangeData}
                    prefix={<FontAwesomeIcon icon={faLock} />}
                    suffix={<FontAwesomeIcon color="#818181" icon={faAddressCard} />}
                />
                <CheckboxField
                    classNameContainer="login-page-remember-me-field"
                    className="login-page-remember-me-tag"
                    label="Remember Me"
                    name="rememberMeField"
                    value={data?.rememberMeField ?? ''}
                    onChange={onChangeData}
                />
                <Button
                    classNameContainer="login-page-login-button-field"
                    className="login-page-login-button"
                    onClick={onClickLogin}
                    disabled={isLoading}
                >
                    {isLoading ? 'Logging In...' : 'Log In' }
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