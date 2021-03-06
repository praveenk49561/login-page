import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faAddressCard, faLock, faEnvelope, faMobile, faIdBadge } from "@fortawesome/free-solid-svg-icons";
import InputField from "../../Component/InputField";
import Button from "../../Component/Button";
import Notification from "../../Component/Notification";
import sideImage from "../../Assets/Images/Mobile-login.jpg";
import { doPost } from "../../Utils/fetchWrapper";

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

    const onClickCreate = () => {
        const postableData = {
            name: data?.userNameField ?? '',
            password: data?.passwordField ?? '',
            empId: data?.userEmpIdField ?? '',
            emailId: data?.userEmailIdField ?? '',
            mobileNo: data?.userMobileNoField ?? '',

        }
        setIsLoading(true);
        doPost('/users', postableData).then((res) => {
            navigate('/');
            Notification(res?.message || '', "Success");
            setIsLoading(false);
        }).catch((error) => {
            console.log(error);
            Notification(error?.message || '', "Error");
            setIsLoading(false);
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
                    value={data?.userNameField ?? ''}
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
                    value={data?.userEmpIdField ?? ''}
                    onChange={onChangeData}
                    prefix={<FontAwesomeIcon icon={faIdBadge} />}
                    suffix={<FontAwesomeIcon color="#818181" icon={faAddressCard} />}
                />
                <InputField
                    classNameContainer="signup-page-name-field"
                    className="signup-page-name-field-tag"
                    type="email"
                    placeHolder="Your Email Id"
                    name="userEmailIdField"
                    value={data?.userEmailIdField ?? ''}
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
                    value={data?.userMobileNoField ?? ''}
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
                    value={data?.passwordField ?? ''}
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
                    {isLoading ? 'Creating...' : 'Create'}
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